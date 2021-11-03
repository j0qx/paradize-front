const getCheckboxs = (keyword, state) => (
  state.find((element) => (element.checkBoxeName === keyword))
);

export default getCheckboxs;
