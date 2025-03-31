import { GetStaticProps, NextPage } from 'next'
import PostList from '../../components/PostList'
import { ParsedUrlQuery } from 'querystring'
import { getAllSelectItemsFromPosts } from '../../lib/apis/getAllSelectItemsFromPosts'
import { getPosts } from '../../lib/apis'
import { TPost } from '../../types'
import { getColorClassByName } from '../../lib/colors'
import { NextSeo } from 'next-seo'
import { CONFIG } from '../../config/blog'
import { useRouter } from 'next/router'
import { filterPosts } from '../../lib/apis/filterPosts'

const TagPage: NextPage<{
  posts: TPost[]
  tag: { name: string; count: number }
}> = ({ posts, tag }) => {
  const router = useRouter()
  const { locale } = router

  return (
    <>
      <NextSeo
        title={`${tag.name} | ${CONFIG.BLOG_TITLE}`}
        canonical={router.asPath}
        description={`${tag.name} in prodevopsguy's blog`}
        openGraph={{
          title: `${CONFIG.BLOG_TITLE}`,
          description: `${tag.name} in prodevopsguy's blog`,
          locale,
          type: 'website',
          url: `${router.asPath}`,
        }}
      />
      <PostList
        posts={posts}
        filter={tag.name}
        color={getColorClassByName(tag.name)}
        count={tag.count}
      />
    </>
  )
}

export const getStaticPaths = async () => {
  let tags: Record<string, number> = {}

  try {
    const allPosts = await getPosts()
    const filteredPosts = filterPosts(allPosts)
    tags = getAllSelectItemsFromPosts('tags', filteredPosts)
  } catch (error) {
    console.error('Error fetching tags:', error)
  }

  return {
    paths: Object.keys(tags).map((tag) => ({ params: { tag } })),
    fallback: 'blocking', // Load dynamically if missing
  }
}

interface Props extends ParsedUrlQuery {
  tag: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { tag } = params as Props

  let posts: TPost[] = []
  let tags: Record<string, number> = {}

  try {
    const allPosts = await getPosts()
    const filteredPosts = filterPosts(allPosts)
    tags = getAllSelectItemsFromPosts('tags', filteredPosts)

    posts = filteredPosts.filter((post) => (post.tags ?? []).includes(tag))
  } catch (error) {
    console.error(`Error fetching posts for tag ${tag}:`, error)
  }

  if (!tags[tag]) {
    return {
      notFound: true, // Avoids build errors when tag is missing
    }
  }

  return {
    props: {
      posts,
      tag: { name: tag, count: tags[tag] || 0 },
    },
    revalidate: 3600, // Revalidate every 1 hour
  }
}

export default TagPage
