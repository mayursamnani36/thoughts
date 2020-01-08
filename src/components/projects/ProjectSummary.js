import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card blue-grey darken-1 z-depth-2 project-summary">
      <div className="card-content white-text">
        <span className="card-title ">{project.title}</span>
        <p>
          Posted by {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="orange-text">
          {" "}
          {project.createdAt
            .toDate()
            .toString()
            .slice(0, 25)}{" "}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
