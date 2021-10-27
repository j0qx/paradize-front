import Chart from './Chart';

export default {
  component: Chart,
  title: 'Chart',
};

const Template = (args) => <Chart {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
