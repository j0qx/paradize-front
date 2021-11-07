import Pointer from './Pointer';

export default {
  component: Pointer,
  title: 'Pointer',
};

const Template = (args) => <Pointer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
