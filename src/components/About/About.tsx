import { RefObject } from 'react';
import { Grid, Typography } from '@mui/material';
import { Colours } from '../Theme/Colours';
import TextSection from './TextSection';

import image1 from '../../assets/oskar-1.jpg';
import image2 from '../../assets/oskar-2.jpg';
import image3 from '../../assets/oskar-3.jpg';

type AboutProps = {
  mobile?: boolean;
  aboutRef?: RefObject<HTMLDivElement>;
};

const About = ({ mobile, aboutRef }: AboutProps) => {
  if (mobile) {
    return (
      <>
        <Typography
          style={{
            fontSize: '2.5rem',
            fontFamily: 'Trebuchet MS',
            letterSpacing: '0.3rem',
            wordSpacing: '-0.3rem',
            fontWeight: 'light',
            marginTop: '1rem',
            marginBottom: '1rem',
            textAlign: 'center',
            textShadow: `0.5px 0.5px ${Colours.backgroundGrey}`,
          }}
          ref={aboutRef}
        >
          ABOUT ME
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          style={{ marginBottom: '2rem' }}
        >
          <Grid item xs={6} style={{ display: 'flex', marginRight: '1rem' }}>
            <Grid container style={{ overflowX: 'hidden', justifyContent: 'center' }}>
              <img src={image1} height={'400px'} style={{ marginRight: '2rem' }} />
              <img src={image2} height={'400px'} style={{ marginRight: '2rem' }} />
              <img src={image3} height={'400px'} style={{ marginRight: '2rem' }} />
            </Grid>
          </Grid>
          <Grid item xs={5} style={{ display: 'flex' }}>
            <TextSection />
          </Grid>
        </Grid>
      </>
    );
  }

  return (
    <>
      <Typography
        style={{
          fontSize: '2.5rem',
          fontFamily: 'Trebuchet MS',
          letterSpacing: '0.3rem',
          wordSpacing: '-0.3rem',
          fontWeight: 'light',
          marginTop: '1rem',
          marginBottom: '1rem',
          textAlign: 'center',
          textShadow: `0.5px 0.5px ${Colours.backgroundGrey}`,
        }}
        ref={aboutRef}
      >
        ABOUT ME
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={6}
        style={{ marginBottom: '2rem' }}
      >
        <Grid item xs={5} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <img src={image1} height={'600px'} style={{ marginRight: '2rem' }} />
        </Grid>
        <Grid item xs={5} style={{ display: 'flex', textAlign: 'left', width: '2rem' }}>
          <TextSection />
        </Grid>
      </Grid>
    </>
  );
};

export default About;
