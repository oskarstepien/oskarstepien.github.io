import image1 from '../../assets/oskar-1.jpg';

type BackgroundWrapperProps = {
  children: JSX.Element;
};

const backgroundStyle = {
  backgroundImage: `url(${image1})`,
  height: '400px',
  width: '100vw',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
  return <div style={backgroundStyle}>{children}</div>;
};

export default BackgroundWrapper;
