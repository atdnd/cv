/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Block from "./block"
import Job from "./job"
import References from "./references"
import Contact from "./contact"

import "./layout.css"
import { MDXRenderer } from "gatsby-plugin-mdx"
import InlineList from "./inlineList"

const referenceList = [
  {
    name: 'Katia Przysiezny',
    position: 'Scrum Master',
    company: 'US Bank',
    companyLink: 'https://www.usbank.com/',
    email: 'kfprzysiezny@gmail.com'
  },
  {
    name: 'Guillermo López',
    position: 'Principal Front End Engineer',
    company: 'PedidosYa',
    companyLink: 'https://www.pedidosya.com.uy/',
    email: 'guilleflm@gmail.com',
    phone: '+59892962382'
  },
  {
    name: 'Ignacio Carugati',
    position: 'Designer and Developer',
    company: 'SolarWinds',
    companyLink: 'https://www.solarwinds.com/',
    phone: '+59899719055'
  },
  {
    name: 'Leonel Izmendi',
    position: 'CEO',
    company: 'Lexart Labs',
    companyLink: 'https://www.lexartlabs.com/',
    email: 'leonel@lexartlabs.com'
  },
  {
    name: 'Alejandro Gimenez',
    position: 'Application Security Engineer',
    company: 'Talpa Network',
    companyLink: 'https://talpanetwork.com/',
    email: 'alejandrogimenezes@gmail.com',
    phone: '+31626774190'
  },
];

const technologyList = [
  'HTML', 'CSS', 'JS', 'Git', 'React', 'LESS', 'SASS', 'Stylus', 'Webpack', 'AngularJS', 'Angular', 'NodeJS', 'Typescript', 'PHP', 'Bash', 'Grunt', 'MySQL', 'JQuery',
];

const softwareList = [
  'Sketch', 'Visual Studio Code', 'Visual Studio', 'WebStorm', 'PHPStorm', 'Vim', 'Adobe Photoshop', 'Adobe Illustrator',
];

const methodologiesList = [
  'Agile', 'Scrum'
];

const contactInfo = {
  linkedin: 'https://www.linkedin.com/in/andrestechera8a436a25/',
  phone: '+59898935899',
  email: 'atecheradnd@gmail.com',
}

const Layout = ({ children, isPrint = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          description
        }
      }
      allMdx(sort: {order: DESC, fields: frontmatter___date}) {
        nodes {
          frontmatter {
            title
            date
          }
          id
          body
          
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} siteDescription={data.site.siteMetadata?.description} isPrint={isPrint} />
      <Block isNegative title="About me">
        <p>
          I'm a 34 years old programmer and manager with more than 10 years of experience in the industry.
          My personal and professional goals are aimed towards making a great impact in the companies and the people I work with.
          I love mentoring, tutoring and empowering development teams from both the technical and the human aspect.
          I'm invested mostly in Front-End development and design but I also have had experience working in other areas in engineering such as DevOPS, Architecture and Back-end development.
        </p>
      </Block>
      <Block isNegative title="Contact Information">
        <Contact contactInfo={contactInfo} />
      </Block>
      <Block title="Skills">
        <p>
          I have a web developer background and I'm a designer at heart.
          My core strengths are in the Front-End area of development mostly in <strong><a href="https://reactjs.org" title="Visit React homepage" rel='noreferrer' target='_blank'>React</a></strong>,             <strong>javascript</strong>, <strong><acronym title='Hypertext Markup Language'>HTML</acronym></strong> and <strong><acronym title='Cascading Style Sheets'>CSS</acronym></strong> but I'm also experienced
          in Back-End languages, DevOPS and Design tools.
        </p>
        <InlineList title="Technologies" items={technologyList} isNegative />

        <InlineList title="Software" items={softwareList} />

        <InlineList title="Methodologies" items={methodologiesList} isNegative />

      </Block>

      <Block title="Experience">
        {data.allMdx.nodes.map((job) => <Job title={job.frontmatter.title} key={job.id}><MDXRenderer>{job.body}</MDXRenderer></Job>)}
      </Block>
      <Block title="Education">
        <h2>Information Technology Analyst</h2>
        <p>Universidad ORT | 2016<br />
          Interrupted in 2017 due to personal matters.
        </p>
        <h2>PHP Programmer</h2>
        <p>Instituto BIOS | 2011 - 2012</p>
        <h2>Human Resources Analyst</h2>
        <p>Círculo Informático | 2010</p>
        <h2>Graphic Designer</h2>
        <p>Centro en Sistemas Informáticos | 2007</p>
      </Block>

      <Block title="References">
        <References referenceList={referenceList}></References>
      </Block>

      <footer
        style={{
          margin: `2rem auto`,
          textAlign: `center`
        }}
      >
        © {new Date().getFullYear()}, Built with Gatsby and React-pdf
      </footer>
    </>
  )
}

Layout.propTypes = {
  // children: PropTypes.node.isRequired,
}


export default Layout
