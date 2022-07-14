import '../assets/styles/skills.css';
import js from '../assets/icons/js.png';
import react from '../assets/icons/react.png';
import node from '../assets/icons/node.png';
import html from '../assets/icons/html.png';
import css from '../assets/icons/css.png';
import sequelize from '../assets/icons/sequelize.png';
import github from '../assets/icons/github.png';
import linux from '../assets/icons/linux.png';
import git from '../assets/icons/git.png';
import { useTheme } from "../context/ThemeProvider";


const Skills = () => {
  const { theme } = useTheme();

  const skills = [
    {
      name: 'JavaScript',
      src: js
    },
    {
      name: 'React.js',
      src: react
    },
    {
      name: 'Node.js',
      src: node
    },
    {
      name: 'HTML',
      src: html
    },
    {
      name: 'CSS',
      src: css
    },
    {
      name: 'Sequelize',
      src: sequelize
    },
    {
      name: 'Github',
      src: github
    },
    {
      name: 'Linux',
      src: linux
    },
    {
      name: 'Git',
      src: git
    }
  ];


  return (
    <div id='skills' name="Habilidades" className="skills" style={{ backgroundColor: theme.skillsBackground, color: theme.skillsTextColor, transition: ".2s" }} >
      <h1>Habilidades Técnicas</h1>
      <div className="skills-container">
        {skills.map(({ name, src }) => (
          <div key={name} className="skill" style={{ backgroundColor: theme.skillCardBackground, color: theme.skillCardTextColor, transition: ".2s" }} >
            <div className="skill-icon">
              <img src={src} alt={name} />
              <h3>{name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};


export default Skills;