import React from 'react';
import Slider from '../components/Slider';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Slider',
  component: Slider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Slider {...args} />;

export const SliderInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Slider.args = {
  max:100,
  min:0,
  onChange:(value)=>console.log(`value`, value),
  step:5,
  defaultValue:[10],
  color1:'#000',
  color2:'grey'
};



