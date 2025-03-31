import { GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import ContentLayout, {
  CoverLayout,
} from '../../components/layout/ContentLayout'
import Head from 'next/head'
import DefaultErrorPage from 'next/error'
import { BlogLayoutWhite } from '../../components/layout/BlogLayout'
import type { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'
import Moment from 'react-moment'
import Link from 'next/link'
import { Colors, getColorClassByName } from '../../lib/colors'
import { Share } from '../../components/Share'
import TagsIcon from '../../assets/tags.svg'
import Pagination from '../../components/Pagination'
import Comment from '../../components/Comment'
import { WidgetMeMedium, WidgetMeSmall } from '../../components/widget/WidgetMe'
import {
  WidgetOverViewMedium,
  WidgetOverViewSmall,
} from '../../components/widget/WidgetOverview'
import ThemedImage from '../../components/ThemedImage'
import PostSeo from '../../components/PostSeo'
import { useRouter } from 'next/router'
import { getPostBlocks, getPosts } from '../../lib/apis'
import { TPost } from '../../types'
import { filterPosts } from '../../lib/apis/filterPosts'
import { ExtendedRecordMap } from 'notion-types'
import readingTime from 'reading-time'
import dynamic from 'next/dynamic'

const ContentRenderer = dynamic(
  () => import('../../components/ContentRenderer'),
  { ssr: false }
)

const PostPage: NextPage<{
  post: TPost
  posts: TPost[]
  recordMap: ExtendedRecordMap
  pagination: any
}> = ({ post, recordMap, pagination, posts }) => {
  const router = useRouter()
  const { locale } = router

  if (!post || !recordMap) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    )
  }

  const { text } = readingTime(
    Object.values(recordMap.block || {})
      .map((b) => b?.value?.properties?.title?.flat() || '')
      .flat()
      .join('')
  )

  return (
    <>
      <PostSeo
        date={new Date(post.date.start_date)}
        description={post.summary || ''}
        image={post.thumbnail || ''}
        locale={locale || ''}
        title={post.title}
        url={router.asPath}
      />
      <ContentLayout>
        <header className="flex flex-col text-justify break-word">
          <div className="mt-3 md:mt-6">
            {post.category?.[0] && (
              <Link href={`/category/${post.category[0]}`}>
                <p
                  className={`inline-block mb-2 text-xs font-bold text-true-gray-600 ${
                    Colors[getColorClassByName(post.category[0])]?.text?.normal
                  } `}
                >
                  {post.category[0]}
                </p>
              </Link>
            )}
            <div className="flex flex-row items-center mt-2 space-x-2 text-sm font-semibold text-true-gray-600 dark:text-true-gray-400">
              <Moment date={post.date} fromNow format="yyyy.MM.DD" local />
              <p>·</p>
              <p>{text}</p>
              <p>·</p>
              <p>
                <span id="twikoo_visitors">
                  <span className="animate-pulse">-</span>
                </span>{' '}
                Views
              </p>
            </div>
          </div>
          <p className="my-6 text-4xl font-bold whitespace-pre-wrap lg:text-5xl">
            {post.title}
          </p>
          <p className="mb-4 text-xl font-medium text-true-gray-600 lg:text-2xl">
            {post.summary}
          </p>
          <Share />
        </header>
      </ContentLayout>
      <CoverLayout>
        <div className="relative w-full h-full md:rounded-3xl">
          <ThemedImage
            className="z-0 overflow-hidden transition-all duration-500 ease-in-out md:rounded-3xl"
            post={post}
          />
        </div>
      </CoverLayout>
      <ContentLayout>
        <ContentRenderer recordMap={recordMap} />
        <div className="flex flex-col mt-8 gap-4 w-full">
          <div className="flex flex-wrap items-center gap-2 overflow-scroll scrollbar-hide">
            <TagsIcon />
            {post.tags?.map((tagName: string) => (
              <Link href={`/tags/${tagName}`} key={tagName}>
                <div
                  className={`${
                    Colors[getColorClassByName(tagName)]?.bg?.msg
                  } bg-gradient-to-bl from-white/20 text-white flex items-center text-xs py-1 px-2  rounded-full whitespace-nowrap`}
                >
                  {tagName}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Pagination pagination={pagination} />
      </ContentLayout>
      <ContentLayout>
        <div className="hidden grid-cols-2 gap-4 sm:grid md:grid-cols-2">
          <WidgetMeMedium fix={true} />
          <WidgetOverViewMedium posts={posts} fix={true} />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:hidden md:grid-cols-2">
          <WidgetMeSmall />
          <WidgetOverViewSmall posts={posts} />
        </div>
      </ContentLayout>
      <ContentLayout>
        <Comment />
      </ContentLayout>
    </>
  )
}

export const getStaticPaths = async () => {
  let posts: TPost[] = []

  try {
    posts = await getPosts()
  } catch (error) {
    console.error('Error fetching posts:', error)
    return { paths: [], fallback: 'blocking' }
  }

  const paths = posts
    .map((p) => p?.slug)
    .filter((slug): slug is string => typeof slug === 'string' && slug.trim() !== '')
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: 'blocking', // Allows dynamic rendering if slug isn't found
  }
}

interface Props extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Props

  let posts: TPost[] = []
  let recordMap: ExtendedRecordMap | null = null
  let post: TPost | null = null

  try {
    posts = await getPosts()
    const filteredPosts = filterPosts(posts)
    post = filteredPosts.find((p) => p.slug === slug) || null

    if (post?.id) {
      recordMap = await getPostBlocks(post.id)
    }
  } catch (error) {
    console.error(`Error fetching post details for slug: ${slug}`, error)
  }

  if (!post || !recordMap) {
    return {
      notFound: true,
    }
  }

  const pageIndex = posts.findIndex((p) => p.slug === slug)
  const pagination = {
    prev: pageIndex > 0 ? posts[pageIndex - 1] : null,
    next: pageIndex < posts.length - 1 ? posts[pageIndex + 1] : null,
  }

  return {
    props: { posts, post, pagination, recordMap },
    revalidate: 3600,
  }
}

;(PostPage as NextPageWithLayout).getLayout = function getLayout(
  page: ReactElement
) {
  return <BlogLayoutWhite>{page}</BlogLayoutWhite>
}

export default PostPage
