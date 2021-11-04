const getAllCheckedCheckboxs = (state) => {
  const allCheckedCheckboxs = [];
  state.forEach((element) => {
    if (element.checked) {
      allCheckedCheckboxs.push(element.checkBoxeName);
    }
  });
  return allCheckedCheckboxs;
};

export default getAllCheckedCheckboxs;
