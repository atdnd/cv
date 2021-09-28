import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import StyledHeader from "./styled/header"
import { StyledTitle, StyledSubtitle } from "./styled/title"
import Typewriter from 'typewriter-effect';

const titleText = "Hi, I'm Andres";

const Header = ({ siteTitle, siteDescription, isPrint }) => (
  <StyledHeader isPrint>
    <div>
      {!isPrint &&
        <>
          <StyledTitle>
            <Typewriter options={{ strings: [titleText], loop: true, autoStart: true }} />
          </StyledTitle>
          <StyledSubtitle>{siteDescription}</StyledSubtitle>
        </>
      }
      {isPrint &&
        <>
          <h1>Andres Techera / CV</h1>
          <h2>{siteDescription}</h2>
        </>
      }
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
