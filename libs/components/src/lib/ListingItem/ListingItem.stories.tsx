import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListingItem } from './ListingItem';

export default {
  title: 'ListingItem',
  component: ListingItem,
} as ComponentMeta<typeof ListingItem>;

const Template: ComponentStory<typeof ListingItem> = ({ ...args }) => (
  <div style={{ width: 300 }}>
    <ListingItem {...args} />
  </div>
);

export const Single = Template.bind({});
Single.args = {
  title: 'cool',
  description: 'something',
  image: {
    src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800',
    alt: 'cool',
  },
  startDecorator: <div>cool</div>,
};

export const Array = Template.bind({});
Array.args = {
  title: 'cool',
  description: 'something',
  image: [
    {
      src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800',
      alt: 'cool',
    },
    {
      src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800',
      alt: 'cool',
    },
    {
      src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800',
      alt: 'cool',
    },
  ],
};
