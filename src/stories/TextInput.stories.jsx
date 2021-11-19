import React from 'react';
import TextInput from '../components/TextInput';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/TextInput',
  component: TextInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TextInput {...args} />;

export const Input = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Input.args = {
    placeholder: "Input placeholder",
    label: "label",
};

export const InputWithError = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputWithError.args = {
    placeholder: "Input placeholder",
    label: "label",
    error:"This field is mandatory!",
    border:'1px solid red'
};

export const TextArea = Template.bind({});
TextArea.args = {
    placeholder: "Input text area",
    label: "Text Area",
    height:'50px',
    textArea:true
};


