import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Carousel } from './Carousel';

export default {
  title: 'Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = ({ ...args }) => (
  <div style={{ width: 300 }}>
    <Carousel {...args} />
  </div>
);

export const Array = Template.bind({});
Array.args = {
  images: [
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
