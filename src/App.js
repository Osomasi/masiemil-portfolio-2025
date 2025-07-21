import React from 'react';
import './App.css';

const cvData = {
  name: 'MASI EMIL',
  title: 'Full Stack React | AI Custom Solutions Specialist Developer',
  address: '15 Parklodge Avenue, Cavendish House, West Drayton, London, UB7 9FR, United Kingdom',
  email: 'osomasi19@gmail.com',
  phone: '07078133825 / 07990868650',
  nationality: 'German/Nigerian',
  placeOfBirth: 'Nigeria',
  drivingLicense: 'Yes',
  profile: `I am a seasoned, dynamic developer and AI specialist with a degree in Computer Science, excelling in full-stack development from concept to deployment. My core strengths include advanced AI custom solutions, React, JavaScript, and the Microsoft Power Platform. I am passionate about leading teams and delivering innovative, logical software that drives real-world impact. My daily commitment is to create user-centered designs and robust, intelligent functionalities that exceed client expectations, foster engagement, and set new standards in digital excellence.`,
  skills: [
    'Ability to Work in a Team',
    'Microsoft Office Power Apps',
    'Power Automate',
    'Power Pages',
    'Power BI',
    'React',
    'Javascript',
    'Microsoft Excel',
    'AI Custom Solutions',
  ],
  employment: [
    {
      title: 'CEO',
      company: 'Mas-Emil Enterprise',
      period: '2025 — Present',
      details: [
        'Founder and CEO of a software solutions startup.',
        'Overseeing business strategy, product development, and client relations.',
        'Delivering innovative software solutions for diverse clients.',
      ],
    },
    {
      title: 'Partner',
      company: 'CDHQ, London',
      period: 'June 2023 — May 2024',
      details: [
        'Responsible for the development and delivering of MS Business solutions.',
        'Leveraging Power Apps, Power Fabric, Power BI, Power Automate, and the rest of MS Power Platform tools',
        'Communicating with clients on development progress',
        'Presentation Demos on Software usage and integration on delivery',
      ],
    },
    {
      title: 'Data Analyst / Engineer',
      company: 'ADDO PLAY LTD, Amersham',
      period: 'February 2022 — January 2023',
      details: [
        'Developing and Managing a Unique Centralised Database',
        'Liaising daily with clients on data updates and information',
        'Sales Cost Automation (Excel, PowerBI)',
        'Forecasting Prediction software (Excel, Power BI, VBA)',
      ],
    },
    {
      title: 'Mobile App Developer',
      company: '',
      period: '',
      details: [
        'Custom mobile app and website full stack integrated software packages',
        'Delivering IOS / Android / Desktop software applications.',
      ],
    },
  ],
  education: [
    {
      degree: 'BSc Hons Computer Science 2:1',
      school: 'Brunel University London, London, Uxbridge.',
      period: '2019 — 2021',
    },
    {
      degree: 'Certified Front End Programmer 2022',
      school: 'Skill Soft Code Institute, London',
      period: 'October 2021 — June 2022',
    },
  ],
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/osomasi-emil-inyang-397a261b8/' },
    { label: 'Github', url: 'https://github.com/Osomasi' },
  ],
  references: [
    {
      author: 'Sarah Duggan',
      text: 'An excellent communicator, with exceptional focus to detail- Masi is a wonderful individual to work with and shows incredible passion for Software Development and his projects in JavaScript. He demonstrates huge enthusiasm whenever speaking about technical matters, and is a clear communicator all of his undertakings that makes it easier for someone to understand. He will never stop until a problem has been solved, and shows huge levels of determination and focus to achieve the highest level of results.'
    },
    {
      author: 'Melbourne Solutions',
      text: 'Masi has integrated AI into our daily system and boosted our results significantly. His technical expertise and innovative approach have made a measurable impact on our business.'
    },
    {
      author: 'Peter Churchhill & Claire Price',
      text: 'We have benefitted from Masi’s work in AI to create a website for vendor communication, loading, and reporting. His solutions have streamlined our processes and improved our workflow.'
    }
  ],
  languages: ['English'],
  currentProjects: [
    {
      title: 'Educational Portal',
      description: 'A platform tailored to streamlining parent, teacher, and student communications and relationships in schools, and more.',
      year: '2025',
    },
    {
      title: 'E-Commerce for Africa',
      description: 'A scalable e-commerce platform for vendors and customers of all sizes across Africa.',
      year: '2025',
    },
    {
      title: 'Financial Technology Services',
      description: 'Next-generation fintech services designed to compete with leading industry competitors.',
      year: '2026',
    },
  ],
};

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #232526 0%, #1a2a2d 40%, #0f2027 100%, #39ff14 180%)',
      color: '#39ff14',
      fontFamily: 'Fira Mono, Menlo, Monaco, Consolas, monospace',
      padding: '2.5rem',
      boxSizing: 'border-box',
      position: 'relative',
    }}>
      <style>{`
        a { color: #fff; text-decoration: underline; }
        .cv-section {
          margin-bottom: 2.5rem;
          background: rgba(20, 24, 28, 0.65);
          border-radius: 22px;
          box-shadow: 0 8px 32px 0 rgba(0,0,0,0.35), 0 2px 8px 0 rgba(57,255,20,0.10);
          padding: 2rem 1.5rem;
          border: 1.5px solid rgba(57,255,20,0.18);
          backdrop-filter: blur(12px) saturate(120%);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .cv-section:hover {
          box-shadow: 0 12px 40px 0 rgba(57,255,20,0.22), 0 4px 16px 0 rgba(0,0,0,0.30);
          transform: translateY(-2px) scale(1.012);
        }
        .cv-title {
          color: #fff;
          font-size: 2.1rem;
          font-weight: bold;
          letter-spacing: 2.5px;
          margin-bottom: 1.2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .cv-title-anim {
          display: inline-block;
          width: 2rem;
          height: 2rem;
          margin-right: 0.5rem;
          animation: spin 2.5s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .cv-subtitle {
          color: #39ff14;
          font-size: 1.1rem;
          margin-bottom: 1.2rem;
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }
        .cv-label { color: #fff; font-weight: bold; font-size: 1rem; display: flex; align-items: center; gap: 0.5rem; }
        .cv-list { margin: 0.5rem 0 0 1.2rem; }
        .cv-job-title { color: #fff; font-size: 1.05rem; font-weight: bold; display: flex; align-items: center; gap: 0.5rem; }
        .cv-job-company { color: #39ff14; font-size: 0.98rem; }
        .cv-job-period { color: #fff; font-size: 0.92rem; }
        .cv-edu-degree { color: #fff; font-size: 1.05rem; font-weight: bold; display: flex; align-items: center; gap: 0.5rem; }
        .cv-edu-school { color: #39ff14; font-size: 0.98rem; }
        .cv-edu-period { color: #fff; font-size: 0.92rem; }
        .cv-contact-fixed {
          position: fixed;
          right: 1.2rem;
          bottom: 1.2rem;
          display: flex;
          flex-direction: row;
          gap: 1rem;
          z-index: 1000;
        }
        .cv-contact-btn {
          background: rgba(20, 24, 28, 0.85);
          border: 2.5px solid #39ff14;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #39ff14;
          font-size: 1.5rem;
          box-shadow: 0 4px 16px 0 rgba(57,255,20,0.22), 0 2px 8px 0 rgba(0,0,0,0.18);
          cursor: pointer;
          border-bottom: 3.5px solid #232526;
          transition: background 0.2s, box-shadow 0.2s, color 0.2s, transform 0.18s;
        }
        .cv-contact-btn:hover {
          background: #39ff14;
          color: #181c1f;
          box-shadow: 0 8px 32px 0 rgba(57,255,20,0.32);
          transform: scale(1.13) translateY(-2px);
        }
        .cv-projects-section {
          background: rgba(30, 40, 36, 0.72);
          border-radius: 22px;
          box-shadow: 0 8px 32px 0 rgba(0,0,0,0.35), 0 2px 8px 0 rgba(57,255,20,0.10);
          padding: 2.2rem 2.2rem 1.5rem 2.2rem;
          border: 1.5px solid rgba(57,255,20,0.18);
          backdrop-filter: blur(12px) saturate(120%);
          margin-bottom: 2.5rem;
        }
        .cv-project-title {
          color: #fff;
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 0.2rem;
          letter-spacing: 1px;
        }
        .cv-project-desc {
          color: #39ff14;
          font-size: 1.05rem;
          margin-bottom: 0.5rem;
        }
        .cv-project-year {
          color: #fff;
          font-size: 0.95rem;
          margin-bottom: 0.7rem;
        }
        .cv-join-btn {
          background: linear-gradient(90deg, #39ff14 0%, #0f2027 100%);
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 0.5rem 1.3rem;
          font-size: 1rem;
          font-family: inherit;
          font-weight: bold;
          letter-spacing: 1px;
          box-shadow: 0 2px 8px 0 rgba(57,255,20,0.18);
          cursor: pointer;
          margin-bottom: 1.2rem;
          margin-top: 0.2rem;
          transition: background 0.18s, color 0.18s, transform 0.18s;
        }
        .cv-join-btn:hover {
          background: linear-gradient(90deg, #0f2027 0%, #39ff14 100%);
          color: #fff;
          transform: scale(1.06);
        }
        @media (max-width: 700px) {
          .cv-section { padding: 1.2rem 0.5rem; }
          .cv-title { font-size: 1.3rem; }
          .cv-title-anim { width: 1.2rem; height: 1.2rem; }
          .cv-subtitle { font-size: 0.9rem; }
          .cv-label { font-size: 0.85rem; }
          .cv-job-title, .cv-edu-degree { font-size: 0.9rem; }
          .cv-job-company, .cv-edu-school { font-size: 0.85rem; }
          .cv-job-period, .cv-edu-period { font-size: 0.8rem; }
          .cv-contact-fixed { right: 0.5rem; bottom: 0.5rem; gap: 0.5rem; }
          .cv-contact-btn { width: 2.2rem; height: 2.2rem; font-size: 1rem; }
        }
      `}</style>
      <div className="cv-section" style={{borderBottom: '1px solid #39ff14', paddingBottom: '1rem', marginBottom: '2rem'}}>
        <div className="cv-title"><span className="cv-title-anim">💻</span>{cvData.name}</div>
        <div className="cv-subtitle"><span role="img" aria-label="dev">👨‍💻</span>{cvData.title}</div>
        <div>{cvData.address}</div>
        <div><span className="cv-label"><span role="img" aria-label="email">✉️</span>Email:</span> <a href={`mailto:${cvData.email}`}>{cvData.email}</a></div>
        <div><span className="cv-label"><span role="img" aria-label="phone">📞</span>Phone:</span> <a href={`tel:${cvData.phone}`}>{cvData.phone}</a></div>
        <div><span className="cv-label"><span role="img" aria-label="flag">🌍</span>Nationality:</span> {cvData.nationality}</div>
        <div><span className="cv-label"><span role="img" aria-label="birth">🎂</span>Place Of Birth:</span> {cvData.placeOfBirth}</div>
        <div><span className="cv-label"><span role="img" aria-label="car">🚗</span>Driving License:</span> {cvData.drivingLicense}</div>
      </div>
      <div className="cv-section">
        <div className="cv-label"><span role="img" aria-label="profile">🧑‍💼</span>PROFILE</div>
        <div>{cvData.profile}</div>
      </div>
      <div className="cv-section">
        <div className="cv-label"><span role="img" aria-label="skills">🛠️</span>SKILLS</div>
        <ul className="cv-list">
          {cvData.skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
      <div className="cv-section">
        <div className="cv-label"><span role="img" aria-label="briefcase">💼</span>EMPLOYMENT HISTORY</div>
        {cvData.employment.map((job, i) => (
          <div key={i} style={{marginBottom: '1rem'}}>
            <div className="cv-job-title">{job.title === 'CEO' ? <span role="img" aria-label="ceo">👑</span> : job.title === 'Partner' ? <span role="img" aria-label="partner">🤝</span> : <span role="img" aria-label="dev">💻</span>}{job.title}</div>
            <div className="cv-job-company">{job.company}</div>
            <div className="cv-job-period">{job.period}</div>
            <ul className="cv-list">
              {job.details.map((d, j) => <li key={j}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="cv-section">
        <div className="cv-label"><span role="img" aria-label="education">🎓</span>EDUCATION</div>
        {cvData.education.map((edu, i) => (
          <div key={i} style={{marginBottom: '1rem'}}>
            <div className="cv-edu-degree"><span role="img" aria-label="degree">📜</span>{edu.degree}</div>
            <div className="cv-edu-school">{edu.school}</div>
            <div className="cv-edu-period">{edu.period}</div>
          </div>
        ))}
      </div>
      <div className="cv-section">
        <div className="cv-label"><span role="img" aria-label="links">🔗</span>LINKS</div>
        <ul className="cv-list">
          {cvData.links.map(link => <li key={link.label}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a></li>)}
        </ul>
      </div>
      <div className="cv-section">
        <div className="cv-label"><span role="img" aria-label="references">🗂️</span>REFERENCES</div>
        <ul className="cv-list">
          {cvData.references.map((ref, i) => (
            <li key={i} style={{marginBottom: '1.2rem'}}>
              <span style={{color: '#fff', fontWeight: 'bold'}}>{ref.author}:</span> <span style={{color: '#39ff14'}}>{ref.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="cv-section">
        <div className="cv-label"><span role="img" aria-label="languages">🌐</span>LANGUAGES</div>
        <ul className="cv-list">
          {cvData.languages.map(lang => <li key={lang}>{lang}</li>)}
        </ul>
      </div>
      <div className="cv-projects-section">
        <div className="cv-label" style={{fontSize: '1.3rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <span role="img" aria-label="rocket">🚀</span> CURRENT PROJECTS
        </div>
        {cvData.currentProjects.map((proj, i) => (
          <div key={i} style={{marginBottom: '1.7rem'}}>
            <div className="cv-project-title">{proj.title} <span className="cv-project-year">({proj.year})</span></div>
            <div className="cv-project-desc">{proj.description}</div>
            <button
              className="cv-join-btn"
              onClick={() => window.open(`mailto:${cvData.email}?subject=I would like to join the team ${encodeURIComponent(proj.title)}`)}
            >
              Join the Team
            </button>
          </div>
        ))}
      </div>
      <div className="cv-contact-fixed">
        <a className="cv-contact-btn" href={`tel:${cvData.phone.split(' / ')[0]}`} title="Call" aria-label="Call">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#39ff14" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7a2 2 0 0 1 1.72 2V21z"/></svg>
        </a>
        <a className="cv-contact-btn" href={`mailto:${cvData.email}`} title="Email" aria-label="Email">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#39ff14" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
        </a>
      </div>
      <footer style={{
        width: '100%',
        textAlign: 'center',
        color: '#39ff14',
        fontFamily: 'Fira Mono, Menlo, Monaco, Consolas, monospace',
        fontSize: '0.95rem',
        marginTop: '2.5rem',
        marginBottom: '0.5rem',
        opacity: 0.85,
        letterSpacing: '1px',
      }}>
        All work is owned and all rights reserved &copy; {new Date().getFullYear()} Mas-Emil Enterprise.
      </footer>
    </div>
  );
}
