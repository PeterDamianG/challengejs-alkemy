import React from 'react';
import { ButtonGroup, IconButton } from '@chakra-ui/react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
/**
 * SocialMedialLinks component to render a icons with more important social medias.
 * @name SocialMediaLinks
 * @component
 * @category Layout
 * @category Internal-Layout
 * @example
 * <SocialMediaLinks />
 * @returns Return a component of React.
 */
const SocialMediaLinks = () => (
  <ButtonGroup variant='ghost' color='gray.600'>
    <IconButton
      as='a'
      href='#'
      aria-label='LinkedIn'
      icon={<FaLinkedin fontSize='20px' />}
    />
    <IconButton
      as='a'
      href='#'
      aria-label='GitHub'
      icon={<FaGithub fontSize='20px' />}
    />
    <IconButton
      as='a'
      href='#'
      aria-label='Twitter'
      icon={<FaTwitter fontSize='20px' />}
    />
    <IconButton
      as='a'
      href='#'
      aria-label='Facebook'
      icon={<FaFacebook fontSize='20px' />}
    />
    <IconButton
      as='a'
      href='#'
      aria-label='Instagram'
      icon={<FaInstagram fontSize='20px' />}
    />
  </ButtonGroup>
);

export default SocialMediaLinks;
