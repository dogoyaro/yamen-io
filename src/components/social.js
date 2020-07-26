import React from 'react';
import { Link } from 'gatsby';

import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from "styled-components"

const SocialIcon = styled(FaIcon)`
  margin: 15px;
  color: #D3D7CF;
`;

const SocialIconLink = styled(Link)`
  text-decoration: none;
  &:hover ${SocialIcon} {
    color: #2e3436;
  }
`;


const Social = () => {
    return (
      <h2>
        <SocialIconLink href='/'>
          <SocialIcon icon={faGithub} />
        </SocialIconLink>
        <SocialIconLink href='/'>
          <SocialIcon icon={faLinkedin} />
        </SocialIconLink>
        <SocialIconLink href='/'>
          <SocialIcon icon={faTwitter} />
        </SocialIconLink>
      </h2>
    )
}

export default Social;
