import { links } from '../config/links'
import {
  SiGmail,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiRealm,
  SiMongodb,
  SiHtml5,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiSpring,
  SiSpringboot,
  SiDocker,
  SiGit,
  SiRedis,
  SiPostman,
  SiExpress,
  SiGraphql,
  SiReactquery,
  SiRedux,
  SiReduxsaga,
  SiCss3,
  SiGoogle,
} from '@icons-pack/react-simple-icons'

export const me = {
  site: 'https://www.morethanmin.com',
  name: 'Sangmin Lee',
  image: '/static/images/portrait.jpg',
  email: 'mailto:morethanmin.dev@gmail.com',
  location: {
    name: 'Seoul, South Korea',
    light: '/static/images/map_light.png',
    dark: '/static/images/map_dark.png',
  },
  bio: '💻 🎨 🎮 ⚡️',
  social: [
    ...links,
    {
      url: 'mailto:morethanmin.dev@gmail.com',
      icon: SiGmail,
      fill: 'fill-[#DB4437]',
      border: 'border-[#DB4437]',
      shadow: 'shadow-pink-300',
      text: 'text-[#DB4437]',
      color: 'from-bg-[#DB4437] to-bg-[#DB4437]',
      name: 'Gmail',
    },
  ],
  overview: [],
  education: [
    {
      name: 'Myongji University',
      time: '2019-2022',
      degree: 'BS, Computer Science',
      color: 'blue',
      logo: '/static/images/njupt.png',
    },
    {
      name: 'Nudge Healthcare',
      time: '2021-2022',
      degree: 'Frontend Engineer',
      color: 'yellow',
      logo: '/static/images/neu.png',
    },
    {
      name: 'PRND Company',
      time: '2023*',
      degree: 'Frontend Engineer',
      color: 'red',
      logo: '/static/images/nyit.png',
    },
  ],
  openSources: [
    {
      title: 'morethan-log',
      authors: [{ name: 'A static blog using notion database 😎' }],
      website: 'https://morethan-log.vercel.app',
      link: 'https://github.com/morethanmin/morethan-log',
      tags: [
        {
          name: '⭐ 600+',
          color: 'yellow',
        },
        {
          name: '🍴 300+',
          color: 'blue',
        },
        {
          name: 'Next.js',
          color: 'red',
        },
        {
          name: 'Blog Template',
          color: 'orange',
        },
        {
          name: 'Notion API',
          color: 'green',
        },
      ],
    },
    {
      title: 'cursorify',
      authors: [{ name: 'Customizable cursor component in your project 🕹️' }],
      website: 'https://cursorify.github.io/',
      link: 'https://github.com/cursorify/cursorify',
      tags: [
        {
          name: 'React',
          color: 'gray',
        },
        {
          name: 'Library',
          color: 'pink',
        },
        {
          name: 'Component',
          color: 'brown',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Coquality',
      description:
        'A new blogging platform where we share knowledge, support each other, and grow together.',
      tip: 'Coming Soon on App Store',
      link: 'https://github.com/depromeet/coquality-client',
      images: [],
      image: '/static/images/coquality/view.svg',
      icon: '/static/images/coquality-logo.svg',
      logo: {
        light: '/static/images/coquality/logo_light.svg',
        dark: '/static/images/coquality/logo_dark.svg',
      },
    },
    {
      name: 'Highlight',
      description: 'Leave your own highlights in the highlights of the music.',
      tag: ['Web App', 'Database Design', 'Recommendation algorithm'],
      video: '/static/videos/highlight.mov',
      icon: '/static/images/highlight.svg',
      link: 'https://github.com/CU-Team',
    },
  ],
  skills: [
    [
      { name: 'React', color: 'bg-[#61DAFB]', icon: SiReact },
      { name: 'Next.js', color: 'bg-[#000000]', icon: SiNextdotjs },
      { name: 'Javascript', color: 'bg-[#F7DF1E]', icon: SiJavascript },
      { name: 'Typescript', color: 'bg-[#3178C6]', icon: SiTypescript },
      { name: 'HTML5', color: 'bg-[#E34F26]', icon: SiHtml5 },
      { name: 'CSS3', color: 'bg-[#1572B6]', icon: SiCss3 },
      { name: 'React Query', color: 'bg-[#F7931E]', icon: SiReactquery },
    ],
    [
      { name: 'Spring Boot', color: 'bg-[#F05138]', icon: SiSpringboot },
      { name: 'Python', color: 'bg-[#3776AB]', icon: SiPython },
      { name: 'Node.js', color: 'bg-[#339933]', icon: SiNodedotjs },
      { name: 'Vue.js', color: 'bg-[#4FC08D]', icon: SiVuedotjs },
      { name: 'Tailwind CSS', color: 'bg-[#06B6D4]', icon: SiTailwindcss },
      { name: 'Spring', color: 'bg-[#6DB33F]', icon: SiSpring },
      { name: 'Redux', color: 'bg-[#66CCFF]', icon: SiRedux },
      { name: 'Redux Saga', color: 'bg-[#333333]', icon: SiReduxsaga },
      { name: 'Express', color: 'bg-[#F7931E]', icon: SiExpress },
      { name: 'Graphql', color: 'bg-[#007396]', icon: SiGraphql },
    ],
    [
      { name: 'MySQL', color: 'bg-[#4479A1]', icon: SiMysql },
      { name: 'Redis', color: 'bg-[#DC382D]', icon: SiRedis },
      { name: 'Realm', color: 'bg-[#39477F]', icon: SiRealm },
      { name: 'MongoDB', color: 'bg-[#47A248]', icon: SiMongodb },
      { name: 'Git', color: 'bg-[#F05032]', icon: SiGit },
      { name: 'Postman', color: 'bg-[#FF6C37]', icon: SiPostman },
      { name: 'Docker', color: 'bg-[#0AA6D8]', icon: SiDocker },
    ],
  ],
}
