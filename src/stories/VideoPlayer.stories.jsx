import React from 'react';
import VideoPlayer from '../components/VideoPlayer';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/VideoPlayer',
  component: VideoPlayer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <VideoPlayer {...args} />;

export const Video = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Video.args = {
    url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
  playing:false,
  loop:true,
  controls:true,
  muted:true,
  width:'100%',
  height:'300px'
};



