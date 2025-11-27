import { useMemo } from 'react'
import ProfileSection from '../components/about/ProfileSection'
import SkillsGrid from '../components/about/SkillsGrid'
import ExperienceTimeline from '../components/about/ExperienceTimeline'
import ToolsSection from '../components/about/ToolsSection'
import DownloadCVButton from '../components/about/DownloadCVButton'

/**
 * About Page
 * About page with profile, skills, experience, tools, and CV download
 */
const About = () => {
  // Mock data - Replace with actual data fetching
  const profileData = useMemo(() => ({
    photo: null, // '/images/profile.jpg'
    name: 'Your Name',
    title: 'Full-Stack Developer',
    bio: [
      'I\'m a passionate developer with a love for creating beautiful and functional web applications. With expertise in modern JavaScript frameworks and a keen eye for design, I bring ideas to life through code.',
      'My journey in web development started several years ago, and I\'ve been continuously learning and growing ever since. I enjoy working on challenging projects that push me to expand my skills and knowledge.',
      'When I\'m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.',
    ],
  }), [])

  const skillsData = useMemo(() => [
    { name: 'React', icon: '⚛️', level: 90 },
    { name: 'TypeScript', icon: '📘', level: 85 },
    { name: 'Node.js', icon: '🟢', level: 80 },
    { name: 'Python', icon: '🐍', level: 75 },
    { name: 'Tailwind CSS', icon: '🎨', level: 95 },
    { name: 'MongoDB', icon: '🍃', level: 70 },
    { name: 'PostgreSQL', icon: '🐘', level: 75 },
    { name: 'Docker', icon: '🐳', level: 65 },
    { name: 'AWS', icon: '☁️', level: 60 },
    { name: 'Git', icon: '📦', level: 85 },
    { name: 'Figma', icon: '🎨', level: 70 },
    { name: 'Next.js', icon: '▲', level: 80 },
  ], [])

  const experienceData = useMemo(() => [
    {
      period: '2022 - Present',
      title: 'Senior Full-Stack Developer',
      company: 'Tech Company Inc.',
      description: 'Leading development of scalable web applications using React and Node.js. Collaborating with cross-functional teams to deliver high-quality software solutions.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
    },
    {
      period: '2020 - 2022',
      title: 'Full-Stack Developer',
      company: 'Startup Solutions',
      description: 'Developed and maintained multiple client projects, focusing on responsive design and user experience. Implemented RESTful APIs and database solutions.',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'PostgreSQL'],
    },
    {
      period: '2018 - 2020',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Created interactive web interfaces and collaborated with designers to implement pixel-perfect designs. Optimized applications for performance and accessibility.',
      technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
    },
  ], [])

  const toolsData = useMemo(() => [
    // Development Tools
    { name: 'VS Code', icon: '💻', category: 'Development Tools' },
    { name: 'Git', icon: '📦', category: 'Development Tools' },
    { name: 'Docker', icon: '🐳', category: 'Development Tools' },
    { name: 'Postman', icon: '📮', category: 'Development Tools' },
    { name: 'Chrome DevTools', icon: '🔍', category: 'Development Tools' },
    { name: 'Terminal', icon: '⌨️', category: 'Development Tools' },
    
    // Design Tools
    { name: 'Figma', icon: '🎨', category: 'Design Tools' },
    { name: 'Adobe XD', icon: '✨', category: 'Design Tools' },
    { name: 'Photoshop', icon: '🖼️', category: 'Design Tools' },
    
    // Project Management
    { name: 'Jira', icon: '📋', category: 'Project Management' },
    { name: 'Trello', icon: '📌', category: 'Project Management' },
    { name: 'Notion', icon: '📝', category: 'Project Management' },
    
    // Cloud & DevOps
    { name: 'AWS', icon: '☁️', category: 'Cloud & DevOps' },
    { name: 'Vercel', icon: '▲', category: 'Cloud & DevOps' },
    { name: 'Netlify', icon: '🌐', category: 'Cloud & DevOps' },
    { name: 'GitHub Actions', icon: '⚙️', category: 'Cloud & DevOps' },
  ], [])

  const cvUrl = '/resume.pdf' // Replace with actual CV URL

  return (
    <div className="w-full min-h-screen">
      {/* Profile Section */}
      <ProfileSection
        photo={profileData.photo}
        name={profileData.name}
        title={profileData.title}
        bio={profileData.bio}
      />

      {/* Skills Grid */}
      <SkillsGrid skills={skillsData} />

      {/* Experience Timeline */}
      <ExperienceTimeline experiences={experienceData} />

      {/* Tools Section */}
      <ToolsSection tools={toolsData} />

      {/* Download CV Button */}
      <DownloadCVButton cvUrl={cvUrl} fileName="resume.pdf" />
    </div>
  )
}

export default About

