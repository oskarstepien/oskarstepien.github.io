import { RefObject, useCallback, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Colours } from '../Theme/Colours';
import PhotoAlbum, { RenderPhotoProps } from 'react-photo-album';
import ImageViewer from 'react-simple-image-viewer';
import image2 from '../../assets/oskar-2.jpg';
import image3 from '../../assets/oskar-3.jpg';
import image4 from '../../assets/oskar-4.jpg';
import image5 from '../../assets/oskar-5.jpg';
import image6 from '../../assets/oskar-6.jpg';
import image7 from '../../assets/oskar-7.jpg';

const photos = [
  { src: image2, width: 1366, height: 2048 },
  { src: image3, width: 1366, height: 2048 },
  { src: image4, width: 1366, height: 2048 },
  { src: image5, width: 1366, height: 2048 },
  { src: image6, width: 2048, height: 1366 },
  { src: image7, width: 748, height: 748 },
  { src: image2, width: 1366, height: 2048 },
  { src: image3, width: 1366, height: 2048 },
  { src: image4, width: 1366, height: 2048 },
  { src: image5, width: 1366, height: 2048 },
  { src: image6, width: 2048, height: 1366 },
  { src: image7, width: 748, height: 748 },
];

const images = [
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
];

type GalleryProps = {
  galleryRef?: RefObject<HTMLDivElement>;
};

const Gallery = ({ galleryRef }: GalleryProps) => {
  const [pictureIndex, setPictureIndex] = useState<number>(-1);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  useEffect(() => {
    console.log('picture index', pictureIndex);
  }, [pictureIndex]);

  const openImageViewer = useCallback((index: number) => {
    setPictureIndex(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setPictureIndex(-1);
    setIsViewerOpen(false);
  };

  const renderPhoto = useCallback(
    ({ imageProps: { alt, style, ...rest } }: RenderPhotoProps) => (
      <img
        alt={alt}
        style={{
          ...style,
          boxShadow:
            '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        }}
        {...rest}
      />
    ),
    [],
  );

  return (
    <Box sx={{ width: `90%`, mx: 'auto', overflowX: 'hidden' }}>
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
        ref={galleryRef}
      >
        WORK
      </Typography>
      <PhotoAlbum
        layout="columns"
        photos={photos}
        renderPhoto={renderPhoto}
        onClick={({ index }) => openImageViewer(index)}
      />
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={pictureIndex}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
          backgroundStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
        />
      )}
    </Box>
  );
};

export default Gallery;
