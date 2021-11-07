import MyOffers from './MyOffers';

export default {
  component: MyOffers,
  title: 'MyOffers',
};

const Template = (args) => <MyOffers {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
