import MapSettings from './MapSettings';

export default {
  component: MapSettings,
  title: 'MapSettings',
};

const Template = (args) => <MapSettings {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
