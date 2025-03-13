import { Project } from "@/lib/types/projects";
export const projects: Project[] = [
  {
    name: "Museo Papalote del Niño iOS App",
    description:
      "An iOS application for Museo Papalote del Niño to enhance visitor experience and compensate for limited tour guide availability. Features an intuitive UI/UX built with SwiftUI, modular code architecture, local storage with UserDefaults, and RESTful API integration.",
    img: "/images/papalote.png",
    skills: [
      { name: "Swift", url: "https://developer.apple.com/swift/" },
      { name: "SwiftUI", url: "https://developer.apple.com/xcode/swiftui/" },
      { name: "REST API", url: "https://restfulapi.net/" },
      {
        name: "UserDefaults",
        url: "https://developer.apple.com/documentation/foundation/userdefaults",
      },
    ],
    startDate: "September 2024",
    endDate: "December 2024",
    liveUrl: "",
    githubUrl: "https://github.com/GustavoCoutino/Optifoo",
  },
  {
    name: "Optifood",
    description:
      "A web application built with Next.js and Flask, leveraging the Gemini API and Spoonacular API to improve the experience of international students in food management and recipe preparation. Features dynamic and responsive UI components and efficient frontend-backend communication.",
    img: "/images/optifood.png",
    skills: [
      { name: "Next.js", url: "https://nextjs.org/" },
      { name: "Flask", url: "https://flask.palletsprojects.com/" },
      { name: "Gemini API", url: "https://ai.google.dev/gemini-api" },
      { name: "Spoonacular API", url: "https://spoonacular.com/food-api" },
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
    img: "",
    skills: [
      { name: "Flask", url: "https://flask.palletsprojects.com/" },
      { name: "Python", url: "https://www.python.org/" },
      { name: "Agentpy", url: "https://agentpy.readthedocs.io/" },
      { name: "Unity", url: "https://unity.com/" },
      { name: "Docker", url: "https://www.docker.com/" },
      {
        name: "A* Algorithm",
        url: "https://en.wikipedia.org/wiki/A*_search_algorithm",
      },
    ],
    startDate: "August 2024",
    endDate: "September 2024",
    liveUrl: "",
    githubUrl: "",
  },
  {
    name: "Sorteos Tec",
    description:
      "A comprehensive web application for Sorteos Tec to integrate monetization features into the raffle ticket purchase platform. Enhanced user engagement and increased average session duration through a dynamic and responsive UI optimized for both desktop and mobile users.",
    img: "",
    skills: [
      { name: "React", url: "https://reactjs.org/" },
      { name: "Node.js", url: "https://nodejs.org/" },
      { name: "Express", url: "https://expressjs.com/" },
      { name: "MySQL", url: "https://www.mysql.com/" },
      { name: "Aiven", url: "https://aiven.io/" },
      { name: "JWT", url: "https://jwt.io/" },
    ],
    startDate: "February 2024",
    endDate: "April 2024",
    liveUrl: "",
    githubUrl: "",
  },
  {
    name: "IoT Monitoring Dashboard",
    description:
      "A reactive dashboard for monitoring and visualizing IoT sensor data from various sources including temperature, pH levels, water levels, and device states. Built with React and Vite, featuring interactive charts for data visualization and real-time state monitoring of multiple connected devices.",
    img: "",
    skills: [
      { name: "React", url: "https://reactjs.org/" },
      { name: "Vite", url: "https://vitejs.dev/" },
      { name: "RESTful API", url: "https://restfulapi.net/" },
      { name: "Recharts", url: "https://recharts.org/" },
      {
        name: "React Icons",
        url: "https://react-icons.github.io/react-icons/",
      },
    ],
    startDate: "November 2023",
    endDate: "December 2023",
    liveUrl: "",
    githubUrl: "",
  },
];
