import { Box, Button } from '@mui/joy';
import { useState } from 'react';
import { Image, ImageProps } from '../Image';

export interface CarouselProps {
  images: ImageProps[];
}

export function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      <Box
        sx={{
          backgroundColor: 'blue',
          padding: 2,
          position: 'relative',
          width: 300,
          height: 300,
          left: 100,
        }}
      >
        <Box
          sx={{
            backgroundColor: 'yellow',
            padding: 2,
            position: 'absolute',
            width: 300,
            height: 300,
            left: currentIndex * 300,
            transition: 'left 0.5s',
          }}
        >
          {images.map(({ alt, src }: ImageProps, index: number) => (
            <Image
              {...{ src, alt }}
              sx={{
                // backgroundColor: 'red',
                width: 300,
                height: 300,
                position: 'absolute',
                left: 300 * index,
                // left: 300 * currentIndex,
                top: 0,
              }}
            />
          ))}
        </Box>
      </Box>
      <Button onClick={() => setCurrentIndex((prevState) => prevState - 1)}>
        previous
      </Button>
      <Button onClick={() => setCurrentIndex((prevState) => prevState + 1)}>
        next
      </Button>
    </div>
  );
}

export default Carousel;
