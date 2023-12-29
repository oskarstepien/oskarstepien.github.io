import { Typography } from '@mui/material';
import { Colours } from '../Theme/Colours';

const Title = () => {
  return (
    <Typography
      style={{
        fontSize: '2.5rem',
        fontFamily: 'Trebuchet MS',
        letterSpacing: '0.3rem',
        wordSpacing: '-0.3rem',
        fontWeight: 'light',
        marginTop: '0.4rem',
        textAlign: 'center',
        textShadow: `0.5px 0.5px ${Colours.backgroundGrey}`,
      }}
    >
      OSKAR STEPIEN
    </Typography>
  );
};

export default Title;
