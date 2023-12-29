import { RefObject } from 'react';
import { Divider, Grid } from '@mui/material';
import Title from './Title';
import NavButtons from './NavButtons';
import Role from './Role';
import BackgroundWrapper from './BackgroundWrapper';
import { Colours } from '../Theme/Colours';

type HeaderProps = {
  mobile: boolean;
  galleryRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  socialsRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
};

const Header = ({ mobile, galleryRef, aboutRef, socialsRef, contactRef }: HeaderProps) => {
  if (mobile) {
    return (
      <BackgroundWrapper>
        <Grid container direction="column" alignContent="center" style={{ paddingTop: '120px' }}>
          <Grid item>
            <Title />
          </Grid>

          <Grid item>
            <Role />
          </Grid>

          <Grid item>
            <NavButtons
              galleryRef={galleryRef}
              aboutRef={aboutRef}
              socialsRef={socialsRef}
              contactRef={contactRef}
            />
          </Grid>
        </Grid>
      </BackgroundWrapper>
    );
  }

  return (
    <>
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
          <Title />
        </Grid>

        <Grid item>
          <Role />
        </Grid>

        <Grid item>
          <NavButtons
            galleryRef={galleryRef}
            aboutRef={aboutRef}
            socialsRef={socialsRef}
            contactRef={contactRef}
          />
        </Grid>
      </Grid>
      <Divider
        style={{
          backgroundColor: `${Colours.grey}`,
          marginTop: '1.5rem',
          width: '80%',
          margin: 'auto',
        }}
      />
    </>
  );
};

export default Header;
