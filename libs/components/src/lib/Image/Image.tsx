import { AspectRatio, Box, BoxProps } from '@mui/joy';

export interface ImageProps extends BoxProps {
  alt: string;
  src: string;
}

export function Image({ alt, src, sx }: ImageProps) {
  return (
    // <AspectRatio>
    <Box
      component="img"
      src={src}
      // srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
      sx={sx}
      alt={alt}
      loading="lazy"
    />
    // </AspectRatio>
  );
}

export default Image;
