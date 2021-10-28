import ToolTip from './ToolTip';

export default {
  component: ToolTip,
  title: 'ToolTip',
};

const Template = (args) => <ToolTip {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
