import React from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import SocialMediaLinks from './SocialMediaLinks';
/**
 * Footer is a component to render a footer in your app.
 * @name Footer
 * @component
 * @category Layout
 * @param {String} [content="Defaul Copyright"] - Text content in footer.
 * @example
 * <Footer />
 * <Footer content="My new text of copyright."/>
 * @returns Return a component of React.
 */
const Footer = ({
  content = `Copyright ${new Date().getFullYear()} Peter DG, Inc. All rights reserved.`,
}) => (
  <Box
    as='footer'
    role='contentinfo'
    width='100%'
    position='fixed'
    bottom='0'
    height='35px'
  >
    <Stack direction='row' spacing='4' align='center' justify='space-between'>
      <SocialMediaLinks />
      <Text
        alignSelf={{
          base: 'center',
          sm: 'start',
        }}
        fontSize='sm'
      >
        {content}
      </Text>
    </Stack>
  </Box>
);

export default Footer;
