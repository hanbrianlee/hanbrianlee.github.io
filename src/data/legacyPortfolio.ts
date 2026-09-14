export interface LegacySiteData {
  title: string;
  tagline: string;
  email: string;
  url: string;
  githubRepo: string;
  framework: string;
  theme: string;
  quote: string;
  bio: string;
  careerSummary: string;
  legacyPages: Array<{
    title: string;
    path: string;
    category: 'custom' | 'theme-boilerplate';
    description: string;
  }>;
  technicalDocuments: Array<{
    title: string;
    filename: string;
    url: string;
    category: string;
    description: string;
    tags: string[];
  }>;
  images: Array<{
    filename: string;
    url: string;
    type: 'profile' | 'hero' | 'theme-demo';
    description: string;
  }>;
}

export const legacyPortfolioBackup: LegacySiteData = {
  title: "Brian (HAN UL) Lee",
  tagline: "Deep Learning Engineer",
  email: "hanbrianlee@gmail.com",
  url: "https://hanbrianlee.github.io",
  githubRepo: "https://github.com/hanbrianlee/hanbrianlee.github.io",
  framework: "Jekyll v3.9.3 (Ruby static site generator)",
  theme: "Bulma Clean Theme (by C.S. Rhymes)",
  quote: "When you want something, all the universe conspires in helping you to achieve it - The Alchemist",
  bio: "Hi! I'm Brian Lee. I'm a Korean/Canadian aspiring to be the deep learning guru in self driving technologies and humanoids.",
  careerSummary: "Senior Deep Learning Engineer at General Motors working on UltraCruise (perception, mapping, localization problems).",
  legacyPages: [
    {
      title: "Homepage (index.md)",
      path: "/",
      category: "custom",
      description: "Main landing page with hero banner (iRobot background), introduction, and placeholder posts sidebar."
    },
    {
      title: "About Me / Docs (docs/personal/aboutme.md)",
      path: "/docs/personal/aboutme.md",
      category: "custom",
      description: "Personal introduction and background images."
    },
    {
      title: "Career (docs/professional/career.md)",
      path: "/docs/professional/career.md",
      category: "custom",
      description: "Chronological journey of career including General Motors UltraCruise role."
    },
    {
      title: "Education (docs/personal/education.md)",
      path: "/docs/personal/education.md",
      category: "custom",
      description: "Academic education background diagram and overview."
    },
    {
      title: "Bulma Clean Theme Starter Pages",
      path: "/landing, /sponsors, /gallery, /products, /example-recipe, /showcase",
      category: "theme-boilerplate",
      description: "Boilerplate demo pages inherited from the Bulma Clean Jekyll theme template."
    }
  ],
  technicalDocuments: [
    {
      title: "AlphaPilot Autonomous Drone Racing (Test 1)",
      filename: "alphapilot_test1.pdf",
      url: "https://hanbrianlee.github.io/portfolio_files/alphapilot_test1.pdf",
      category: "Autonomous Drones & Robotics",
      description: "Technical report for Lockheed Martin AlphaPilot autonomous drone racing competition (Phase 1).",
      tags: ["Autonomous Drones", "Computer Vision", "Gate Detection", "State Estimation"]
    },
    {
      title: "AlphaPilot Autonomous Drone Racing (Test 2)",
      filename: "alphapilot_test2.pdf",
      url: "https://hanbrianlee.github.io/portfolio_files/alphapilot_test2.pdf",
      category: "Autonomous Drones & Robotics",
      description: "Advanced trajectory planning and perception pipeline for high-speed drone navigation.",
      tags: ["Trajectory Planning", "Visual Odometry", "Real-Time AI"]
    },
    {
      title: "AlphaPilot Technical Reports (Stages 2 & 3)",
      filename: "alphapilottechreports2and3.pdf",
      url: "https://hanbrianlee.github.io/portfolio_files/alphapilottechreports2and3.pdf",
      category: "Autonomous Drones & Robotics",
      description: "Comprehensive technical review of navigation and vision architectures for autonomous flight.",
      tags: ["Deep Learning", "Sensor Fusion", "Edge Compute"]
    },
    {
      title: "UltraDepth: Monocular Depth Estimation",
      filename: "ultradepth.pdf",
      url: "https://hanbrianlee.github.io/portfolio_files/ultradepth.pdf",
      category: "Computer Vision & Depth Estimation",
      description: "Deep neural network architectures for predicting dense depth maps from single camera imagery.",
      tags: ["Monocular Depth", "PyTorch", "Perception", "Self-Driving"]
    },
    {
      title: "House Number Recognition (SVHN Deep Learning)",
      filename: "housenumber.pdf",
      url: "https://hanbrianlee.github.io/portfolio_files/housenumber.pdf",
      category: "Deep Learning & Classification",
      description: "End-to-end multi-digit sequence recognition using deep convolutional neural networks.",
      tags: ["CNNs", "Sequence Recognition", "Street View Numbers"]
    },
    {
      title: "Reinforcement Learning Exploration & Control",
      filename: "reinforcementlearning.pdf",
      url: "https://hanbrianlee.github.io/portfolio_files/reinforcementlearning.pdf",
      category: "Reinforcement Learning",
      description: "Exploration strategies, policy gradients, and Q-learning in complex control environments.",
      tags: ["Reinforcement Learning", "Policy Gradient", "Control Systems"]
    },
    {
      title: "Content-Aware Seam Carving",
      filename: "contentaware_seamcarving.pdf",
      url: "https://hanbrianlee.github.io/portfolio_files/contentaware_seamcarving.pdf",
      category: "Computational Photography",
      description: "Dynamic image resizing and energy minimization algorithms for intelligent image retargeting.",
      tags: ["Dynamic Programming", "Energy Function", "Image Processing"]
    },
    {
      title: "Camera Calibration & 3D Geometry",
      filename: "camera.pdf",
      url: "https://hanbrianlee.github.io/portfolio_files/camera.pdf",
      category: "3D Vision & Geometry",
      description: "Intrinsic/extrinsic calibration, epipolar geometry, and stereo depth reconstruction.",
      tags: ["Stereo Vision", "Epipolar Geometry", "Calibration"]
    },
    {
      title: "Test 3 Technical Evaluation Report",
      filename: "Test 3 report.pdf",
      url: "https://hanbrianlee.github.io/portfolio_files/Test 3 report.pdf",
      category: "Autonomous Systems",
      description: "Verification and experimental test benchmark report.",
      tags: ["Benchmarking", "System Validation"]
    }
  ],
  images: [
    {
      filename: "profilepicsmall.jpeg",
      url: "https://hanbrianlee.github.io/img/profilepicsmall.jpeg",
      type: "profile",
      description: "Main profile picture of Brian Lee."
    },
    {
      filename: "profilepic1.png",
      url: "https://hanbrianlee.github.io/img/profilepic1.png",
      type: "profile",
      description: "High resolution profile portrait."
    },
    {
      filename: "aboutmyself.png",
      url: "https://hanbrianlee.github.io/img/aboutmyself.png",
      type: "profile",
      description: "Personal infographic background diagram."
    },
    {
      filename: "education.png",
      url: "https://hanbrianlee.github.io/img/education.png",
      type: "profile",
      description: "Education history diagram."
    },
    {
      filename: "irobotimage.jpg",
      url: "https://hanbrianlee.github.io/img/irobotimage.jpg",
      type: "hero",
      description: "Hero backdrop image depicting robotics / humanoid concept."
    }
  ]
};
