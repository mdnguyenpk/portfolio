import apple1 from '@assets/images/apple1.png'
import apple2 from '@assets/images/apple2.png'
import apple3 from '@assets/images/apple3.png'
import apple4 from '@assets/images/apple4.png'
import realpage1 from '@assets/images/realpage1.png'
import realpage2 from '@assets/images/realpage2.png'
import realpage3 from '@assets/images/realpage3.png'


export const experience = [
  {
    id: 1,
    role: 'Senior Frontend Developer',
    company: 'AKQA (Apple)',
    website: 'https://www.akqa.com',
    location: 'Sunnyvale, CA',
    period: 'Jan 2018 – Jan 2026',
    images: [
      { src: apple1, alt: 'AKQA (Apple) work photo 1' },
      { src: apple2, alt: 'AKQA (Apple) work photo 2' },
      { src: apple3, alt: 'AKQA (Apple) work photo 3' },
      { src: apple4, alt: 'AKQA (Apple) work photo 4' },
    ],
  },
  {
    id: 2,
    role: 'Freelance Developer / Entrepreneur',
    company: 'Self Employed',
    website: null,
    location: 'Manila, Philippines',
    period: 'May 2016 – Oct 2017',
    highlights: [
      'Delivered a job board for BPO companies end-to-end using CodeIgniter, PHP, and MySQL.',
      'Grew candidate counts from hundreds to thousands within six months, driving a 20% revenue increase.',
      'Built jobseeker data analysis reports that doubled the average candidate count per headhunter.',
    ],
  },
  {
    id: 3,
    role: 'Senior Software Engineer',
    company: 'RealPage',
    website: 'https://www.realpage.com',
    location: 'Campbell, CA',
    period: 'Jul 2013 – Jan 2016',
    images: [
      { src: realpage1, alt: 'RealPage photo 1' },
      { src: realpage2, alt: 'RealPage photo 2' },
      { src: realpage3, alt: 'RealPage photo 3' },
    ],
  },
  {
    id: 4,
    role: 'Software Engineer',
    company: 'OnLive, Inc.',
    website: null,
    location: 'Palo Alto, CA',
    period: 'Jul 2010 – Aug 2012',
    images: [
    ],
    highlights: [
      'Designed and built an internal QA dashboard (PHP, Yii, MySQL) for real-time video game compliance testing.',
      'Streamlined the certification testing workflow, cutting testing rounds by 40%.',
    ],
  },
]
