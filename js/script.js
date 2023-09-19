
const checkbox1 = document.getElementById('employeebutton');
const first_list = document.getElementById('employee-first-list');
const second_list = document.getElementById('employee-second-list');
const selectleft = document.getElementById('select-left');
const selectright = document.getElementById('select-right');

const checkbox2 = document.getElementById('productsbutton');
const first_list_products = document.getElementById('products-list');
const second_list_products = document.getElementById('products-list-part-two');
const selectleft_products = document.getElementById('select-left-products');
const selectright_products = document.getElementById('select-right-products');


checkbox2.addEventListener('change', function () {
  if (checkbox2.checked) {
      first_list_products.style.transform = 'translate(0, 0)';
      second_list_products.style.transform = 'translate(0, 0)';
      selectright_products.style.opacity = '0';
      selectleft_products.style.opacity = '1';
  } else {
      first_list_products.style.transform = 'translatex(-100%)';
      second_list_products.style.transform = 'translatex(-100%)';
      selectright_products.style.opacity = '1';
      selectleft_products.style.opacity = '0';
  }
});

checkbox1.addEventListener('change', function () {
  if (checkbox1.checked) {
      first_list.style.transform = 'translate(0, 0)';
      second_list.style.transform = 'translate(0, 0)';
      selectright.style.opacity = '0';
      selectleft.style.opacity = '1';
  } else {
      first_list.style.transform = 'translatex(-100%)';
      second_list.style.transform = 'translatex(-100%)';
      selectright.style.opacity = '1';
      selectleft.style.opacity = '0';
  }
});

document.addEventListener("DOMContentLoaded", function () {
    const weightinput = document.getElementById("weightinput");
    const validationMessage = document.getElementById("validationMessage");

    weightinput.addEventListener("input", function () {
        const inputValue = parseFloat(weightinput.value);

        if (inputValue < 100) {
            validationMessage.textContent = "Недоступне значення";
        } else if (inputValue > 10000) {
            validationMessage.textContent = "Недоступне значення";
        } else {
            validationMessage.textContent = "";
        }
    });
});
