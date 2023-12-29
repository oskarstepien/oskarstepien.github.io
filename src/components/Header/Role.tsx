import { Typography } from '@mui/material';
import { Colours } from '../Theme/Colours';

const Title = () => {
  return (
    <Typography
      style={{
        fontSize: '1.5rem',
        fontFamily: 'Arial',
        letterSpacing: '0.4rem',
        wordSpacing: '-0.4rem',
        fontWeight: 'light',
        marginTop: '0.4rem',
        textAlign: 'center',
        textShadow: `0.5px 0.5px ${Colours.backgroundGrey}`,
      }}
    >
      MODEL | ACTOR
    </Typography>
  );
};

export default Title;
