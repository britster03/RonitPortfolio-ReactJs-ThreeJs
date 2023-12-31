import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    travlog,
    django,
    machine,
    html,
    hpy,
    css,
    reactjs,
    hiq,
    mongodb,
    git,
    figma,
    docker,
    fms,
    flutter,
    drf,
    threejs,
    Vanshika,
    Abhi
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
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Entrepreneur",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "FLutter Developer",
      company_name: "Journey in App Development",
      icon: flutter,
      iconBg: "#E6DEDD",
      date: "Sep 2020 - Present",
      points: [
        "Developing user-friendly mobile apps using Flutter and other related technologies.",
        "Collaborating with cross-functional teams including designers & other developers to create high-quality products.",
        "Creating industry-ready projects to get a better knowledge of the framework.",
        "Using my knowledge in various hackathons and related competitions."
      ],
    },
    {
      title: "ReactJS Developer",
      company_name: "Exploring React",
      icon: reactjs,
      iconBg: "#383E56",
      date: "Sep 2021 - Present",
      points: [
        "Developing and maintaining web applications using ReactJS.",
        "Creating web apps to solve real-life problems in collaboration with other developers.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Using backend technologies to make the web apps more robust.",
      ],
    },
    {
      title: "Backend & API Development",
      company_name: "Django REST API ",
      icon: django,
      iconBg: "#383E56",
      date: "May 2023 - Present",
      points: [
        "Designing the API endpoints that will expose the application's data and functionality to the clients.",
        "Implementing serializers to convert complex data types into JSON or other formats suitable for API responses.",
        "Implementing authentication mechanisms and setting up permissions to control access to API endpoints.",
        "Supporting file uploads through the API and managing file storage and retrieval.",
      ],
    },
    {
      title: "ML & DL",
      company_name: "Research in ML & DL",
      icon: machine,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Conducting a comprehensive review of existing research papers, articles, and publications to understand the current state of the art in ML and DL.",
        "Assisting in the design and implementation of new ML/DL algorithms or improving existing ones.",
        "Running experiments with ML/DL models to evaluate their performance on different datasets and use cases.",
        "Collaborating with other researchers and team members to brainstorm ideas, discuss findings, and contribute to ongoing research projects.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Ronit has done outstanding work as a team member. He possesses a strong work ethic, attention to detail, and ability to deliver high-quality results consistently, It was a pleasure to work with him.",
      name: "Vanshika Pandey",
      designation: "Software Developer",
      company: "JPMorgan Chase",
      image: Vanshika,
    },
    {
      testimonial:
        "Ronit is an amazing individual who consistently demonstrates unwavering dedication and passion in any work he undertakes.His work ethic and his approach towards any task has been with meticulous attention to detail and a very systematic mindset.",
      name: "Abhishek Saigiridhari",
      designation: "GET",
      company: "LTIMindtree",
      image: Abhi,
    },
  ];
  
  const projects = [
    {
      name: "Travlog",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "appdev",
          color: "pink-text-gradient",
        },
      ],
      image: travlog,
      source_code_link: "https://github.com/britster03",
    },
    {
      name: "FundMyStartup",
      description:
        "A startup funding website can be a great way to help connect entrepreneurs with investors and facilitate the funding process.",
      tags: [
        {
          name: "web",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: fms,
      source_code_link: "https://github.com/britster03",
    },
        {
      name: "HealthIQ",
      description:
        "A healthcare-related project for a medical app. It has a module for automatically arranging appointments based on the patient's chosen health status. With two apps, access to Doctor & Patient is simple.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "machinelearning",
          color: "pink-text-gradient",
        },
      ],
      image: hiq,
      source_code_link: "https://github.com/britster03",
    },
    {
      name: "HappyCart",
      description:
        " A Shopping Cart web app enabled with Firebase authetication & real-time payments using Stripe API.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "stripeapi",
          color: "pink-text-gradient",
        },
      ],
      image: hpy,
      source_code_link: "https://github.com/britster03",
    },
    {
      name: "DRF Blog Website",
      description:
        "A Django DRF App with ReactJS Front-End. Includes JWT Token Authentication, CRUD, Image Uploading/Handling & Social Logins with React and DRF.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "djangoRESTAPI",
          color: "green-text-gradient",
        },
        {
          name: "django",
          color: "pink-text-gradient",
        },
      ],
      image: drf,
      source_code_link: "https://github.com/britster03",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };