import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  cloudbloq,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  flutter,
  empirepixel,
  dvh,
  classic,
  tripguide,
  threejs,
  milestone,
  nuxtjs,
  nextjs,
  vuejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Programming Teacher",
    icon: creator,
  },
];

const technologies = [

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Nuxt JS",
    icon: nuxtjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js + Django Developer",
    company_name: "Milestone Technologies",
    icon: milestone,
    iconBg: "#f5fcf2",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Empire Pixel",
    icon: empirepixel,
    iconBg: "#383E56",
    date: "April 2021 - now",
    points: [
      "Develop high-quality mobile apps for both iOS and Android platforms.",
      "Build beautiful and responsive user interfaces with Flutter's widgets, which provide a wide range of customizable and reusable components",
      "Utilize Flutter's support for third-party packages to easily integrate with other libraries and APIs, and add new features and functionality to your app",
      "Collaborate with designers, developers, and other stakeholders to ensure that the app meets the requirements, is delivered on time, and meets the high standards of quality and performance",
      "Ensure the app is optimized for performance, stability, and security by using best practices, testing tools, and debugging techniques",
      "Stay up-to-date with the latest developments in the mobile app development industry, and continuously learn and improve your skills to stay at the top of your game.",
    ],
  },
  {
    title: "Full stack developer",
    company_name: "cloudbloq.io",
    icon: cloudbloq,
    iconBg: "#fff",
    date: "Sept 2021 - Jan 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Empire Pixel",
    icon: empirepixel,
    iconBg: "#383E56",
    date: "Sept 2021 - now",
    points: [
      "Develop cross-platform applications using Flutter, which allows for faster development and better performance.",
      "Write server-side code and integrate with web applications using Flask, Django, or FastAPI.",
      "Work with Flutter plugins to add additional functionality to mobile & desktop applications.",
      "Develop server-side rendered web applications using Next.js, which allows for faster page loads and better SEO.",
      "Use Next.js API routes to create serverless API endpoints.",
      "Work with Next.js dynamic routing to create dynamic pages and handle dynamic data.",
      "Develop and deploy serverless functions using Azure Functions.",
      "Create and manage Function Apps to run and scale serverless functions in Azure.",
      "Work with NoSQL database like MongoDB to implement document-based data storage.",
      "Integrate with Node.js, Python or other server-side frameworks to implement data operations like insert, update, delete, and retrieve.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Sebghat have worked as a great developer with us for one year",
    name: "Ahmad Zarif Adel",
    designation: "CTO",
    company: "Milestone Technologies",
    image: milestone,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "VIN Decoder & Vehicle History (DVH)",
    description:
      "A quick and easy way to decode VIN and generate vehicle history for used vehicles.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "ml",
        color: "green-text-gradient",
      },
      {
        name: "OCR",
        color: "pink-text-gradient",
      },
      {
        name: "vehicle-history",
        color: "blue-text-gradient",
      },
    ],
    image: dvh,
    source_code_link: "https://play.google.com/store/apps/details?id=com.vehiclehistory.dvh&hl=en&gl=US&pli=1",
  },
  {
    name: "Classic Decoder",
    description:
      " You can easily and quickly decode any classic car VIN number to get specifications or run a classic VIN check to generate the classic vehicle history report.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "ml",
        color: "green-text-gradient",
      },
      {
        name: "OCR",
        color: "pink-text-gradient",
      },
      {
        name: "vehicle-history",
        color: "blue-text-gradient",
      },
    ],
    image: classic,
    source_code_link: "https://play.google.com/store/apps/details?id=com.vehicledatabases.classic&hl=en&gl=US",
  },
  {
    name: "Smart Car Check",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
