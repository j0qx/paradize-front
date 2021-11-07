import TabNavBar from './TabNavBar';

export default {
  component: TabNavBar,
  title: 'TabNavBar',
};

const Template = (args) => <TabNavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
