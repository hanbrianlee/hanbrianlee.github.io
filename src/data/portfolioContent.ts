import { ProjectItem, ExperienceItem, EducationItem, PublicationItem, SkillCategory } from '../types';

export const personalInfo = {
  name: "Brian (HAN UL) Lee",
  headline: "Senior Deep Learning / Automated Driving Software Engineer",
  subHeadline: "Perception at Waymo • ex-GM • ex-LG",
  tagline: "Advancing deep learning, online scene mapping, foundation models, and multi-modal perception for automated driving.",
  quote: "“When you want something, all the universe conspires in helping you to achieve it.” — The Alchemist",
  location: "Mountain View, California, United States",
  phone: "+1 (586) 342-8596",
  email: "hanbrianlee@gmail.com",
  github: "https://github.com/hanbrianlee",
  linkedin: "https://www.linkedin.com/in/brianhanullee/",
  legacySiteUrl: "https://hanbrianlee.github.io",
  avatarUrl: "https://hanbrianlee.github.io/img/profilepicsmall.jpeg",
  heroBackground: "https://hanbrianlee.github.io/img/irobotimage.jpg",
  longTermGoal: "Technical Specialist → Owner / CEO / President",
  bioParagraphs: [
    "Hi! I'm Brian Lee. I'm a Senior Deep Learning & Automated Driving Software Engineer based in Mountain View, California, working on Perception at Waymo, with prior tenure leading perception and neural mapping at General Motors (Warren, MI) and LG Engineering.",
    "My expertise spans deep learning architectures (CNNs, Transformers, foundational models), online scene mapping, end-to-end mapless driving, abstract localization, multi-modal sensor fusion (cameras, LiDARs, radars), and embedded vehicle controls."
  ]
};

export const experiences: ExperienceItem[] = [
  {
    id: "waymo",
    role: "Senior Software Engineer, CV / Deep Learning",
    company: "Waymo",
    team: "Perception & Machine Learning",
    period: "Nov 2024 - Present",
    location: "Mountain View, California, United States",
    focus: "Autonomous Driving Perception, Computer Vision & Deep Learning",
    bulletPoints: [
      "Architecting and scaling advanced deep learning and computer vision perception models for Waymo's fully autonomous driving fleet.",
      "Developing high-accuracy detection, multi-modal sensor fusion, and 3D scene understanding pipelines.",
      "Optimizing deep neural networks for safety-critical real-time edge execution on vehicle compute platforms.",
      "Collaborating on cutting-edge foundation models and continuous data-driven evaluation benchmarks."
    ],
    technologies: ["PyTorch", "TensorFlow", "CUDA", "3D Computer Vision", "Point Cloud Perception", "Multi-Modal Fusion", "C++", "Python", "Foundation Models"]
  },
  {
    id: "gm",
    role: "Senior AI/ML Engineer",
    company: "General Motors",
    team: "Perception / Sensing, Mapping & Localization",
    period: "Mar 2017 - Nov 2024 (7 yrs 9 mos)",
    location: "Warren, Michigan, U.S.A.",
    focus: "Perception, Deep Learning Online Scene Mapping, Localization & Neural Networks",
    bulletPoints: [
      "Engineered innovative deep learning solutions utilizing CNNs, Transformers, foundational models, autoencoders, custom loss functions, and custom layers for proof of concept and production environments.",
      "Solved deep learning-based online scene mapping and end-to-end mapless driving, fusing multimodal sensor information (cameras, LiDARs, lower-quality maps, and foundation models).",
      "Led abstract localization development using deep neural networks and estimated map bias using Gaussian Processes.",
      "Implemented Bayesian filters (Particle Filters, Kalman Filters) and real-time data association algorithms (Hungarian Method, ICP).",
      "Researched AI/ML pipelines for perception and automated annotation using TensorFlow and PyTorch.",
      "Integrated LiDAR, radar, camera, and multi-sensor intrinsic/extrinsic alignments. Supported adversarial AI robustness work; authored paper publications and granted patents."
    ],
    technologies: ["PyTorch", "TensorFlow", "Transformers", "CNNs", "Gaussian Processes", "Particle Filters", "Kalman Filters", "ICP", "Hungarian Algorithm", "LiDAR / Radar / Camera Fusion", "C++", "Python"]
  },
  {
    id: "lg-engineering",
    role: "Technical Project Manager",
    company: "LG Engineering (GS E&C)",
    team: "Engineering Management",
    period: "Jan 2012 - Jan 2017 (5 yrs 1 mo)",
    location: "Seoul, Korea",
    focus: "Large-scale Technical Project Delivery & Standards Compliance",
    bulletPoints: [
      "Led 12+ large and small technical engineering projects to successful completion from initial design stages.",
      "Realized significant cost savings while strictly complying with rigorous international industrial standards.",
      "Negotiated complex technical contracts and milestones with international clients and tier-1 vendors."
    ],
    technologies: ["Project Management", "Industrial Standards", "Engineering Design", "Client & Vendor Negotiation"]
  },
  {
    id: "spec-robotics",
    role: "Founder, President",
    company: "SPEC - Robotics",
    team: "Robotics Research & Student Engineering",
    period: "Sep 2010 - Dec 2011 (1 yr 4 mos)",
    location: "Vancouver, Canada",
    focus: "Autonomous Robotics, Embedded Hardware & Organization Leadership",
    bulletPoints: [
      "Co-founded and presided over SPEC Robotics organization at Simon Fraser University; managed and mentored 10+ engineers across 4 robotics projects.",
      "Successfully pitched and acquired research grants and private investments from ESSS, Dean of Engineering, and private investors.",
      "Conducted member training in soldering, PWM control theory, and electrical system design; formulated functional specifications and Gantt progress charts.",
      "UHDMS Project: Reverse-engineered RC vehicles and retrofitted them with TI MSP430 and custom PCBs with H-bridge PWM, enabling 4D speed control, servo steering, proximity obstacle detection, and SimpliciTI wireless connectivity to emulate future V2V/V2I autonomous driving.",
      "Engineered MROMS search/rescue robots, Solar PWM full-bridge inverter circuits (12V cells, 100W 1:10 transformer), and Titanoboa pneumatic slither electronics (Altium Designer schematics/PCBs, MOSFET PWM, SN65HVD233 CAN transceivers)."
    ],
    technologies: ["TI MSP430", "Altium Designer", "PCB Layout", "PWM H-Bridge", "CANBus", "SimpliciTI", "Embedded C", "Robotics"]
  },
  {
    id: "rev",
    role: "Software Engineer",
    company: "Rapid Electric Vehicles (REV)",
    team: "EV Systems & Firmware",
    period: "Jan 2010 - Dec 2011 (2 yrs)",
    location: "Vancouver, Canada",
    focus: "V2G-enabled 100% Battery Electric Vehicles & Vehicle Control ECU",
    bulletPoints: [
      "Engineered core software controlling vehicle powertrain, sensor processing, V2I communication, motor controls, and HMI displays.",
      "Designed the vehicle control system on ECU from scratch using rugged automotive rapid prototyping platform (MotoTron) and model-based design (MotoHawk in MATLAB / Simulink / Stateflow).",
      "Calibrated PID control parameters using MotoTune; developed custom embedded C firmware on Freescale MC9S08DV60 microcontrollers (CodeWarrior) interfacing with VFD displays and serial I/O via I2C/SPI.",
      "Integrated and wired LiFePO4 battery management (Valence), Coulomb J1772 chargers, Delphi 2.2kW DC/DC converters, EDN 6.6kW chargers, and 100kW UQM motor controllers with CANBus and Modbus RS485.",
      "Conducted FMEA reliability assessments, oscilloscope pre-charge verification, SIL, HIL, and vehicle road tests."
    ],
    technologies: ["MATLAB / Simulink / Stateflow", "MotoHawk", "MotoTune", "Embedded C", "Freescale MC9S08", "CANBus", "Modbus RS485", "HIL / SIL Testing", "EV Powertrains"]
  },
  {
    id: "kaist",
    role: "Embedded SW / Electronics Researcher",
    company: "KAIST (Korea Advanced Institute of Science and Technology)",
    team: "Cyber-Physical Systems Laboratory",
    period: "Jan 2009 - Aug 2009 (8 mos)",
    location: "Daejeon, Korea",
    focus: "Energy-Efficient Multi-Robot Orchestration",
    bulletPoints: [
      "Conducted research on energy-efficient orchestration of multi-robot systems under the guidance of Prof. Insik Shin.",
      "Designed custom power measurement PCBs to analyze PWM DC motor optimal speed profiles and power consumption on X-Bot robotics platforms."
    ],
    technologies: ["Robotics", "PCB Design", "Power Measurement", "Embedded C", "Motor Optimization"]
  },
  {
    id: "triumf",
    role: "Embedded Software Developer / Electronics Engineer",
    company: "TRIUMF",
    team: "Sub-Atomic Particle Physics Research",
    period: "May 2007 - Aug 2007 (4 mos)",
    location: "Vancouver, Canada",
    focus: "Sub-Atomic Particle Physics Instrumentation & Remote Slow-Control",
    bulletPoints: [
      "Assembled PCBs and developed embedded C firmware on Silicon Labs C8051F310 microcontrollers with ADC, DAC, and temperature sensor drivers for particle physics experiments (T2K, TITAN).",
      "Built a web-enabled remote slow-control interface using C++ and web technologies over MSCB and MIDAS platforms, allowing international physicists to adjust voltage and monitor real-time measurements remotely."
    ],
    technologies: ["Silicon Labs C8051F310", "Embedded C", "C++", "MSCB / MIDAS", "ADC / DAC Drivers", "Linux"]
  },
  {
    id: "verecom",
    role: "Webserver Programmer & Technical Marketing",
    company: "Verecom Corporation",
    team: "Software & Client Solutions",
    period: "May 2006 - Aug 2006 (4 mos)",
    location: "Vancouver, Canada",
    focus: "Full-Stack Web Development & Technical Sales",
    bulletPoints: [
      "Developed web agency platforms using PHP, MySQL, JavaScript, HTML, CSS, and XML in collaboration with UI/UX designers.",
      "Delivered technical presentations, client quotes, and system clarifications to secure and support business contracts."
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Client Solutions"]
  },
  {
    id: "argyle",
    role: "Embedded Software / Electronics Engineer",
    company: "Argyle Secondary School",
    team: "Electronics Laboratory",
    period: "Sep 2003 - Apr 2004 (8 mos)",
    location: "North Vancouver, BC, Canada",
    focus: "Custom Sound Announcement Hardware & Assembly Firmware",
    bulletPoints: [
      "Created a periodic sound announcement system used during Parent Advisory Council meetings.",
      "Manually etched custom PCBs, soldered PIC microcontrollers and speakers, and programmed embedded logic in Assembly."
    ],
    technologies: ["PIC Microcontroller", "Assembly Language", "PCB Etching & Soldering"]
  },
  {
    id: "bc-hydro",
    role: "BC Hydro Power Smart Student Researcher",
    company: "BC Hydro",
    team: "Energy Conservation Analysis",
    period: "Apr 2003 - Aug 2003 (5 mos)",
    location: "North Vancouver, BC, Canada",
    focus: "Commercial Facility Energy Audit & Efficiency Proposals",
    bulletPoints: [
      "Conducted power conservation analyses across large facilities, modeling savings from high-efficiency lighting upgrades.",
      "Delivered executive presentations to PAC to approve efficiency retrofits based on cost-benefit feasibility studies."
    ],
    technologies: ["Energy Conservation", "Power Auditing", "Feasibility Analysis"]
  }
];

export const education: EducationItem[] = [
  {
    id: "gatech",
    institution: "Georgia Institute of Technology",
    degree: "Master of Science (M.S.)",
    field: "Computer Science",
    period: "2018 - 2020",
    details: "Advanced Deep Learning, Machine Learning, Computer Vision & Autonomous Systems"
  },
  {
    id: "sfu",
    institution: "Simon Fraser University",
    degree: "Bachelor of Applied Science (B.A.Sc.)",
    field: "Electrical & Electronics Engineering",
    period: "2004 - 2010",
    details: "President & Founder of SPEC Robotics • Embedded Systems, Control Theory & Signal Processing"
  },
  {
    id: "kaist-edu",
    institution: "Korea Advanced Institute of Science and Technology (KAIST)",
    degree: "Bachelor of Applied Science (Exchange / Research)",
    field: "Electronics Engineering",
    period: "2009 - 2009",
    details: "Cyber-Physical Systems Laboratory • Multi-Robot Energy Optimization"
  },
  {
    id: "udacity-sdc",
    institution: "Udacity",
    degree: "Self-Driving Car Nanodegree",
    field: "Autonomous Vehicles & Deep Learning",
    period: "2017 - 2018",
    details: "Sensor Fusion, Localization, Path Planning, Control & Deep Learning Perception"
  },
  {
    id: "stanford-ml",
    institution: "Stanford University (Coursera)",
    degree: "Machine Learning Certification",
    field: "Supervised & Unsupervised Learning",
    period: "2017",
    details: "Machine Learning algorithms, neural networks, SVMs, and mathematical optimization"
  }
];

export const publicationsAndPatents: PublicationItem[] = [
  {
    id: "patent-pose",
    title: "Method and System for Learning a Neural Network to Determine a Pose of a Vehicle in an Environment",
    type: "patent",
    description: "Granted Patent covering deep neural network architectures for high-precision autonomous vehicle pose estimation and spatial localization."
  },
  {
    id: "pub-feature-vectors",
    title: "Systematic Approach to Optimize Feature Vectors for Increased Robustness of Deep Neural Networks",
    type: "paper",
    description: "Published technical research on optimizing latent feature representations to enhance deep neural network robustness against adversarial perturbations and environmental noise."
  }
];

export const honorsAndCertifications = {
  certifications: [
    "E.I.T. (Engineer in Training)",
    "Six Sigma Black Belt (CSSBB)",
    "Deep Learning & Sequence Modeling - Recurrent Neural Networks",
    "Machine Learning Specialization"
  ],
  awards: [
    "International Mobility Award",
    "Entrance Summit Scholarship",
    "BC Provincials Scholarship",
    "BC Hydro Power Smart Student Award",
    "Distinguished Honor Rolls"
  ],
  languages: [
    { language: "English", proficiency: "Native / Bilingual" },
    { language: "Korean", proficiency: "Native / Bilingual" },
    { language: "Japanese", proficiency: "Limited Working" }
  ]
};

export const projects: ProjectItem[] = [
  {
    id: "alphapilot-racing",
    title: "AlphaPilot: High-Speed Autonomous Drone Racing",
    subtitle: "Lockheed Martin & DRL Autonomous Challenge",
    category: "Autonomous Systems & Robotics",
    featured: true,
    description: "Real-time perception, state estimation, and trajectory control for fully autonomous high-speed drone racing through complex 3D gates.",
    longDescription: "Engineered a closed-loop perception and control system for high-speed autonomous quadrotors. Developed low-latency convolutional networks for gate detection under severe motion blur and lighting variations, integrated with visual-inertial odometry and optimal path-planning pipelines.",
    highlights: [
      "Sub-15ms visual gate localization and 6-DoF pose estimation pipeline.",
      "Robust state estimation utilizing onboard IMU and stereo camera fusion without GPS.",
      "Tested and validated across rigorous multi-stage technical benchmarks (Stages 1, 2, and 3)."
    ],
    tags: ["Autonomous Drones", "Visual Odometry", "Real-Time AI", "Edge Computing", "C++"],
    pdfUrl: "https://hanbrianlee.github.io/portfolio_files/alphapilottechreports2and3.pdf",
    pdfFilename: "alphapilottechreports2and3.pdf"
  },
  {
    id: "ultradepth-estimation",
    title: "UltraDepth: Monocular Depth Estimation",
    subtitle: "Self-Supervised & Supervised Deep Neural Networks for 3D Geometry",
    category: "Computer Vision & 3D Geometry",
    featured: true,
    description: "Deep neural network architectures for predicting dense metric depth maps from single 2D camera images.",
    longDescription: "Investigated modern encoder-decoder networks with multi-scale feature aggregation and attention mechanisms to reconstruct dense metric depth maps from monocular camera inputs, overcoming scale ambiguity and occlusion boundaries.",
    highlights: [
      "Implemented continuous depth regression with edge-preserving gradient loss.",
      "Evaluated on autonomous driving datasets (KITTI, Cityscapes) demonstrating sharp depth boundaries around dynamic objects.",
      "Optimized for real-time inference latency suitable for vehicle perception."
    ],
    tags: ["Monocular Depth", "PyTorch", "Autonomous Driving", "3D Vision"],
    pdfUrl: "https://hanbrianlee.github.io/portfolio_files/ultradepth.pdf",
    pdfFilename: "ultradepth.pdf"
  },
  {
    id: "svhn-house-numbers",
    title: "Deep Sequence Recognition on SVHN",
    subtitle: "Multi-Digit Classification with Deep Convolutional Networks",
    category: "Deep Learning & Neural Networks",
    featured: false,
    description: "End-to-end deep convolutional neural network for localized multi-digit house number sequence recognition on real-world street imagery.",
    longDescription: "Formulated multi-digit house number transcription directly from raw bounding boxes without explicit character segmentation. Designed deep CNN architectures trained with joint length prediction and per-digit cross-entropy losses.",
    highlights: [
      "Achieved high sequence-level accuracy on challenging Street View House Numbers (SVHN).",
      "Compared batch normalization, data augmentation, and spatial pyramid pooling strategies."
    ],
    tags: ["CNNs", "Sequence Recognition", "PyTorch / TensorFlow", "Image Classification"],
    pdfUrl: "https://hanbrianlee.github.io/portfolio_files/housenumber.pdf",
    pdfFilename: "housenumber.pdf"
  },
  {
    id: "reinforcement-learning-control",
    title: "Reinforcement Learning & Policy Optimization",
    subtitle: "Exploration & Control Strategies in Complex Simulated Environments",
    category: "Reinforcement Learning",
    featured: false,
    description: "Empirical study and implementation of policy gradient methods, deep Q-networks (DQN), and actor-critic algorithms for continuous control.",
    longDescription: "Implemented and benchmarked fundamental RL algorithms including Deep Q-Networks (DQN), Double DQN, Policy Gradients (REINFORCE), and Advantage Actor-Critic (A2C) on continuous and discrete benchmark environments.",
    highlights: [
      "Exploration bonus design and reward shaping for sparse feedback scenarios.",
      "Stability analysis of value function approximation and target network polyak averaging."
    ],
    tags: ["Reinforcement Learning", "Policy Gradients", "Actor-Critic", "Control Theory"],
    pdfUrl: "https://hanbrianlee.github.io/portfolio_files/reinforcementlearning.pdf",
    pdfFilename: "reinforcementlearning.pdf"
  },
  {
    id: "camera-calibration-stereo",
    title: "Camera Calibration & 3D Epipolar Geometry",
    subtitle: "Stereo Vision Reconstruction & Camera Intrinsic/Extrinsic Estimation",
    category: "3D Vision & Geometry",
    featured: false,
    description: "Complete mathematical and algorithmic implementation of camera calibration, epipolar geometry, fundamental/essential matrices, and dense stereo disparity.",
    longDescription: "Detailed study and implementation of pinhole camera models, radial/tangential distortion correction, 8-point algorithm for essential matrix computation, and dense stereo correspondence matching.",
    highlights: [
      "Automated checkerboard corner detection and optimization for sub-pixel reprojection error.",
      "3D point cloud triangulation and disparity-to-depth rectification."
    ],
    tags: ["Camera Calibration", "Epipolar Geometry", "Stereo Vision", "3D Reconstruction"],
    pdfUrl: "https://hanbrianlee.github.io/portfolio_files/camera.pdf",
    pdfFilename: "camera.pdf"
  },
  {
    id: "seam-carving-retargeting",
    title: "Content-Aware Seam Carving",
    subtitle: "Dynamic Programming for Energy-Preserving Image Resizing",
    category: "Computational Photography",
    featured: false,
    description: "Intelligent image retargeting algorithm that removes optimal vertical and horizontal seams based on gradient energy functions without distorting key subjects.",
    longDescription: "Implemented content-aware image resizing using forward and backward energy functions computed via image gradients. Dynamically solved for minimal energy seams using 2D dynamic programming.",
    highlights: [
      "Dynamic programming seam search with dual-gradient energy operators.",
      "Preserves high-entropy visual features while shrinking or expanding aspect ratios."
    ],
    tags: ["Dynamic Programming", "Computational Photography", "Algorithms", "Image Processing"],
    pdfUrl: "https://hanbrianlee.github.io/portfolio_files/contentaware_seamcarving.pdf",
    pdfFilename: "contentaware_seamcarving.pdf"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Deep Learning & AI Perception",
    skills: [
      { name: "PyTorch & TensorFlow", level: "Expert" },
      { name: "Transformers & Foundational Models", level: "Expert" },
      { name: "Online Scene Mapping & Mapless Driving", level: "Expert" },
      { name: "3D Perception (LiDAR / Camera / Radar)", level: "Expert" },
      { name: "Monocular Depth Estimation", level: "Expert" },
      { name: "Custom Loss Functions & Neural Layers", level: "Expert" },
      { name: "Abstract Neural Localization", level: "Expert" },
      { name: "Adversarial AI & Robustness", level: "Advanced" }
    ]
  },
  {
    title: "Robotics, Estimation & Sensor Fusion",
    skills: [
      { name: "Bayesian Filters (Kalman & Particle Filters)", level: "Expert" },
      { name: "Gaussian Processes (Map Bias Estimation)", level: "Expert" },
      { name: "Data Association (Hungarian Method, ICP)", level: "Expert" },
      { name: "Multi-Sensor Intrinsic / Extrinsic Calibration", level: "Expert" },
      { name: "Visual Odometry & SLAM", level: "Advanced" },
      { name: "Trajectory & Motion Planning", level: "Advanced" }
    ]
  },
  {
    title: "Systems, Firmware & Hardware",
    skills: [
      { name: "C++ (11/14/17)", level: "Expert" },
      { name: "Python", level: "Expert" },
      { name: "MATLAB / Simulink / Stateflow / MotoHawk", level: "Expert" },
      { name: "CANBus & Modbus RS485 In-Vehicle Networks", level: "Expert" },
      { name: "HIL / SIL Testing & FMEA", level: "Expert" },
      { name: "PCB Design (Altium Designer) & Microcontrollers", level: "Advanced" },
      { name: "Linux, CUDA & TensorRT", level: "Advanced" }
    ]
  }
];
