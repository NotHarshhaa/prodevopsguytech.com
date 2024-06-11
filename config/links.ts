import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiTelegram,
  SiWhatsapp,
} from '@icons-pack/react-simple-icons'
import { FC } from 'react'

export type LinkType = {
  url: string
  icon: FC<any> | string
  color: string
  fill: string
  border: string
  text: string
  shadow: string
  id?: string
  name?: string
}

export const links: readonly [
  LinkType,
  LinkType,
  LinkType,
  LinkType,
  LinkType
] = [
  {
    url: 'https://github.com/NotHarshhaa',
    icon: SiGithub,
    color: 'from-bg-[#24292f] to-bg-[#040d21]',
    fill: 'fill-[#181717]',
    border: 'border-[#181717]',
    text: 'text-[#181717]',
    shadow: 'shadow-true-gray-400',
    id: 'GitHub',
    name: 'GitHub',
  },
  {
    url: 'http://linkedin.com/in/Harshhaa-vardhan-reddy/',
    icon: SiLinkedin,
    fill: 'fill-[#0A66C2]',
    border: 'border-[#0A66C2]',
    shadow: 'shadow-blue-300',
    text: 'text-[#0A66C2]',
    color: 'from-bg-[#0b66c2] to-bg-[#008bff]',
    name: 'LinkedIn',
  },
  {
    url: 'https://telegram.me/prodevopsguy',
    icon: SiTelegram,
    fill: 'fill-[#0088cc]',
    border: 'border-[#0088cc]',
    shadow: 'shadow-blue-300',
    text: 'text-[#0088cc]',
    color: 'from-bg-[#0088cc] to-bg-[#0088cc]',
    name: 'Telegram',
  },
  {
    url: 'https://chat.whatsapp.com/EEHYHnty7s8DozPtSsKYdJ',
    icon: SiWhatsapp,
    color:
      'from-bg-[#25D366] to-bg-[#25D366] dark:(from-bg-[#25D366] to-bg-[#25D366])',
    fill: 'fill-[#25D366]',
    border: 'border-[#25D366]',
    shadow: 'shadow-green-300',
    text: 'text-[#25D366]',
    name: 'WhatsApp',
  },
  {
    url: 'https://instagram.com/prodevopsguy',
    icon: SiInstagram,
    color: 'from-bg-[#C13584] to-bg-[#F56040]',
    fill: 'fill-[#da282a]',
    border: 'border-[#da282a]',
    shadow: 'shadow-red-300',
    text: 'text-[#da282a]',
    name: 'Instagram',
  },
]
