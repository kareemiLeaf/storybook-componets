import React from 'react';
import { Button } from '../components/Button';
import ImageComponent from '../components/ImageComponent';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ImageComponent',
  component: ImageComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ImageComponent {...args} />;

export const Image = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Image.args = {
    height: '200px',
    width: '200px',
    src: 'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ',
    objectFit: 'cover',
    alt: 'laptop',
};


