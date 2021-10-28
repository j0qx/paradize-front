import Map from './Map';

export default {
  component: Map,
  title: 'Map',
};

const Template = (args) => <Map {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
