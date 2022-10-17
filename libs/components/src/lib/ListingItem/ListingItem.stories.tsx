import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListingItem } from './ListingItem';

export default {
  title: 'ListingItem',
  component: ListingItem,
} as ComponentMeta<typeof ListingItem>;

export const Primary: ComponentStory<typeof ListingItem> = () => (
  <ListingItem
    title="cool"
    description="something"
    image={{
      src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800',
      alt: 'cool',
    }}
  />
);

// export const Secondary: ComponentStory<typeof Button> = () => (
//   <Button backgroundColor="#ff0" label="😄👍😍💯" />
// );

// export const Tertiary: ComponentStory<typeof Button> = () => (
//   <Button backgroundColor="#ff0" label="📚📕📈🤓" />
// );
