import { Project } from "@/lib/types/project";
export const projects: Project[] = [
  {
    name: "Museo Papalote del Niño iOS App",
    description:
      "An iOS application for Museo Papalote del Niño to enhance visitor experience and compensate for limited tour guide availability. Features an intuitive UI/UX built with SwiftUI, modular code architecture, local storage with UserDefaults, and RESTful API integration.",
    img: "/images/papalote.png",
    skills: [
      { name: "Swift", url: "/images/swift.svg" },
      { name: "Typescript", url: "/images/typescript.svg" },
      { name: "Python", url: "/images/python.svg" },
      { name: "Django", url: "/images/django.svg" },
      { name: "Firebase", url: "/images/firebase.svg" },
      { name: "PostgreSQL", url: "/images/postgresql.svg" },
      { name: "Tailwind", url: "/images/tailwindcss.svg" },
    ],
    startDate: "September 2024",
    endDate: "December 2024",
    liveUrl: "",
    githubUrl: "https://github.com/GustavoCoutino/AppAlote",
  },
  {
    name: "Optifood",
    description:
      "A web application built with Next.js and Flask, leveraging the Gemini API and Spoonacular API to improve the experience of international students in food management and recipe preparation. Features dynamic and responsive UI components and efficient frontend-backend communication.",
    img: "/images/optifood.png",
    skills: [
      { name: "Javascript", url: "/images/javascript.svg" },
      { name: "Next.js", url: "/images/nextdotjs.svg" },
      { name: "Python", url: "/images/python.svg" },
      { name: "Flask", url: "/images/flask.svg" },
      { name: "Firebase", url: "/images/firebase.svg" },
    ],
    startDate: "November 2024",
    endDate: "November 2024",
    liveUrl: "",
    githubUrl: "https://github.com/GustavoCoutino/Optifoo",
  },
  {
    name: "Harvest Simulation",
    description:
      "A Flask API that simulates the movement of harvesters and a collector in a grid environment, utilizing A* pathfinding and agent-based modeling with Python and Agentpy. Generates a 3D simulation in Unity based on the response from the server.",
    img: "/images/harvest.png",
    skills: [
      { name: "Flask", url: "/images/flask.svg" },
      { name: "Python", url: "/images/python.svg" },
      { name: "Unity", url: "/images/unity.svg" },
    ],
    startDate: "August 2024",
    endDate: "September 2024",
    liveUrl: "",
    githubUrl: "https://github.com/GustavoCoutino/SimulacionAPI",
  },
  {
    name: "Sorteos Tec",
    description:
      "A comprehensive web application for Sorteos Tec to integrate monetization features into the raffle ticket purchase platform. Enhanced user engagement and increased average session duration through a dynamic and responsive UI optimized for both desktop and mobile users.",
    img: "/images/sorteostec.png",
    skills: [
      { name: "Javascript", url: "/images/javascript.svg" },
      { name: "React", url: "/images/react.svg" },
      { name: "Node.js", url: "/images/flask.svg" },
      { name: "Express", url: "/images/express.svg" },
      { name: "MySQL", url: "/images/mysql.svg" },
    ],
    startDate: "February 2024",
    endDate: "April 2024",
    liveUrl: "",
    githubUrl: "https://github.com/GustavoCoutino/SorteosTecPaginaWeb",
  },
  {
    name: "IoT Monitoring Dashboard",
    description:
      "A reactive dashboard for monitoring and visualizing IoT sensor data from various sources including temperature, pH levels, water levels, and device states. Built with React and Vite, featuring interactive charts for data visualization and real-time state monitoring of multiple connected devices.",
    img: "/images/aquanet.png",
    skills: [
      { name: "React", url: "/images/react.svg" },
      { name: "Vite", url: "/images/vite.svg" },
    ],
    startDate: "November 2023",
    endDate: "December 2023",
    liveUrl: "",
    githubUrl: "https://github.com/GustavoCoutino/aquanet-frontend",
  },
];
