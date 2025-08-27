import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button/Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
  args: {},
  decorators: [
    (Story) => {
      return Story();
    },
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {
  render: ({ ...props }) => {
    return <Button {...props} />;
  },
  args: {
    text: "text",
  },
};
