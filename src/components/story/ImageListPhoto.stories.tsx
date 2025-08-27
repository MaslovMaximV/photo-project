import type { Meta, StoryObj } from "@storybook/react";
import { ImageListPhoto } from "../imagelist/ImageListPhoto";

const meta = {
  title: "ImageListPhoto",
  component: ImageListPhoto,
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
} satisfies Meta<typeof ImageListPhoto>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageListPhotoStory: Story = {
  render: ({ ...props }) => {
    return <ImageListPhoto {...props} />;
  },
  args: {
    id: 0,
    img: "img",
    title: "title",
    rows: 0,
    cols: 0,
  },
};
