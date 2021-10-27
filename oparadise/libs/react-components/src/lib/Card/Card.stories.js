import Card from './Card';

export default {
  component: Card,
  title: 'Card',
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
