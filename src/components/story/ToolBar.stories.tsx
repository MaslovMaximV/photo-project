import type { Meta, StoryObj } from "@storybook/react";
import { ToolBar } from "../toolbar/ToolBar";

const meta = {
  title: "ToolBar",
  component: ToolBar,
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
} satisfies Meta<typeof ToolBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToolBarStory: Story = {
  render: ({ ...props }) => {
    return <ToolBar {...props} />;
  },
  args: {},
};
