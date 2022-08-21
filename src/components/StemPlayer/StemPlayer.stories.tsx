import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import StemPlayer from "./StemPlayer"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/StemPlayer",
  component: StemPlayer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof StemPlayer>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StemPlayer> = (args) => (
  <StemPlayer {...args} />
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  ear: "cheek",
}
