import { ProjectData } from '@/lib/types';
import { radiantFestivalImages, sp01Images, strategySphereImages, tradeTribeImages } from '@/lib/data/projectImages';

const projectsData: ProjectData[] = [
    {
        title: 'StrategySphere Advisors',
        slug: 'strategysphere-advisors',
        description: {
            summary: 'Business website',
            highlights: [
                "Dynamic blog integrated with Sanity.io's server-side filtering",
                'Scalable architecture for easy adaptations ',
                'Fully responsive layout',
            ],
        },
        techStack: ['Next.js', 'Tailwind', 'Vercel', 'Sanity.io'],
        image: {
            src: '/projects/strategysphere-frame.png',
            alt: 'StrategySphere Advisors',
        },
        link: 'https://strategysphere-advisors.vercel.app/en',
        yearBuilt: '2024',
        largeDescription:
            'StrategySphere Advisors is a business website that showcases the services and expertise of a consulting firm. The website features a dynamic blog integrated with Sanity.io, allowing for server-side filtering of content. The architecture is designed to be scalable, making it easy to adapt to future needs. The layout is fully responsive, ensuring a seamless experience across devices.',
        showcaseImages: strategySphereImages,
        thumbnail: '/projects-showcase/strategysphere-advisors-thumbnail.jpg',
    },
    {
        title: 'Trade Tribe',
        slug: 'trade-tribe',
        description: {
            summary: 'A Hiking boots custom e-commerce website',
            highlights: [
                'WooCommerce integration',
                'Fully Dynamic Content',
                'ACF plugin for easy management',
            ],
        },
        techStack: ['WordPress', 'WooCommerce', 'ACF'],
        image: {
            src: '/projects/trade-tribe-frame.png',
            alt: 'Trade Tribe',
        },
        link: 'https://www.trade-tribe.duckdns.org/',
        yearBuilt: '2025',
        largeDescription:
            'Trade Tribe is a custom e-commerce website designed for a hiking boots brand. The site is built on WordPress and integrates WooCommerce for seamless online shopping. It features fully dynamic content, allowing for easy updates and management. The ACF (Advanced Custom Fields) plugin is utilized to provide a user-friendly interface for content management, making it simple for the client to maintain the site.',
        showcaseImages: tradeTribeImages,
        thumbnail: '/projects-showcase/trade-tribe-thumbnail.jpg',
    },
    {
        title: 'Radiant festival',
        slug: 'radiant-festival',
        description: {
            summary: 'A festival themed website',
            highlights: [
                'Payment integration with Stripe API',
                'Framer Motion animations',
                'Fully responsive design',
            ],
        },
        techStack: ['Next.js', 'Tailwind CSS', 'Stripe', 'Framer Motion'],
        image: {
            src: '/projects/radiant-festival-frame.png',
            alt: 'StrategySphere Advisors',
        },
        link: 'https://radiant-festival.vercel.app/',
        yearBuilt: '2024',
        largeDescription: 
            'Radiant Festival is a festival-themed website that offers a vibrant and engaging experience for users. The site features payment integration with the Stripe API, allowing for secure transactions. Framer Motion animations are used to enhance the user experience, providing smooth transitions and interactive elements. The design is fully responsive, ensuring that it looks great on all devices.',
        showcaseImages: radiantFestivalImages,
        thumbnail: '/projects-showcase/radiant-festival-thumbnail.jpg',
    },
    {
        title: 'SP_01',
        slug: 'sp-01',
        description: {
            summary: 'Three.js website',
            highlights: [
                'Headset 3D model with interactive features',
                'Fully responsive design',
                'Different color showcases',
            ],
        },
        techStack: ['Next.js', 'Tailwind CSS', 'Three.js'],
        image: {
            src: '/projects/sp-01-frame.png',
            alt: 'StrategySphere Advisors',
        },
        link: 'https://sp-01-model.vercel.app/',
        yearBuilt: '2024',
        largeDescription: 
            'SP_01 is a website that showcases a headset 3D model with interactive features. Built with Three.js, the site allows users to explore the model in a fully responsive design. Different color showcases are available, providing a dynamic and engaging experience for users. The website is designed to highlight the features and capabilities of the headset, making it an effective marketing tool.',
        showcaseImages: sp01Images,
        thumbnail: '/projects-showcase/sp-01-thumbnail.jpg',
    },
];

export default projectsData;
