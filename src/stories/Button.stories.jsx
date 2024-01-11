import React from 'react';
import Button from '../components/styled/Button';

const story = {
  title: 'Button',
  component: Button,
};

export default story;

function TemplateStory(args) {
  return <Button {...args} />;
}

const ButtonSuccess = TemplateStory.bind({});
ButtonSuccess.args = {
  children: 'Success',
  variant: 'success',
};

const ButtonDark = TemplateStory.bind({});
ButtonDark.args = {
  children: 'Dark',
  variant: 'dark',
};

const ButtonDanger = TemplateStory.bind({});
ButtonDanger.args = {
  children: 'Danger',
  variant: 'danger',
};

const ButtonWarning = TemplateStory.bind({});
ButtonWarning.args = {
  children: 'Warning',
  variant: 'warning',
};

export { ButtonSuccess, ButtonDark, ButtonDanger, ButtonWarning };
