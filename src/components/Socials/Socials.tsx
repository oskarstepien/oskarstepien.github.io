import { RefObject } from 'react';
import { Grid, Typography } from '@mui/material';
import SocialButton from './SocialButton';
import { Colours } from '../Theme/Colours';

type SocialsProps = {
  mobile?: boolean;
  socialsRef?: RefObject<HTMLDivElement>;
};

const Socials = ({ mobile, socialsRef }: SocialsProps) => {
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
          ref={socialsRef}
        >
          SOCIALS
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={2}
          style={{ marginBottom: '2rem' }}
        >
          <SocialButton mobile={mobile} social={'facebook'} />
          <SocialButton mobile={mobile} social={'instagram'} />
          <SocialButton mobile={mobile} social={'linkedin'} />
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
        ref={socialsRef}
      >
        SOCIALS
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ marginBottom: '2rem' }}
      >
        <SocialButton social={'facebook'} />
        <SocialButton social={'instagram'} />
        <SocialButton social={'linkedin'} />
      </Grid>
    </>
  );
};

export default Socials;
