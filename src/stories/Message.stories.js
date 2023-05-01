import React from "react";
import { Message } from "./Message";

export default {
  title: "Example/Message",
  component: Message,
  argTypes: {
   mode: { control: { type: "select", options: ["success", "error", "warning"] } },
  },
 };
 
 const Template = (args) => <Message {...args} />;
 export const Success = Template.bind({});
 Success.args = {
  mode: "success",
  label: "Action is success!",
 };
 
 export const Error = Template.bind({});
 Error.args = {
  mode: "error",
  label: "Action is failed!",
 };
 
 export const Warning = Template.bind({});
 Warning.args = {
  mode: "warning",
  label: "Beware, you are changing something important!",
 };