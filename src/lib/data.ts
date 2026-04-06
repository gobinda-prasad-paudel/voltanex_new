
// Expand project data to include more details for project pages
// export const projects = [
//   {
//     id: "glof-aid",
//     title: "GLOF AID",
//     description:
//       "Global Learning & Optimization Device - An AI-powered system that optimizes energy consumption in industrial settings.",
//     image: "/images/projects/glof-aid/profile.jpg",
//     technologies: ["ESP32", "MQTT", "TensorFlow Lite", "PCB Design"],
//     status: "Planning Phase", 
//     fullDescription: `
//       Our Smart Sensor Network project aims to create a scalable, energy-efficient system for environmental monitoring in various settings, from urban areas to remote wilderness.
      
//       The network consists of distributed sensor nodes that collect data on air quality, temperature, humidity, sound levels, and more. Each node is powered by an ESP32 microcontroller and features custom-designed PCBs optimized for low power consumption.
      
//       Data is transmitted using the MQTT protocol to a central gateway, where it's processed using TensorFlow Lite models to identify patterns and anomalies. The processed data is then made available through a web dashboard and API.
      
//       Key innovations in this project include:
//       - Ultra-low power design allowing nodes to operate for months on a single battery charge
//       - Edge computing capabilities for preliminary data analysis
//       - Mesh networking for improved coverage in challenging environments
//       - Machine learning models that adapt to changing conditions
//     `,
//     challenges: [
//       "Optimizing power consumption for long-term deployment",
//       "Ensuring reliable wireless communication in varied environments",
//       "Developing efficient machine learning models that can run on resource-constrained devices",
//       "Creating a scalable architecture that can support hundreds of nodes",
//     ],
//     results: [
//       "Successfully deployed a 50-node network in an urban setting",
//       "Achieved 3-month battery life on standard 18650 lithium cells",
//       "Developed custom ML models with 92% accuracy for anomaly detection",
//       "Created an open API that's now used by three partner organizations",
//     ],
//     teamLead: "Gobinda",
//   },
//   // {
//   //   id: "autonomous-robot",
//   //   title: "Autonomous Navigation Robot",
//   //   description:
//   //     "A self-navigating robot platform that uses computer vision and machine learning to map and navigate complex environments.",
//   //   image: "/images/projects/autonomous-robot.jpg",
//   //   technologies: ["Raspberry Pi", "OpenCV", "ROS", "3D Printing"],
//   //   status: "Completed",
//   //   fullDescription: `
//   //     The Autonomous Navigation Robot project focused on developing a versatile robotic platform capable of navigating unknown environments without human intervention.
      
//   //     Built around a Raspberry Pi 4 computing core, the robot uses a combination of sensors including LIDAR, stereo cameras, and ultrasonic distance sensors to perceive its surroundings. The chassis and mechanical components were designed in-house and manufactured using 3D printing and laser cutting techniques.
      
//   //     For software, we implemented a custom navigation stack based on ROS (Robot Operating System) with significant modifications to optimize for our hardware configuration. Computer vision processing is handled through OpenCV, with a custom-trained neural network for object recognition and classification.
      
//   //     The robot demonstrates remarkable capabilities in mapping unknown spaces, avoiding obstacles, and planning efficient paths to designated goals. It can operate in both indoor and outdoor environments and adapts to changing conditions in real-time.
//   //   `,
//   //   challenges: [
//   //     "Balancing computational requirements with power constraints",
//   //     "Developing robust algorithms for varied lighting conditions",
//   //     "Creating a mechanical design that's both durable and lightweight",
//   //     "Integrating multiple sensor types for redundancy and improved accuracy",
//   //   ],
//   //   results: [
//   //     "Robot successfully navigated a complex maze with 100% accuracy",
//   //     "Achieved 4-hour operational time on a single battery charge",
//   //     "Developed a reusable software framework for future robotics projects",
//   //     "Published research paper on our novel sensor fusion approach",
//   //   ],
//   //   teamLead: "Priya Sharma",
//   // },
//   // {
//   //   id: "energy-harvesting",
//   //   title: "Energy Harvesting Wearables",
//   //   description:
//   //     "Wearable devices that harvest energy from body heat and movement to power small electronics and sensors.",
//   //   image: "/images/projects/energy-harvesting.jpg",
//   //   technologies: ["Flexible PCB", "Energy Harvesting ICs", "Low-Power MCUs"],
//   //   status: "Research Phase",
//   //   fullDescription: `
//   //     The Energy Harvesting Wearables project explores innovative ways to power electronic devices using energy harvested from the human body and environment. This research aims to eliminate or reduce the need for traditional batteries in wearable technology.
      
//   //     Our approach combines multiple energy harvesting techniques, including:
//   //     - Thermoelectric generators that convert body heat to electricity
//   //     - Piezoelectric elements that generate power from movement and pressure
//   //     - Photovoltaic cells optimized for indoor and low-light conditions
      
//   //     These energy sources are integrated into flexible, comfortable wearable designs using custom-developed flexible PCBs. The harvested energy is managed by specialized ICs that efficiently store and regulate the power for use by ultra-low-power microcontrollers and sensors.
      
//   //     Current prototypes can generate enough power to operate simple sensors and transmit data wirelessly at regular intervals, all without requiring an external power source or traditional battery.
//   //   `,
//   //   challenges: [
//   //     "Maximizing energy harvesting efficiency from limited sources",
//   //     "Developing flexible, comfortable designs that can be worn for extended periods",
//   //     "Creating ultra-low-power circuits that can operate on harvested energy",
//   //     "Balancing energy storage and consumption for reliable operation",
//   //   ],
//   //   results: [
//   //     "Prototype wristband generates 3-5 mW during normal daily activities",
//   //     "Successfully powered a BLE sensor transmitting every 5 minutes",
//   //     "Developed novel flexible PCB manufacturing techniques",
//   //     "Filed two provisional patents for our energy management circuit designs",
//   //   ],
//   //   teamLead: "Maya Patel",
//   // },
// ]

export const projects = [
  {
  id: "smart-ups",
  title: "Smart Router UPS for Router",
  description:
    "A smart UPS for Wi-Fi routers that powers the device during outages, monitors battery levels, displays remaining battery percentage, and automatically charges when power is restored.",
  image: "https://i.ytimg.com/vi/wym3WMT9GPw/maxresdefault.jpg",
  technologies: ["Battery Management System", "Microcontroller", "Power Electronics", "IoT Monitoring"],
  status: "Ongoing",
  fullDescription: `
    The Smart Router UPS project provides uninterrupted power to Wi-Fi routers during electricity outages. The device monitors battery levels, displays remaining percentage, and automatically recharges when the main power supply resumes.

    It is designed for households and small offices where maintaining connectivity is critical. The UPS integrates intelligent power management to maximize battery life and ensure continuous operation.

    Key innovations:
    - Automatic charging and power switch-over
    - Real-time battery level monitoring
    - Compact, easy-to-install design
    - IoT integration for remote monitoring
  `,
  challenges: [
    "Ensuring seamless power switching without disrupting the router",
    "Optimizing battery lifespan under repeated charging cycles",
    "Designing compact hardware for home installations",
    "Providing accurate real-time battery monitoring",
  ],
  results: [
    "Maintains Wi-Fi connectivity during power outages",
    "Battery level visible on a simple interface",
    "Automatic recharge functionality implemented successfully",
  ],
  teamLead: "Gobinda",
},
  {
    id: "glof-aid",
    title: "GLOF AID",
    description:
      "Global Learning & Optimization Device - An AI-powered system that optimizes energy consumption in industrial settings.",
    image: "/images/projects/glof-aid/profile.jpg",
    technologies: ["ESP32", "MQTT", "TensorFlow Lite", "PCB Design"],
    status: "Planning Phase", 
    fullDescription: `
      Our Smart Sensor Network project aims to create a scalable, energy-efficient system for environmental monitoring in various settings, from urban areas to remote wilderness.

      The network consists of distributed sensor nodes that collect data on air quality, temperature, humidity, sound levels, and more. Each node is powered by an ESP32 microcontroller and features custom-designed PCBs optimized for low power consumption.

      Data is transmitted using the MQTT protocol to a central gateway, where it's processed using TensorFlow Lite models to identify patterns and anomalies. The processed data is then made available through a web dashboard and API.

      Key innovations in this project include:
      - Ultra-low power design allowing nodes to operate for months on a single battery charge
      - Edge computing capabilities for preliminary data analysis
      - Mesh networking for improved coverage in challenging environments
      - Machine learning models that adapt to changing conditions
    `,
    challenges: [
      "Optimizing power consumption for long-term deployment",
      "Ensuring reliable wireless communication in varied environments",
      "Developing efficient machine learning models that can run on resource-constrained devices",
      "Creating a scalable architecture that can support hundreds of nodes",
    ],
    results: [
      "Successfully deployed a 50-node network in an urban setting",
      "Achieved 3-month battery life on standard 18650 lithium cells",
      "Developed custom ML models with 92% accuracy for anomaly detection",
      "Created an open API that's now used by three partner organizations",
    ],
    teamLead: "Gobinda",
  },
  {
    id: "off-grid",
    title: "Off-Grid Communication Device",
    description:
      "A wireless communication module that connects to smartphones without SIM, internet, or Bluetooth, designed for remote areas.",
    image: "https://example.com/offgrid-communication.jpg",
    technologies: ["LoRa", "Microcontroller", "Custom PCB", "Low-Power Design"],
    status: "Testing",
    fullDescription: `
      This project aims to create a wireless communication device that works completely off-grid. It allows smartphones and other devices to communicate without relying on cellular networks, Wi-Fi, or Bluetooth, making it ideal for remote areas or emergency situations.

      The device uses LoRa-based protocols for long-range, low-power communication. Its firmware ensures data integrity and supports simple messaging and location services.

      Key innovations:
      - No dependency on internet or SIM cards
      - Ultra-low power for long battery life
      - Lightweight and portable design
    `,
    challenges: [
      "Ensuring reliable signal transmission over long distances",
      "Minimizing power consumption for extended battery life",
      "Making the device easy to use without technical knowledge",
      "Integrating secure communication protocols",
    ],
    results: [
      "Successfully transmitted messages up to 10 km in field tests",
      "Achieved 2-week battery life on standard AA batteries",
      "Developed simple mobile app for sending/receiving messages",
    ],
    teamLead: "Gobinda",
  },
  {
    id: "public-transport",
    title: "Public Transportation Management System",
    description:
      "A system to improve public transportation efficiency and user experience in Nepal, built as part of a hackathon project.",
    image: "https://example.com/public-transport.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "GPS Tracking"],
    status: "Testing",
    fullDescription: `
      This project focuses on building a public transportation management system to enhance commuter experience and operational efficiency. It tracks vehicles in real-time, predicts arrival times, and helps authorities optimize routes.

      Users can view live bus locations, expected arrival times, and receive alerts for delays. The system is built with scalability and ease-of-use in mind.

      Key innovations:
      - Real-time vehicle tracking with GPS
      - Optimized routing for buses
      - User-friendly web and mobile interface
    `,
    challenges: [
      "Integrating real-time GPS data reliably",
      "Handling large data volumes from multiple vehicles",
      "Providing accurate arrival predictions",
      "Ensuring system works in low-connectivity areas",
    ],
    results: [
      "Developed a working prototype within hackathon timeframe",
      "Successfully tracked multiple vehicles in Kathmandu city",
      "Users could plan routes more efficiently and reduce waiting time",
    ],
    teamLead: "Gobinda",
  },
];

export const teamPositions = [
  {
    title: "Embedded Systems Engineer",
    description:
      "Design and develop firmware for microcontroller-based systems. Experience with ARM Cortex-M, RTOS, and low-power design required.",
    type: "Full-time",
    location: "Remote / Hybrid",
  },
  {
    title: "PCB Design Specialist",
    description:
      "Create schematics and PCB layouts for electronic devices. Proficiency in Altium Designer or KiCad and experience with high-speed design preferred.",
    type: "Contract",
    location: "Remote",
  },
  {
    title: "AI Research Intern",
    description:
      "Assist in developing machine learning models for embedded applications. Knowledge of TensorFlow Lite, PyTorch, or similar frameworks required.",
    type: "Internship",
    location: "Remote",
  },
]
