import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Image } from './Image';

export default {
  title: 'Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = ({ ...args }) => (
  <div style={{ width: 300 }}>
    <Image {...args} />
  </div>
);

export const Single = Template.bind({});
Single.args = {
  src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800',
  alt: 'cool',
};
