const navLinks = [
  {
    name: "Parish Activites",
    link: "#activitysection",
  },
  {
    name: "Outstations/Projects",
    link: "#experience",
  },
  {
    name: "Parish News",
    link: "#skills",
  },
  {
    name: "Mass Booking",
    link: "#testimonials",
  },
];
  
  const words = [
    { text: "Faith", imgPath: "/images/ideas.svg" },
    { text: "Service", imgPath: "/images/concepts.svg" },
    { text: "Worship", imgPath: "/images/designs.svg" },
    { text: "Grace", imgPath: "/images/code.svg" },
  ];
  
  const missions = [
    { value: 1, suffix: ".", label: "Worshiping God through reverent liturgy and sacraments" },
     { value: 2, suffix: ".", label: "Serving others with compassion, humility, and love" },
     { value: 3, suffix: ".", label: "Nurturing faith in children, youth, and adults" },
     { value: 4, suffix: ".", label: "Building unity among parishioners and extending welcome to all" },
     { value: 5, suffix: ".", label: "Engaging in outreach, social justice, and evangelization" },
  ];

  const activities = [
    {
      id: 1,
      image: '/images/holymass.png',
      title: 'Holy Mass',
      description: [
        'Join us daily for the celebration of the Holy Mass.',
        'See the Schedule below:',
        { label: 'Weekdays', time: '6:30AM, 12:30PM & 6:30PM' },
        { label: 'Saturdays & Public Holidays', time: '8:00AM' },
        { label: 'Sundays', time: '6:15AM, 8:00AM, 11:00AM and 6:00PM' },
      ]
    },
    {
      id: 2,
      image: '/images/confession.png',
      title: 'Confession',
      description: [
        { label: 'Saturdays', time: '9:00AM' },
        { label: 'Weekdays', time: '9:00AM & 2:00PM (in the Parish office)' }
      ]
    },
    {
      id: 3,
      image: '/images/catchumen.png',
      title: 'Catechumenate',
      description: [
        { label: 'Saturdays', time: '9:00AM' },
        { label: 'Weekdays', time: '9:00AM & 2:00PM (in the Parish office)' }
      ]
    },

    {
      id: 4,
      image: '/images/adoration.png',
      title: 'Adoration',
      description: [
        { label: 'Saturdays', time: '9:00AM' },
        { label: 'Weekdays', time: '9:00AM & 2:00PM (in the Parish office)' }
      ]
    },
    {
      id: 5,
      image: '/images/bible.png',
      title: 'Bible Study',
      description: [
        { label: 'Saturdays', time: '9:00AM' },
        { label: 'Weekdays', time: '9:00AM & 2:00PM (in the Parish office)' }
      ]
    }
    
  ];
  
  const expCards = [
    {
      review:
        "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
      imgPath: "/images/exp1.png",
      logoPath: "/images/logo1.png",
      title: "Frontend Developer",
      date: "January 2023 - Present",
      responsibilities: [
        "Developed and maintained user-facing features for the Hostinger website.",
        "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
        "Optimized web applications for maximum speed and scalability.",
      ],
    },
    {
      review:
        "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
      imgPath: "/images/exp2.png",
      logoPath: "/images/logo2.png",
      title: "Full Stack Developer",
      date: "June 2020 - December 2023",
      responsibilities: [
        "Led the development of Docker's web applications, focusing on scalability.",
        "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
        "Contributed to open-source projects that were used with the Docker ecosystem.",
      ],
    },
    {
      review:
        "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
      imgPath: "/images/exp3.png",
      logoPath: "/images/logo3.png",
      title: "React Native Developer",
      date: "March 2019 - May 2020",
      responsibilities: [
        "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
        "Improved app performance and user experience through code optimization and testing.",
        "Coordinated with the product team to implement features based on feedback.",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      url: "https://www.instagram.com/",
      imgPath: "/images/insta.png",
    },
    {
      name: "fb",
      url: "https://www.facebook.com/",
      imgPath: "/images/fb.png",
    },
    {
      name: "x",
      url: "https://www.x.com/",
      imgPath: "/images/x.png",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/",
      imgPath: "/images/linkedin.png",
    },
  ];
  
  export {
    words,
    missions,
    expCards,
    expLogos,
    socialImgs,
    navLinks,
    activities,
  };