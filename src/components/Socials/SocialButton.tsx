import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CompareIcon from '@mui/icons-material/Compare';
import { useState } from 'react';
import { Colours } from '../Theme/Colours';
import { Typography } from '@mui/material';
import './Socials.css';

type SocialButtonProps = {
  social: string;
  mobile?: boolean;
};

const SocialButton = ({ social, mobile }: SocialButtonProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const textSwitch = () => {
    switch (social) {
      case 'facebook':
        return 'Facebook';
      case 'instagram':
        return 'Instagram';
      case 'linkedin':
        return 'Linked In';
      default:
        return Colours.facebook;
    }
  };

  const backgroundColourSwitch = () => {
    switch (social) {
      case 'facebook':
        return Colours.facebook;
      case 'linkedin':
        return Colours.linkedin;
      default:
        return Colours.facebook;
    }
  };

  const iconSwitch = () => {
    switch (social) {
      case 'facebook':
        return <FacebookIcon fontSize="medium" />;
      case 'instagram':
        return <InstagramIcon fontSize="medium" />;
      case 'linkedin':
        return <LinkedInIcon fontSize="medium" />;
      default:
        return <CompareIcon />;
    }
  };

  const redirectSwitch = () => {
    switch (social) {
      case 'facebook':
        return window.open(
          'https://www.facebook.com/lostinreality248',
          '_blank',
          'noopener, noreferrer',
        );
      case 'instagram':
        return window.open(
          'https://www.instagram.com/lostinreality248',
          '_blank',
          'noopener, noreferrer',
        );
      case 'linkedin':
        return window.open(
          'https://www.linkedin.com/in/oskarstepien/',
          '_blank',
          'noopener, noreferrer',
        );
      default:
        return window.open('https://google.com', '_blank', 'noopener, noreferrer');
    }
  };

  return (
    <div
      className={social === 'instagram' ? 'instagram tilt' : 'tilt'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: mobile ? '10rem' : '15rem',
        height: mobile ? '10rem' : '15rem',
        backgroundColor: `${backgroundColourSwitch()}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: mobile ? '0.5rem' : '3rem',
        marginRight: mobile ? '0.5rem' : '3rem',
        opacity: isHover ? '0.8' : '1',
      }}
      onClick={() => {
        redirectSwitch();
      }}
    >
      {iconSwitch()}
      <Typography style={{ fontSize: '1.2rem', marginLeft: '0.5rem' }}>{textSwitch()}</Typography>
    </div>
  );
};

export default SocialButton;
