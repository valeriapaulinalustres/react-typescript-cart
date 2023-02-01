import ig from '../assets/img/Instagram.svg'
import fb from '../assets/img/Facebook.svg'
import yt from '../assets/img/Youtube.svg'
import li from '../assets/img/Linkedin.svg'
import tw from '../assets/img/Twitter.svg'

interface socialNetInterface {
    name: string,
    url: string,
    icon: string
}

export const socialNetworks: Array<socialNetInterface> = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/',
        icon: fb
    },
    {
        name: 'Twitter',
        url: 'https://www.twitter.com/',
        icon: tw
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/',
        icon: ig
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/',
        icon: li
    },
    {
        name: 'Youtube',
        url: 'https://www.youtube.com/',
        icon: yt
    },
]
