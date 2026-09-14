import { ProjectItem, ExperienceItem, SkillCategory } from '../types';

export const personalInfo = {
  name: "Brian (HAN UL) Lee",
  headline: "Senior Deep Learning Engineer",
  tagline: "Building the next generation of autonomous driving, computer vision, and humanoid robotics.",
  quote: "“When you want something, all the universe conspires in helping you to achieve it.” — The Alchemist",
  location: "Detroit, MI / Toronto, ON (Korean / Canadian)",
  email: "hanbrianlee@gmail.com",
  github: "https://github.com/hanbrianlee",
  linkedin: "https://www.linkedin.com/in/brianhanullee/",
  legacySiteUrl: "https://hanbrianlee.github.io",
  avatarUrl: "https://hanbrianlee.github.io/img/profilepicsmall.jpeg",
  heroBackground: "https://hanbrianlee.github.io/img/irobotimage.jpg",
  bioParagraphs: [
    "Hi! I'm Brian Lee. I'm a Deep Learning & Autonomous Driving Engineer dedicated to advancing self-driving technologies, computer vision, and embodied robotics.",
    "My expertise spans end-to-end perception, neural mapping, real-time localization, and multi-sensor fusion for safety-critical autonomous systems. I have engineered production deep learning models for General Motors Ultra Cruise as well as high-speed autonomous racing systems."
  ]
};

export const experiences: ExperienceItem[] = [
  {
    id: "gm-ultracruise",
    role: "Senior Deep Learning Engineer",
    company: "General Motors",
    team: "Ultra Cruise / Autonomous Driving Division",
    period: "Recent - Present",
    location: "Markham, ON / Detroit, MI",
    focus: "Autonomous Driving Perception, Neural Mapping & Localization",
    bulletPoints: [
      "Engineered deep learning architectures for real-time perception, 3D object detection, and road topology understanding for GM's Ultra Cruise hands-free driving system.",
      "Designed neural mapping algorithms and vision-based localization pipelines to deliver high-precision pose estimation in dynamic urban and highway scenarios.",
      "Developed end-to-end evaluation metrics, ground truth pipelines, and edge inference optimizations for low-latency in-vehicle compute platforms.",
      "Collaborated across multi-sensor teams (camera, radar, LiDAR) to enhance multi-modal fusion reliability in adverse weather and lighting conditions."
    ],
    technologies: ["PyTorch", "CUDA", "TensorRT", "3D Computer Vision", "Point Clouds", "Multi-Sensor Fusion", "C++", "Python", "ROS/ROS2"]
  },
  {
    id: "alphapilot",
    role: "Autonomous Systems & Perception Lead",
    company: "AlphaPilot Autonomous Challenge",
    team: "Lockheed Martin / Drone Racing League (DRL)",
    period: "Competition Project",
    location: "Global Competition",
    focus: "High-Speed Autonomous Drone Racing Perception & Navigation",
    bulletPoints: [
      "Architected real-time visual perception models to detect racing gates and obstacles at speeds exceeding 70+ mph without GPS assistance.",
      "Implemented state estimation and visual-inertial odometry routines capable of executing microsecond trajectory adjustments.",
      "Published comprehensive technical documentation and system validation reports across qualification tests and tournament stages."
    ],
    technologies: ["Visual Inertial Odometry", "YOLO / Gate Detection", "Trajectory Optimization", "Edge AI", "C++", "Embedded Linux"]
  }
];

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
    title: "Deep Learning & AI",
    skills: [
      { name: "PyTorch", level: "Expert" },
      { name: "3D Object Detection", level: "Expert" },
      { name: "Monocular Depth Estimation", level: "Expert" },
      { name: "Transformer & CNN Architectures", level: "Advanced" },
      { name: "Reinforcement Learning", level: "Advanced" },
      { name: "TensorRT & CUDA Optimization", level: "Advanced" }
    ]
  },
  {
    title: "Autonomous Driving & Robotics",
    skills: [
      { name: "Perception Pipelines (Camera / LiDAR / Radar)", level: "Expert" },
      { name: "Neural Mapping & HD Maps", level: "Advanced" },
      { name: "Visual Odometry & SLAM", level: "Advanced" },
      { name: "Sensor Fusion & Calibration", level: "Advanced" },
      { name: "ROS / ROS 2", level: "Proficient" },
      { name: "Trajectory & Motion Planning", level: "Proficient" }
    ]
  },
  {
    title: "Engineering & Tooling",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "C++ (14/17)", level: "Advanced" },
      { name: "Git & CI/CD Pipelines", level: "Advanced" },
      { name: "Linux / Embedded Edge AI", level: "Advanced" },
      { name: "Docker & Containerization", level: "Advanced" },
      { name: "Mathematical Modeling & Geometry", level: "Advanced" }
    ]
  }
];
