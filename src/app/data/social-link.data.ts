import { SocialLinkSchema } from '@data/schema/social-links.schema';
import { envelope } from '@icon/solid.icon';
import { github, instagram, linkedin } from '@icon/brand.icon';

const socialLinkData: SocialLinkSchema[] = [
  {
    name: 'Github',
    path: github,
    link: 'https://github.com/Ali-khursheed',
    color: '#c3c3c3',
  },
  {
    name: 'LinkedIn',
    path: linkedin,
    link: 'https://www.linkedin.com/in/ali-khursheed-b0084b264/',
    color: '#1469C7',
  },
  {
    name: 'Message',
    path: envelope,
    link: 'https://mail.google.com/mail/?view=cm&fs=1&to=alikhursheed911@gmail.com&su=Hi%20Ali',
    color: '#e74c3c',
  },
  //   {
  //     name: 'Instagram',
  //     path: instagram,
  //     link: 'https://instagram.com/mrckvnflrs',
  //     color: '#E52765',
  //   },
];

export default socialLinkData;
