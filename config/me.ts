import { links } from '../config/links'
import {
  SiGmail,
} from '@icons-pack/react-simple-icons'
import { SiKubernetes, SiDocker, SiGithub, SiAnsible, SiTerraform, SiJenkins, SiAmazonaws, SiMicrosoftazure, SiAzuredevops } from 'react-icons/si';

export const me = {
  site: 'https://www.prodevopsguytech.com',
  name: 'ProDevOpsGuy Tech',
  image: '/static/images/portrait.png',
  email: 'mailto:prodevopsguytech@gmail.com',
  location: {
    name: 'Hyderabad, Telangana, India',
    light: '/static/images/map_light.png',
    dark: '/static/images/map_dark.png',
  },
  bio: 'DevOps/Cloud Community',
  social: [
    ...links,
    {
      url: 'mailto:prodevopsguytech@gmail.com',
      icon: SiGmail,
      fill: 'fill-[#DB4437]',
      border: 'border-[#DB4437]',
      shadow: 'shadow-pink-300',
      text: 'text-[#DB4437]',
      color: 'from-bg-[#DB4437] to-bg-[#DB4437]',
      name: 'Gmail',
    },
  ],
  openSources: [
    {
      title: 'DevOps/Cloud Real-Time Projects',
      authors: [{ name: '𝑫𝒆𝒗𝑶𝒑𝒔 𝑹𝒆𝒂𝒍 𝑾𝒐𝒓𝒍𝒅 𝑷𝒓𝒐𝒋𝒆𝒄𝒕𝒔 𝒇𝒐𝒓 𝑨𝒔𝒑𝒊𝒓𝒊𝒏𝒈 𝑫𝒆𝒗𝑶𝒑𝒔 𝑬𝒏𝒈𝒊𝒏𝒆𝒆𝒓𝒔 [𝑩𝒆𝒈𝒊𝒏𝒏𝒆𝒓 𝒕𝒐 𝑨𝒅𝒗𝒂𝒏𝒄𝒆𝒅]' }],
      website: 'https://github.com/NotHarshhaa/DevOps-Projects',
      link: 'https://github.com/NotHarshhaa/DevOps-Projects',
      tags: [
        {
          name: '⭐ 250+',
          color: 'yellow',
        },
        {
          name: '🍴 350+',
          color: 'blue',
        },
        {
          name: 'DevOps',
          color: 'red',
        },
        {
          name: 'Real-time Projects',
          color: 'orange',
        },
        {
          name: 'Cloud',
          color: 'green',
        },
      ],
    },
    {
      title: 'Into-the-DevOps',
      authors: [{ name: 'All DevOps Tools/Resources🕹️' }],
      website: 'https://github.com/NotHarshhaa/into-the-devops',
      link: 'https://github.com/NotHarshhaa/into-the-devops',
      tags: [
        {
          name: 'DevOps-Tools',
          color: 'gray',
        },
        {
          name: 'Resources',
          color: 'pink',
        },
        {
          name: 'DevOps-Resources',
          color: 'brown',
        },
      ],
    },
  ],
  skills: [
    [
      { name: 'Kubernetes', color: 'bg-[#326CE5]', icon: SiKubernetes },
      { name: 'Docker', color: 'bg-[#2496ED]', icon: SiDocker },
      { name: 'GitHub', color: 'bg-[#181717]', icon: SiGithub },
      { name: 'Ansible', color: 'bg-[#EE0000]', icon: SiAnsible },
      { name: 'Terraform', color: 'bg-[#623CE4]', icon: SiTerraform },
      { name: 'Jenkins', color: 'bg-[#D24939]', icon: SiJenkins },
      { name: 'AWS', color: 'bg-[#FF9900]', icon: SiAmazonaws },
      { name: 'Azure Cloud', color: 'bg-[#0089D6]', icon: SiMicrosoftazure },
      { name: 'Azure DevOps', color: 'bg-[#0078D7]', icon: SiAzuredevops },
    ],
  ],
}
