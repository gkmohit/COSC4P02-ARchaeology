import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Click me",
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Click me",
};

export const Large = Template.bind({});
Large.args = {
  children: "Click me",
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  children: "Click me",
  size: "small",
};
