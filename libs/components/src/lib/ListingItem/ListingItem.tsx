import { Link, Sheet, SheetProps, Stack, Typography } from '@mui/joy';
import { Image, ImageProps } from '../Image';

export interface ListingItemProps extends SheetProps {
  image: ImageProps | ImageProps[];
  title: string;
  description?: string;
  startDecorator?: React.ReactNode;
  endDecorator?: React.ReactNode;
}

export function ListingItem({
  description,
  image,
  title,
  variant,
  startDecorator,
  endDecorator,
}: ListingItemProps) {
  return (
    <Sheet {...{ variant }}>
      {Array.isArray(image) ? (
        image.map(({ alt, src }: ImageProps) => <Image {...{ src, alt }} />)
      ) : (
        <Image src={image.src} alt={image.alt} />
      )}
      <Stack direction="row" spacing={1}>
        {startDecorator && startDecorator}
        <div>
          <Typography level="body1">
            <Link href="#click" overlay underline="none">
              {title}
            </Link>
          </Typography>
          {description && <Typography level="body2">{description}</Typography>}
        </div>
        {endDecorator && endDecorator}
      </Stack>
    </Sheet>
  );
}

export default ListingItem;
