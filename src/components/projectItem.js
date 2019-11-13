import React from 'react'
import styl from './projectItem.module.scss'

const ProjectItem = ({ portfolio }) => {
  const { title, live, source, image } = portfolio.frontmatter
  return (
    <div className={styl.projectContainer}>
      <div className={styl.info}>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: portfolio.html }}></div>
        <a
          className={styl.live}
          target="_blank"
          rel="noopener noreferrer"
          href={live}
        >
          Live &#8599;
        </a>
        <a
          className={styl.source}
          target="_blank"
          rel="noopener noreferrer"
          href={source}
        >
          Source Code &#8599;
        </a>
      </div>
      <div className={styl.img}>
        <img src={image.publicURL} alt="project" />
      </div>
    </div>
  )
}

export default ProjectItem
