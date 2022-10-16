import { AspectRatio, Link, Sheet, SheetProps, Typography } from '@mui/joy';

export interface ImageProps {
  src: string;
  alt: string;
}

export interface ListingItemProps extends SheetProps {
  // image: ImageProps | ImageProps[];
  image: ImageProps;
  title: string;

  description?: string;
}

export function ListingItem({
  description,
  image,
  title,
  variant,
}: ListingItemProps) {
  return (
    <Sheet {...{ variant }}>
      <AspectRatio>
        <img
          src={image.src}
          // srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
          alt={image.alt}
          loading="lazy"
        />
      </AspectRatio>
      <Typography level="body1">
        <Link href="#click" overlay underline="none">
          {title}
        </Link>
      </Typography>
      {description && <Typography level="body2">{description}</Typography>}
    </Sheet>
  );
}

export default ListingItem;
