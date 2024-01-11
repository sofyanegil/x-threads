import React from 'react';
import Title from '../components/styled/Title';

const story = {
  title: 'Title',
  component: Title,
};

export default story;

function TemplateStory(args) {
  return <Title {...args} />;
}

const TitleLarge = TemplateStory.bind({});
TitleLarge.args = {
  variant: 'title',
  children: 'This is Title',
};

const SubTitle = TemplateStory.bind({});
SubTitle.args = {
  children: 'This is Subtitle',
  variant: 'subtitle',
};

const SubSubTitle = TemplateStory.bind({});
SubSubTitle.args = {
  children: 'This is SubSubtitle',
  variant: 'subsubtitle',
};

export { TitleLarge, SubTitle, SubSubTitle };
