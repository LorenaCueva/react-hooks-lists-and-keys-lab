import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const p = projects.map(project => <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies}></ProjectItem>);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{p}</div>
    </div>
  );
}

export default ProjectList;
