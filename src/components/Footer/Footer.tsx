import { Grid, Typography } from '@mui/material';
import { Colours } from '../Theme/Colours';
import SocialIcon from './SocialIcons';
import { RefObject, useState } from 'react';
import NavButton from '../Header/NavButton';

type FooterProps = {
  mobile?: boolean;
  galleryRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  socialsRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
};

const Footer = ({ mobile, galleryRef, aboutRef, socialsRef, contactRef }: FooterProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  if (mobile) {
    return (
      <Grid container width={`100vw - 3px`} style={{ backgroundColor: `${Colours.footerGrey}` }}>
        <div ref={contactRef} />
        <Grid item xs={12}>
          <Grid
            container
            direction="column"
            style={{ alignContent: 'center', alignItems: 'center', marginTop: '0.5rem' }}
          >
            <Grid item>
              <Typography style={{ fontSize: '1.5rem' }}>Oskar Stepien</Typography>
            </Grid>
            <Grid item>
              <Typography style={{ fontSize: '1rem' }}>Model | Actor</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            direction="column"
            style={{ alignContent: 'center', alignItems: 'center', marginTop: '1rem' }}
          >
            <Grid item>
              <Typography style={{ fontSize: '1.5rem' }}>Contact</Typography>
            </Grid>
            <Grid item>
              <Grid container direction="row" gap={2}>
                <SocialIcon social="facebook" />
                <SocialIcon social="instagram" />
                <SocialIcon social="linkedin" />
                <SocialIcon social="email" />
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Typography
                  style={{
                    fontSize: '1.5rem',
                    marginTop: '1rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  Email
                </Typography>
                <a
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="footer"
                  href="mailto:oskar.stepien+portfoliopage@protonmail.com?subject=Portfolio page enquiry"
                  style={{
                    color: Colours.white,
                    textDecoration: isHover ? 'underline' : 'none',
                    opacity: isHover ? '0.8' : '1',
                  }}
                >
                  oskar.stepien@protonmail.com
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container direction="column" style={{ alignContent: 'center', marginTop: '1rem' }}>
            <Grid item>
              <Typography style={{ fontSize: '1.5rem' }}>Site map</Typography>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <NavButton galleryRef={galleryRef}>Work</NavButton>
                <NavButton aboutRef={aboutRef}>About Me</NavButton>
                <NavButton socialsRef={socialsRef}>Socials</NavButton>
                <NavButton contactRef={contactRef}>Contact</NavButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container width={`100vw - 3px`} style={{ backgroundColor: `${Colours.footerGrey}` }}>
      <div ref={contactRef} />
      <Grid item xs={4}>
        <Grid container direction="column" style={{ alignContent: 'center', marginTop: '1rem' }}>
          <Grid item>
            <Typography style={{ fontSize: '2rem' }}>Oskar Stepien</Typography>
          </Grid>
          <Grid item>
            <Typography style={{ fontSize: '1.5rem' }}>Model | Actor</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={4}>
        <Grid
          container
          direction="column"
          style={{ alignContent: 'center', alignItems: 'center', marginTop: '1rem' }}
        >
          <Grid item>
            <Typography style={{ fontSize: '2rem' }}>Contact</Typography>
          </Grid>
          <Grid item>
            <Grid container direction="row" gap={2} height={'40px'}>
              <SocialIcon social="facebook" />
              <SocialIcon social="instagram" />
              <SocialIcon social="linkedin" />
              <SocialIcon social="email" />
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Typography
                style={{
                  fontSize: '1.7rem',
                  marginTop: '1rem',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                Email
              </Typography>
              <a
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="footer"
                href="mailto:oskar.stepien+portfoliopage@protonmail.com?subject=Portfolio page enquiry"
                style={{
                  color: Colours.white,
                  textDecoration: isHover ? 'underline' : 'none',
                  opacity: isHover ? '0.8' : '1',
                }}
              >
                oskar.stepien@protonmail.com
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={4}>
        <Grid container direction="column" style={{ alignContent: 'center', marginTop: '1rem' }}>
          <Grid item>
            <Typography style={{ fontSize: '1.7rem' }}>Site map</Typography>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <NavButton galleryRef={galleryRef}>Work</NavButton>
              <NavButton aboutRef={aboutRef}>About Me</NavButton>
              <NavButton socialsRef={socialsRef}>Socials</NavButton>
              <NavButton contactRef={contactRef}>Contact</NavButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
