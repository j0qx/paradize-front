import Modal from './Modal';

export default {
  component: Modal,
  title: 'Modal',
};

const Template = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
