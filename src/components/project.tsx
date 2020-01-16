import React from 'react';
import '../styles/project.css'
import { ProjectData } from '../data/experienceData';

type ProjectProps = {
  data: ProjectData;
  index: number;
  onClick: (index: number) => void;
}

const Project = ({data, index, onClick}: ProjectProps) => (
  <div className="project" onClick={() => onClick(index)}>
    <div className="project-details">
      <div className="core-information">
        <div>{data.name}</div>
        <div>{data.role}</div>
        <div>{data.from} - {data.to}</div>
      </div>
    </div>
  </div>
);

export default Project;