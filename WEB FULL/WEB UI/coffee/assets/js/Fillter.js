document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  const logSelectedValues = () => {
    const selectedCategories = [];
    const selectedSizes = [];
    const selectedPrices = [];

    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        if (checkbox.name === 'category') {
          selectedCategories.push(checkbox.value);
        } else if (checkbox.name === 'size') {
          selectedSizes.push(checkbox.value);
        } else if (checkbox.name === 'price') {
          selectedPrices.push(checkbox.value);
        }
      }
    });

    console.log('Selected Categories:', selectedCategories);
    console.log('Selected Sizes:', selectedSizes);
    console.log('Selected Prices:', selectedPrices);
  };

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', logSelectedValues);
  });

  logSelectedValues();
});
  