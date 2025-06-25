// Copy the full content of the 'resume-app' immersive from your screen here.
// It starts with 'import React, { useState, useEffect } from 'react';'
// and ends with 'export default App;'
// Ensure you update the 'resumeDownloadUrl' within this file to your actual PDF link.
import React, { useState, useEffect } from 'react';

// Resume data parsed from your provided resume
const resumeData = {
  name: 'VIVEK KARUNAMOORTHY',
  email: 'Vivek.karunamoorthy@gmail.com',
  phone: '+91 9840673696',
  summary: `I have 12 years of Professional experience, with 7 years specializing in Middleware technologies and 3 years in Azure Devops.`,
  experience: [
    {
      title: 'Infra Technology Specialist',
      company: 'Cognizant',
      duration: 'Jan’22 – Present',
      responsibilities: [
        'Website Creation on AWS S3, IIS servers with Gitlab',
        'Setting up environment from scratch for App servers like Jboss, IIS, Apache Tomcat and Apache webserver.',
        'Build, operationalize, and maintain CI/CD solutions for our technology customers.',
        'Basic scripting with PowerShell.',
        'Having Good Experience on Creating service Connections, Deployment Groups, and Environment variable groups for the Azure Devops CI/CD Pipelines.',
        'S3 - Creating/Deleting S3 bucket, granting permission, configuring as per requirement.',
        'Configuring Bucket level Redirection rules in AWS.',
        'Having Good Experience on Creating service Connections (Git, GitLab connections), Deployment Groups, and Environment variable groups for the Azure Devops CI/CD Pipelines.',
        'Having Good Experience in Azure IaaS, PaaS services like Resource Groups, Azure Virtual Machines, App Services, VNET, Subnets, NSG, Load balancers, Storage Accounts, Azure key vault.',
        'Importing and managing SSL Certificates into the respective applications server.',
        'Managing multiple Application services like WebSphere, Apache, IIS, Apache Tomcat, JBoss, Nginx running on multiple platforms majorly on Linux & Windows.',
        'Procuring Certificates on Digicert.',
        'Managing cloud infrastructure using Terraform(IaC).',
        'Renewal of SSL certificates on all Application/Web servers.',
        'Experience on handling issue tracking through ServiceNow and JIRA board.',
        'Pushing codes from Development to Production environment in Github.',
      ],
    },
    {
      title: 'Module Lead',
      company: 'Mindtree Ltd',
      duration: 'July’18 to Dec’21',
      responsibilities: [
        'Importing and managing SSL Certificates into the respective applications server.',
        'Automating the repeated requests in Jenkins with help of Shell script & Ansible.',
        'Deployment of war files using WAS console, Jenkins and Automated scripts.',
        'Experience in Scripting, CI/CD pipeline and Devops toolsets',
        'Providing Application and Systems Support 24x7 for Web Technologies like Apache Tomcat, IHS and WebSphere Application Servers 7/8.5.',
        'Installations, Configuration, troubleshooting of WebSphere Application Server.',
        'Cluster and Nodes creation in WebSphere Application Server.',
        'Upgradation of WAS fix packs, interim fix and JDKs.',
        'Part of Migration of WCS 7 to WCS 8.',
        'Installation and support experience in RHEL/AIX administration.',
        'Installing, upgrading and removing packages by using RPM and YUM package managements.',
        'Actively participating in weekly Production activities.',
      ],
    },
    {
      title: 'System Engineer',
      company: 'TATA Consultancy Services',
      duration: 'May’14 to July’18',
      responsibilities: [
        'Application servers are federated to the deployment manager in WebSphere 8.0/8.5.',
        'Implemented Clustering, Performance tuning and troubleshooting of IBM WebSphere Application Server 8.0/8.5.',
        'Generating Heap Dumps and Thread Dumps to analyze JVM crashes.',
        'Installation, Configuration and Troubleshooting IBM HTTP Server, Apache Tomcat.',
        'Availability and performance monitoring of middleware applications using various tools like CA Wily Interscope.',
        'Experience setting up WebSphere Security for access to WebSphere Adminconsole',
        'Deployment of several Enterprise Applications in a clustered environment with failover support',
        'Deploying EAR, WAR and JAR files on WebSphere Application Server and configuring various resources for applications',
      ],
    },
    {
      title: 'Technical Support Engineer',
      company: 'ORIGIN ITFS LTD',
      duration: 'Dec’12 to Feb’14',
      responsibilities: [
        'Monitoring Backup and Restore Scheduling.',
        'Installation and configuration of SUN SOLARIS, LINUX, Windows 2008/2003 Server.',
        'User administration, creating Users, Groups.',
        'Documenting of all procedures and any other important issues with resolutions.',
        'Updating Monthly Windows Patches through SCCM Server.',
        'Worked as a Building Management System support (BMS).',
      ],
    },
  ],
  education: [
    {
      degree: 'MSc Computer Science',
      university: 'Madras University, Chennai',
      year: '2018-2020',
    },
    {
      degree: 'BSc Computer Science',
      university: 'Madras University, Chennai',
      year: '2008-2011',
    },
  ],
  certifications: [
    'IBM WebSphere Application Server V8.5',
    'IBM AIX 7.0',
    'Intermediate course at British Council',
    'Azure Administrator AZ-104',
    'Azure Devops AZ-400',
    'ITIL V3 foundation',
  ],
  trainings: [
    'WebLogic Server 11g',
    'Oracle Solaris 10 (SCSA)',
    'Hadoop',
  ],
  // Placeholder for resume download URL. Replace this with your actual PDF URL.
  resumeDownloadUrl: 'https://example.com/vivek_karunamoorthy_resume.pdf',
};

// Icons (using inline SVG for simplicity and consistency)
const DownloadIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7"></path>
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.135a11.042 11.042 0 005.516 5.516l1.135-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.518 23.518 0 0112 15c-1.864 0-3.649-.115-5.33-.314V11H4a2 2 0 00-2 2v7a2 2 0 002 2h16a2 2 0 002-2v-7a2 2 0 00-2-2h-3zm-1-7.953l-8-4.571-8 4.571V11h16V5.302z"></path>
  </svg>
);

const GraduationCapIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v4m0-4a2 2 0 100-4 2 2 0 000 4z"></path>
  </svg>
);

const AwardIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M4.22 5.636l.707.707m1.414 12.728l-.707.707M19.778 19.778l-.707-.707M18 12h1M5 12H4m15.364 2.364l-.707-.707M4.22 18.364l.707-.707m10.165-10.165L14 12l2 2-2 2-2-2-2-2 2-2z"></path>
  </svg>
);

const BookOpenIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253z"></path>
  </svg>
);


function App() {
  const [activeSection, setActiveSection] = useState('summary'); // State for active section

  // Function to handle smooth scrolling to a section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    // Main container with dark theme styling
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4 shadow-lg sticky top-0 z-50 rounded-b-lg">
        <div className="container mx-auto flex flex-wrap justify-center items-center">
          <button
            onClick={() => scrollToSection('summary')}
            className={`px-4 py-2 mx-2 rounded-md transition-all duration-300 ${
              activeSection === 'summary' ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-500 text-gray-300 hover:text-white'
            }`}
          >
            Summary
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className={`px-4 py-2 mx-2 rounded-md transition-all duration-300 ${
              activeSection === 'experience' ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-500 text-gray-300 hover:text-white'
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('education')}
            className={`px-4 py-2 mx-2 rounded-md transition-all duration-300 ${
              activeSection === 'education' ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-500 text-gray-300 hover:text-white'
            }`}
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection('certifications')}
            className={`px-4 py-2 mx-2 rounded-md transition-all duration-300 ${
              activeSection === 'certifications' ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-500 text-gray-300 hover:text-white'
            }`}
          >
            Certifications
          </button>
          <button
            onClick={() => scrollToSection('trainings')}
            className={`px-4 py-2 mx-2 rounded-md transition-all duration-300 ${
              activeSection === 'trainings' ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-500 text-gray-300 hover:text-white'
            }`}
          >
            Trainings
          </button>
        </div>
      </nav>

      {/* Main content area */}
      <div className="container mx-auto p-6 md:p-10">
        {/* Header Section */}
        <header className="text-center mb-12 bg-gray-800 p-8 rounded-xl shadow-lg">
          <h1 className="text-5xl font-extrabold text-indigo-400 mb-4 tracking-wide leading-tight">
            {resumeData.name}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Middleware & DevOps Specialist | Azure Cloud Enthusiast
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-300">
            <a href={`mailto:${resumeData.email}`} className="flex items-center hover:text-indigo-400 transition-colors duration-300">
              <MailIcon /> {resumeData.email}
            </a>
            <a href={`tel:${resumeData.phone}`} className="flex items-center hover:text-indigo-400 transition-colors duration-300">
              <PhoneIcon /> {resumeData.phone}
            </a>
          </div>
          <a
            href={resumeData.resumeDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900"
          >
            <DownloadIcon /> Download Resume
          </a>
        </header>

        {/* About/Summary Section */}
        <section id="summary" className="mb-12 p-8 bg-gray-800 rounded-xl shadow-lg border-l-4 border-indigo-500 animate-fadeIn">
          <h2 className="text-4xl font-bold text-indigo-400 mb-6 flex items-center">
            <BookOpenIcon /> Summary
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            {resumeData.summary}
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-12 p-8 bg-gray-800 rounded-xl shadow-lg border-l-4 border-indigo-500 animate-fadeIn">
          <h2 className="text-4xl font-bold text-indigo-400 mb-8 flex items-center">
            <BriefcaseIcon /> Experience
          </h2>
          <div className="space-y-10">
            {resumeData.experience.map((job, index) => (
              <div key={index} className="relative pl-8 md:pl-16 pb-8 last:pb-0 before:absolute before:left-0 before:top-2 before:h-full before:w-1 before:bg-indigo-700 before:rounded-full">
                <div className="absolute left-[-8px] md:left-[-16px] top-1 bg-indigo-600 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold border-2 border-indigo-900">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{job.title}</h3>
                <p className="text-xl text-indigo-300 mb-2">{job.company}</p>
                <p className="text-md text-gray-400 mb-4">{job.duration}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-md">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-12 p-8 bg-gray-800 rounded-xl shadow-lg border-l-4 border-indigo-500 animate-fadeIn">
          <h2 className="text-4xl font-bold text-indigo-400 mb-6 flex items-center">
            <GraduationCapIcon /> Academic History
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-white mb-2">{edu.degree}</h3>
                <p className="text-lg text-indigo-300 mb-1">{edu.university}</p>
                <p className="text-md text-gray-400">{edu.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="mb-12 p-8 bg-gray-800 rounded-xl shadow-lg border-l-4 border-indigo-500 animate-fadeIn">
          <h2 className="text-4xl font-bold text-indigo-400 mb-6 flex items-center">
            <AwardIcon /> Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeData.certifications.map((cert, index) => (
              <div key={index} className="bg-gray-700 p-5 rounded-lg shadow-md flex items-center hover:shadow-xl transition-shadow duration-300">
                <span className="text-indigo-400 text-3xl mr-3">✔</span>
                <p className="text-lg text-gray-200">{cert}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Trainings Section */}
        <section id="trainings" className="mb-12 p-8 bg-gray-800 rounded-xl shadow-lg border-l-4 border-indigo-500 animate-fadeIn">
          <h2 className="text-4xl font-bold text-indigo-400 mb-6 flex items-center">
            <BookOpenIcon /> Professional Trainings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeData.trainings.map((training, index) => (
              <div key={index} className="bg-gray-700 p-5 rounded-lg shadow-md flex items-center hover:shadow-xl transition-shadow duration-300">
                <span className="text-indigo-400 text-3xl mr-3">📚</span>
                <p className="text-lg text-gray-200">{training}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
          <p className="mt-2">Built with React & Tailwind CSS.</p>
        </footer>
      </div>
      {/* Tailwind CSS CDN script */}
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
}

export default App;
