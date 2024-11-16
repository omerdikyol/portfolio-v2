'use client'

import { useState, useEffect } from 'react'
import { ChevronRight, Github, Linkedin, Mail, X, Code, Database, Gamepad2, Smartphone, Brain } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'

const COMPANY_LINKS: { [key: string]: string } = {
  'Ericsson': 'https://www.ericsson.com',
  'HAVELSAN AŞ': 'https://www.havelsan.com.tr',
  'Wocopa': 'https://wocopa.com',
  'Yeditepe University': 'https://www.yeditepe.edu.tr/en',
  'Alexandru Ioan Cuza University': 'https://www.uaic.ro/en'
}

const projects = [
  {
    title: 'Enhanced Therapeutic Engagement',
    description: 'A Gamified Arduino Glove System for Hand Rehabilitation',
    tech: 'Unity Engine, Arduino, C#',
    github: 'https://github.com/omerdikyol/gamified-hand-rehab',
    details: 'This project aims to improve hand rehabilitation through gamification. It uses an Arduino-equipped glove to track hand movements, which are then integrated into Unity-based games, making therapy more engaging and effective.',
    screenshots: [
      '/portfolio-v2/screenshots/therapeutic-glove/therapeutic-glove1.png',
      '/portfolio-v2/screenshots/therapeutic-glove/therapeutic-glove2.png',
    ]
  },
  {
    title: 'YHT Conductor',
    description: 'Automated ticket reservation process for high-speed trains',
    tech: 'Python, Selenium, BeautifulSoup',
    details: 'YHT Conductor is a Python-based automation tool that streamlines the ticket reservation process for high-speed trains. It uses web scraping techniques to efficiently book tickets, saving time for users.',
    screenshots: [
      '/portfolio-v2/screenshots/yht-conductor/yht-conductor1.png',
    ]
  },
  {
    title: 'The Escapade Game',
    description: 'A captivating 3D puzzle game with intricate puzzles and minigames',
    tech: 'Unity Engine, C#',
    github: 'https://github.com/omerdikyol/the-escapade-game',
    details: 'The Escapade is a 3D puzzle game where players solve intricate puzzles and complete various minigames to advance through levels in a mysterious world. Developed using Unity Engine, the game features a low-poly art style that creates a visually unique experience. C# was used for scripting gameplay mechanics, and Unity\'s animation tools brought the world to life.',
    screenshots: [
      '/portfolio-v2/screenshots/escapade-game/the-escapade1.png',
      '/portfolio-v2/screenshots/escapade-game/the-escapade2.png',
    ]
  },
  {
    title: 'Job Optimization Application',
    description: 'Python-based application to optimize job scheduling in manufacturing',
    tech: 'Python, PyQt, Simulated Annealing, Genetic Algorithms',
    github: 'https://github.com/omerdikyol/job_optimization',
    details: 'This application leverages advanced algorithms to optimize job scheduling in manufacturing environments. It uses PyQt for the user interface and implements both Simulated Annealing and Genetic Algorithms for efficient scheduling.',
    screenshots: [
      '/portfolio-v2/screenshots/job-optimization/job-optimization1.png',
      '/portfolio-v2/screenshots/job-optimization/job-optimization2.png',
    ]
  },
  {
    title: 'MedConnect',
    description: 'Backend for a medical appointment scheduling app',
    tech: 'Node.js, TypeScript, Express, MongoDB',
    github: 'https://github.com/omerdikyol/MedConnect-Server',
    details: 'MedConnect is a robust backend system for a medical appointment scheduling application. It provides secure API endpoints for managing appointments and patient data, built with modern technologies for scalability and performance.',
    screenshots: [
    ]
  },
  {
    title: 'Obesity Visualizer',
    description: 'Python-based data visualization tool for obesity trends',
    tech: 'Python, Pandas, Matplotlib, Seaborn',
    github: 'https://github.com/omerdikyol/obesity-visualizer',
    details: 'The Obesity Visualizer is a data visualization tool that provides insights into obesity trends across various demographics. It utilizes Pandas for data processing, and Matplotlib and Seaborn for creating detailed visualizations. Users can explore correlations between obesity and factors like age, income, and geographic location.',
    screenshots: [
      '/portfolio-v2/screenshots/obesity-visualizer/obesity-visualizer1.png',
      '/portfolio-v2/screenshots/obesity-visualizer/obesity-visualizer2.png',
      '/portfolio-v2/screenshots/obesity-visualizer/obesity-visualizer3.png',
    ]
  },
  {
    title: '2D Arkanoid Game',
    description: 'A modern take on the classic Arkanoid-style game',
    tech: 'Unity Engine, C#',
    github: 'https://github.com/omerdikyol/2D-Arkanoid-Game',
    details: 'This project is a modern take on the classic Arkanoid-style game, developed using Unity Engine. The game features dynamic gameplay mechanics and challenges that require players to break bricks using a paddle and ball. Developed in C#, it includes power-ups, multiple levels, and increasing difficulty. Unity\'s physics engine was leveraged to create realistic ball and paddle interactions.',
    screenshots: [
      '/portfolio-v2/screenshots/arkanoid/arkanoid1.png',
      '/portfolio-v2/screenshots/arkanoid/arkanoid2.png',
    ]
  },
]

export function PortfolioComponent() {
  const [typedText, setTypedText] = useState('')
  const textOptions = [
    'Junior Computer Engineer | Computer Engineering Graduate',
    'Software Engineer | Full-Stack Developer | ML Enthusiast | Game Developer',
    'Software Developer working with modern tech stack',
    'Full-Stack Developer crafting web experiences with modern technologies',
    'Passionate about software engineering and problem solving',
    'Bringing ideas to life through development',
    'Learning and growing in software development',
    'Transforming complex problems into elegant solutions with modern tech stack',
    'Code Craftsman | Web Developer | AI Explorer | Interactive Software Engineer'
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const fullText = textOptions[currentTextIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textOptions.length);
      setTypedText(''); // Reset typed text when changing phrases
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval);
  }, [textOptions.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTypedText(fullText.substring(0, typedText.length + 1))
    }, 30)

    return () => clearInterval(timer)
  }, [fullText, typedText])

  const [activeSection, setActiveSection] = useState('')
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'what-i-do', 'experience', 'research', 'projects', 'skills', 'references', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      <nav className="fixed top-0 left-0 right-0 bg-[#0a0a0a]/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#hero" className="text-white font-semibold text-lg">ÖD</a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === item.toLowerCase().replace(' ', '-') ? 'text-[#FF4500]' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </a>
              ))}
              <a href="https://linkedin.com/in/omerdikyol" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF4500]">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/omerdikyol" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF4500]">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:omerdikyol02@gmail.com" className="text-white hover:text-[#FF4500]">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <div className="md:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0 text-white">
                      <span className="sr-only">Open menu</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-[#0a0a0a]/95 backdrop-blur-sm border-[#333]">
                    {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
                      <DropdownMenuItem key={item} asChild>
                        <a
                          href={`#${item.toLowerCase().replace(' ', '-')}`}
                          className={`px-3 py-2 rounded-md text-sm font-medium ${
                            activeSection === item.toLowerCase().replace(' ', '-')
                              ? 'text-[#FF4500]'
                              : 'text-gray-300 hover:text-white'
                          }`}
                        >
                          {item}
                        </a>
                      </DropdownMenuItem>
                    ))}
                    <div className="flex items-center space-x-4 px-3 py-2">
                      <a href="https://linkedin.com/in/omerdikyol" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF4500]">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="https://github.com/omerdikyol" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF4500]">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href="mailto:omerdikyol02@gmail.com" className="text-white hover:text-[#FF4500]">
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <section id="hero" className="min-h-screen flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">ÖMER DİKYOL</h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-8">Computer Engineer</h2>
            <p className="text-[#FF4500] font-mono mb-8">{typedText}</p>
            <Button 
              className="group bg-[#FF4500] hover:bg-[#FF4500]/90 text-white px-6 py-3 
              transition-all duration-300 ease-in-out transform hover:scale-105
              relative overflow-hidden shadow-lg hover:shadow-[#FF4500]/50"
              onClick={() => window.open('https://drive.google.com/file/d/107xTCh7n_nKTgfrI4sCX7_jEhwtogtPY/view?usp=view', '_blank')}
            >
                <span className="relative z-10 flex items-center gap-2">
                <span className="group-hover:-translate-x-1 transition-transform duration-300"></span>
                {"View My Resume"}
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] to-[#FF4500] 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </section>

        <section id="about" className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">About Me</h2>
            <p className="mb-4">
              A results-driven software engineer with a deep passion for computer science, known for delivering innovative solutions that
              drive efficiency and enhance system performance. My broad knowledge across various domains allows me to quickly adapt to
              new challenges and make meaningful contributions in dynamic environments. Whether leading a team or working
              independently, I am committed to achieving excellence in every project.
            </p>
            <p className="mb-4">
              <strong>Current Role:</strong> Gen-E Developer Graduate at Ericsson
            </p>
            <p className="mb-4">
              <strong>Languages:</strong> Turkish (Native), English (B2)
            </p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Education:</h3>
              <ul className="list-disc list-inside">
                <li>Yeditepe University (B.Sc. Computer Engineering, 3.66 GPA)</li>
                <li>Alexandru Ioan Cuza University (Erasmus)</li>
              </ul>
            </div>
            <p className="mb-4">
              <strong>Hobbies:</strong> Chess, Cycling, Table Tennis, Reading, Listening to Music
            </p>
          </div>
        </section>

        <section id="what-i-do" className="py-20 px-4 bg-[#121212]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">What I do?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-[#FF4500]/20 hover:-translate-y-1">
                <Code className="w-12 h-12 mb-4 text-[#FF4500]" />
                <h3 className="text-xl font-semibold mb-2">Software Development</h3>
                <p>Development across multiple programming languages and frameworks, with expertise in system integration and test automation.</p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-[#FF4500]/20 hover:-translate-y-1">
                <Code className="w-12 h-12 mb-4 text-[#FF4500]" />
                <h3 className="text-xl font-semibold mb-2">Full-Stack Web Development</h3>
                <p>End-to-end web application development utilizing modern frameworks (React, Node.js, Laravel), RESTful APIs, and database management.</p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-[#FF4500]/20 hover:-translate-y-1">
                <Brain className="w-12 h-12 mb-4 text-[#FF4500]" />
                <h3 className="text-xl font-semibold mb-2">Research and Development</h3>
                <p>Conducting innovative research in software engineering and AI, developing solutions for defense, automotive, and healthcare sectors.</p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-[#FF4500]/20 hover:-translate-y-1">
                <Gamepad2 className="w-12 h-12 mb-4 text-[#FF4500]" />
                <h3 className="text-xl font-semibold mb-2">Interactive Software & Game Development</h3>
                <p>Creating engaging applications and games using Unity Engine and C#, focusing on therapeutic solutions and interactive experiences.</p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-[#FF4500]/20 hover:-translate-y-1">
                <Smartphone className="w-12 h-12 mb-4 text-[#FF4500]" />
                <h3 className="text-xl font-semibold mb-2">App Development</h3>
                <p>Building comprehensive applications across mobile and desktop platforms, with emphasis on user experience and system optimization.</p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-[#FF4500]/20 hover:-translate-y-1">
                <Database className="w-12 h-12 mb-4 text-[#FF4500]" />
                <h3 className="text-xl font-semibold mb-2">AI/ML Development</h3>
                <p>Designing and implementing machine learning models and AI solutions, specializing in predictive analytics and data processing.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Experience</h2>
            {[
              {
                company: 'Ericsson',
                role: 'Gen-E Developer Graduate',
                period: 'Sep 2024 - Present',
                description: [
                  'Participating in the Gen-E Developer Graduate program, a comprehensive training initiative focused on developing expertise in Ericsson\'s technologies and processes.',
                  'Gaining hands-on experience in software development, system integration, and project management through rotational assignments across various Ericsson business units.',
                  'Collaborating with cross-functional teams to deliver innovative solutions that drive Ericsson\'s digital transformation initiatives.'
                ]
              },
              {
                company: 'HAVELSAN AŞ',
                role: 'Candidate Engineer - Test Automation',
                period: 'Dec 2023 - Aug 2024',
                description: [
                  'Increased test automation efficiency by 30% through the integration of Python and SikuliX, optimizing the ADVENT Combat Management System.',
                  'Enhanced issue detection by 15% by refining testing protocols, leading to quicker identification and resolution of system anomalies.',
                  'Streamlined CI/CD pipelines, reducing deployment time by 20% through active management of Jenkins and Jira, contributing to faster development cycles.'
                ]
              },
              {
                company: 'HAVELSAN AŞ',
                role: 'Test Automation Intern',
                period: 'Aug 2023 - Sep 2023',
                description: [
                  'Contributed to the test automation process of ADVENT Combat Management System on different systems.',
                  'Utilized technologies like Python, SikuliX, Jira, Jenkins while automizing the process, managing the tasks, and running tests.'
                ]
              },
              {
                company: 'Wocopa',
                role: 'IT Team Leader',
                period: 'Oct 2021 - Dec 2022',
                description: [
                  'Led a team that developed and maintained a high-availability platform, improving user engagement by 40%.',
                  'Improved operational efficiency by 35% through effective employee account management and streamlined platform development processes.',
                  'Fostered teamwork and leveraging IT skills, adeptly resolved challenges while showcasing strong problem-solving abilities and effective leadership.'
                ]
              }
            ].map((job, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <h3 className="text-xl font-semibold">
                  <a 
                    href={COMPANY_LINKS[job.company]} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#FF4500] transition-colors"
                  >
                    {job.company}
                  </a>
                </h3>
                <p className="text-[#FF4500] mb-2">{job.role}</p>
                <p className="text-sm text-gray-400 mb-2">{job.period}</p>
                <ul className="list-disc list-inside">
                  {job.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="research" className="py-20 px-4 bg-[#121212]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Research Experience</h2>
            {[
              {
                institution: 'Yeditepe University Software Engineering Research Group',
                role: 'Undergraduate Researcher',
                period: 'Jan 2023 - Sep 2023',
                description: [
                  'Developed innovative software solutions that enhanced industry productivity across sectors such as defense, automotive, and healthcare.',
                  'Contributed to a reduction in resource usage in manufacturing processes through the application of advanced software engineering techniques.'
                ]
              },
              {
                institution: 'Yeditepe University AI Lab',
                role: 'Undergraduate Researcher',
                period: 'Jun 2022 - Aug 2022',
                description: [
                  'Improved stock market prediction accuracy by 20% through the development of an LSTM model using TensorFlow, Keras, and NumPy, leveraging economic news data and sentiment analysis (BERT).',
                  'Enhanced cryptocurrency market analysis with an AI-driven Bitcoin price forecasting bot, employing Python and LSTM models to provide more reliable market forecasts.'
                ]
              }
            ].map((research, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <h3 className="text-xl font-semibold">
                  <a 
                    href={COMPANY_LINKS["Yeditepe University"]} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#FF4500] transition-colors"
                  >
                    {research.institution}
                  </a>
                </h3>
                <p className="text-[#FF4500] mb-2">{research.role}</p>
                <p className="text-sm text-gray-400 mb-2">{research.period}</p>
                <ul className="list-disc list-inside">
                  {research.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="bg-[#1a1a1a] p-6 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#FF4500]/10 hover:-translate-y-1 cursor-pointer">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="mb-2">{project.description}</p>
                      <p className="text-sm text-gray-400 mb-4">{project.tech}</p>
                      <span className="text-[#FF4500] hover:underline inline-flex items-center">
                        Learn More <ChevronRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[625px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                      <DialogDescription>
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <p className="text-sm text-gray-400 mb-2">{project.tech}</p>
                      <p className="mb-4">{project.details}</p>
                      
                      {project.screenshots && project.screenshots.length > 0 && (
                        <div className={`
                          grid gap-4
                          ${project.screenshots.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : ''}
                          ${project.screenshots.length === 3 ? 'grid-cols-1 sm:grid-cols-3' : ''}
                          ${project.screenshots.length === 1 ? 'grid-cols-1 max-w-md mx-auto' : ''}
                        `}>
                          {project.screenshots.map((screenshot, i) => (
                            <div 
                              key={i} 
                              className="relative"
                              onMouseEnter={() => {
                                const timeout = setTimeout(() => {
                                  setHoveredImage(screenshot);
                                }, 300); // 300ms delay
                                setHoverTimeout(timeout);
                              }}
                              onMouseLeave={() => {
                                if (hoverTimeout) {
                                  clearTimeout(hoverTimeout);
                                }
                                setHoveredImage(null);
                              }}
                            >
                              <Image 
                                src={screenshot} 
                                alt={`${project.title} screenshot ${i + 1}`} 
                                className="w-full h-auto rounded-lg transition-all duration-300 hover:opacity-90"
                                layout="responsive"
                                width={700}
                                height={475}
                                unoptimized
                              />
                              {hoveredImage === screenshot && (
                                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-black/90 p-4 rounded-lg shadow-2xl
                                  opacity-0 scale-95 transition-all duration-200 ease-in-out
                                  animate-in fade-in"
                                >
                                  <Image
                                    src={screenshot}
                                    alt={`${project.title} screenshot ${i + 1} (enlarged)`}
                                    className="max-h-[80vh] max-w-[80vw] object-contain"
                                    layout="responsive"
                                    width={700}
                                    height={475}
                                    unoptimized
                                  />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="mt-4 flex justify-between items-center">
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#FF4500] hover:underline inline-flex items-center"
                          >
                            GitHub <ChevronRight className="ml-1 h-4 w-4" />
                          </a>
                        )}
                        <div className="ml-auto">
                          <DialogTrigger asChild>
                            <Button variant="outline">
                              <X className="mr-2 h-4 w-4" /> Close
                            </Button>
                          </DialogTrigger>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 px-4 bg-[#121212]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
          {
            category: 'Programming Languages & Core Technologies',
            skills: 'Python, JavaScript, TypeScript, C#, Java, C++, C, PHP'
          },
          {
            category: 'Frontend Development',
            skills: 'React.js, Vue.js, Next.js, HTML5, CSS3, Tailwind CSS, Bootstrap, Material-UI,'
          },
          {
            category: 'Backend Development',
            skills: 'Node.js, Django, Flask, Nest.js, Laravel, .NET Core, Express.js, REST APIs'
          },
          {
            category: 'Mobile Development',
            skills: 'React Native'
          },
          {
            category: 'AI & Machine Learning',
            skills: 'TensorFlow, Keras, NumPy, Pandas, Scikit-learn'
          },
          {
            category: 'Databases & Storage',
            skills: 'MongoDB, MySQL'
          },
          {
            category: 'Development Tools & DevOps',
            skills: 'Git, GitHub/GitLab/Bitbucket, Docker, Kubernetes, Jenkins, Linux/Unix, Bash, Jira, VS Code, Postman'
          },
          {
            category: 'Testing & Automation',
            skills: 'Selenium, BeautifulSoup'
          },
          {
            category: 'Game & Interactive Development',
            skills: 'Unity Engine, Unreal Engine, Game Design Patterns, Physics Engines,Blender'
          }
              ].map((category, index) => (
          <div key={index} className="mb-6 last:mb-0 transition-all duration-300 ease-in-out hover:bg-[#1a1a1a] p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">{category.category}</h3>
            <p className="font-mono text-sm">{category.skills}</p>
          </div>
              ))}
            </div>
          </div>
        </section>

        <section id="soft-skills" className="py-20 px-4 bg-gradient-to-b from-[#121212] to-[#1a1a1a]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Soft Skills</h2>
            <p className="font-light text-lg leading-relaxed tracking-wide text-gray-200 italic">
              Equipped with a robust set of soft skills, including strong collaboration and teamwork abilities, critical thinking and problem-solving prowess, effective leadership and management capabilities, and a steadfast commitment to integrity and professionalism. These skills enable me to adapt quickly, communicate effectively, and drive successful outcomes in diverse and challenging environments.
            </p>
          </div>
        </section>

        <section id="references" className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Professional References</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1a1a1a] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Adrian Iftene</h3>
                <p className="mb-2">Professor, PhD, Faculty of Computer Science</p>
                <p className="mb-2">"Alexandru Ioan Cuza" University of Iasi, Romania</p>
                <p className="mb-1">Email: adiftene@info.uaic.ro</p>
                <p>Phone: 004-0232-201091</p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Tacha Serif</h3>
                <p className="mb-2">Professor, PhD, Faculty of Engineering</p>
                <p className="mb-2">Computer Engineering Department, Yeditepe University, Istanbul, Turkey</p>
                <p>Email: tserif@cse.yeditepe.edu.tr</p>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="contact" className="py-20 px-4 bg-[#121212]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Contact</h2>
            <form className="space-y-4 mb-8 bg-[#1a1a1a]/50 backdrop-blur-sm p-6 rounded-lg">
              <Input type="text" placeholder="Name" className="bg-[#1a1a1a] border-[#333]" />
              <Input type="email" placeholder="Email" className="bg-[#1a1a1a] border-[#333]" />
              <Textarea placeholder="Message" className="bg-[#1a1a1a] border-[#333]" />
              <Button className="bg-[#FF4500] hover:bg-[#FF4500]/90 text-white">Send Message</Button>
            </form>
          </div>
        </section> */}
      </main>

      <footer className="bg-[#0a0a0a] py-8 px-4 text-center">
        <p className="text-sm text-gray-500">© 2024 Ömer Dikyol. All rights reserved.</p>
      </footer>
    </div>
  )
}