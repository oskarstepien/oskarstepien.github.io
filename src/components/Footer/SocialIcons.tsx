import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CompareIcon from '@mui/icons-material/Compare';
import { Colours } from '../Theme/Colours';

type SocialIconProps = {
  social: string;
};

const SocialIcon = ({ social }: SocialIconProps) => {
  const iconSwitch = () => {
    switch (social) {
      case 'facebook':
        return (
          <FacebookIcon
            fontSize="large"
            sx={{
              '&:hover': {
                opacity: '0.8',
                borderBottom: `1px solid ${Colours.opaqueGrey}`,
              },
            }}
          />
        );
      case 'instagram':
        return (
          <InstagramIcon
            fontSize="large"
            sx={{
              '&:hover': {
                opacity: '0.8',
                borderBottom: `1px solid ${Colours.opaqueGrey}`,
              },
            }}
          />
        );
      case 'linkedin':
        return (
          <LinkedInIcon
            fontSize="large"
            sx={{
              '&:hover': {
                opacity: '0.8',
                borderBottom: `1px solid ${Colours.opaqueGrey}`,
              },
            }}
          />
        );
      case 'email':
        return (
          <MailOutlineIcon
            fontSize="large"
            sx={{
              '&:hover': {
                opacity: '0.8',
                borderBottom: `1px solid ${Colours.opaqueGrey}`,
              },
            }}
          />
        );
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
      case 'email':
        return;
      default:
        return window.open('https://google.com', '_blank', 'noopener, noreferrer');
    }
  };

  if (social === 'email') {
    return (
      <a
        href="mailto:oskar.stepien+portfoliopage@protonmail.com?subject=Portfolio page enquiry"
        style={{ color: Colours.white }}
      >
        {iconSwitch()}
      </a>
    );
  }

  return (
    <div
      onClick={() => {
        redirectSwitch();
      }}
    >
      {iconSwitch()}
    </div>
  );
};

export default SocialIcon;
