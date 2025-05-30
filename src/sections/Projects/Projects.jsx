import styles from './ProjectsStyles.module.css';
import weather from "../../assets/image.png"
import chatapp from "../../assets/chatapp.png"
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={weather}
          link="https://github.com/Addyshree/Weather-Forecast.git"
          h3="Weather Forecast App"
          p="Technologies used:  HTML, CSS, JavaScript, API integration"
        />
        <ProjectCard
          src={chatapp}
          link="https://github.com/Addyshree/Chat-App"
          h3="Realtime Chat App"
          p="Technologies used: React.js, Socket.io , Node.js, Expree.js"
        />
        
      </div>
    </section>
  );
}

export default Projects;
