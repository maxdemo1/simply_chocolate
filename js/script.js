
const checkbox1 = document.getElementById('employeebutton');
const first_list = document.getElementById('employee-first-list');
const second_list = document.getElementById('employee-second-list');
const selectleft = document.getElementById('select-left');
const selectright = document.getElementById('select-right');


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
