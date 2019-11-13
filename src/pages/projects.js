import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import ProjectItem from '../components/projectItem'
import styl from './projects.module.scss'

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "md" }
          relativeDirectory: { regex: "/projects/" }
        }
        sort: { fields: [dir], order: ASC }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                title
                live
                source
                stack
                image {
                  publicURL
                }
              }
              html
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className={styl.projectWrapper}>
        {data.allFile.edges.map(el => {
          return (
            <ProjectItem
              key={el.node.id}
              portfolio={el.node.childMarkdownRemark}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Projects
