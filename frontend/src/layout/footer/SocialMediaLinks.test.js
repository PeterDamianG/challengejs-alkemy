import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import SocialMediaLinks from './SocialMediaLinks';

afterAll(cleanup);

describe('/src/layout/SocialMediaLinks.js - <SocialMediaLinks> - Main Component Renders', () => {
  test('Does renders', () => {
    render(<SocialMediaLinks />);
    screen.getByLabelText('LinkedIn');
    screen.getByLabelText('GitHub');
    screen.getByLabelText('Twitter');
    screen.getByLabelText('Facebook');
    screen.getByLabelText('Instagram');
  });
});
