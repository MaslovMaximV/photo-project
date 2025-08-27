import type { Meta, StoryObj } from "@storybook/react";
import { Content } from "../content/Content";

const meta = {
  title: "Content",
  component: Content,
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
} satisfies Meta<typeof Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContentStory: Story = {
  render: ({ ...props }) => {
    return <Content {...props} />;
  },
  args: {},
};
