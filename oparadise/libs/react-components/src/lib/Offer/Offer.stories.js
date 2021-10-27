import Offer from './Offer';

export default {
  component: Offer,
  title: 'Offer',
};

const Template = (args) => <Offer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
