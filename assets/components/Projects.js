/**
 *
 *  This is the projects
 *
 */

import { PROJECTS } from "../data/classes/Project";

import styles from "../styles/modules/Index/Index.module.css";

export const Projects = () => {
  return (
    <section id="projects" className={`${styles.projects}`}>
      <div
        id="projectsInner"
        className={`${styles.projects_inner} fade-left scroll-fade full-second`}
      >
        <h1>
          Current <span>Projects</span>.
        </h1>

        <div className={`${styles.projects_inner_box} container-fluid`}>
          <div className={`${styles.projects_inner_row} row`}>
            {PROJECTS.map((project) => (
              <div
                className={`${styles.project} project col-lg-6 col-md-6 col-sm-6 col-xs-6`}
              >
                <div
                  className={`${styles.project_inner} project-inner half-second`}
                  onMouseEnter={(e) => {
                    const PROJECT_INNERS =
                      document.querySelectorAll(".project-inner");

                    PROJECT_INNERS.forEach((inner) => {
                      inner.style.opacity = 0.5;
                      inner.style.scale = 0.99;
                    });

                    e.currentTarget.style.opacity = 1;
                    e.currentTarget.style.scale = 1;
                  }}
                  onMouseLeave={() => {
                    const PROJECT_INNERS =
                      document.querySelectorAll(".project-inner");

                    PROJECT_INNERS.forEach((inner) => {
                      inner.style.opacity = 1;
                      inner.style.scale = 0.99;
                    });
                  }}
                >
                  <img
                    data-src={project.getProjectImg}
                    className="lazyload"
                    alt={`Image of ${project.getProjectName} on different devices.`}
                  />

                  <div className={`${styles.project_inner_text}`}>
                    <span>{project.getProjectName}</span>

                    <p>{project.getProjectDesc}</p>
                  </div>

                  <div className={`${styles.project_inner_links}`}>
                    <a
                      href={project.getProjectDemoLink}
                      className="half-second"
                      target={"_blank"}
                    >
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.getProjectCodeLink}
                      className="half-second"
                      target={"_blank"}
                    >
                      <span>Github Repo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
