const MobilemenuModal = (function() {

    const mobilemenumodal = document.getElementById("mobile-menu");
    const closemobilemenuButton = document.getElementById("mobile-menu-close-button");

    function close() {
        mobilemenumodal.style.display = "none";
    }

    return {
          open: function() {
            mobilemenumodal.style.display = "block";
        },

        init: function() {
            const showmobilemenumodalButton = document.getElementById("mobile-menu-icon-container");
            showmobilemenumodalButton.addEventListener("click", () => {
                this.open();
            });

            closemobilemenuButton.addEventListener("click", () => {
                close();
            });

            mobilemenumodal.addEventListener("click", (event) => {
                if (event.target.tagName === "BUTTON") {
                    close();
                }
                if (event.target.tagName === "A") {
                    close();
                }
            });

            window.addEventListener("click", (event) => {
                if (event.target === mobilemenumodal) {
                    close();
                }
            });
        }
    };
})();

MobilemenuModal.init();




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


function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    document.body.classList.add(`modal-open-${modalId}`);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
    document.body.classList.remove(`modal-open-${modalId}`); 
}


document.getElementById("buy-now-form-open").addEventListener("click", () => {
    openModal("buy-form");
});

document.getElementById("buy-now-form-open1").addEventListener("click", () => {
    openModal("buy-form");
});

document.getElementById("leave-review-button").addEventListener("click", () => {
    openModal("leave-review-form");
});

document.getElementById("subscribe-form-open-button").addEventListener("click", () => {
    openModal("subscribe-form");
});

document.getElementById("buy-now-form-close-button").addEventListener("click", () => {
    closeModal("buy-form");
});

document.getElementById("leave-review-form-close-button").addEventListener("click", () => {
    closeModal("leave-review-form");
});

document.getElementById("subscribe-form-close-button").addEventListener("click", () => {
    closeModal("subscribe-form");
});


window.addEventListener("click", (event) => {
    if (event.target === document.getElementById("buy-form")) {
        closeModal("buy-form");
    } else if (event.target === document.getElementById("leave-review-form")) {
        closeModal("leave-review-form");
    } else if (event.target === document.getElementById("subscribe-form")) {
        closeModal("subscribe-form");
    }
});


window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal("buy-form");
        closeModal("leave-review-form");
        closeModal("subscribe-form");
    }
});

const slider = document.querySelector('.products-list-slide-container .products-list');
const prevBtn = document.getElementById('slide-left');
const nextBtn = document.getElementById('slide-right');
const sliderItems = slider.querySelectorAll('li');
let currentIndex = 0;

function updateSlider() {
    const itemWidth = sliderItems[0].offsetWidth;
    slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    updateSlider();
});

updateSlider();

const slider2 = document.querySelector('.employee-scroll-list .employees-list');
const prevBtn2 = document.getElementById('slide-left-employee');
const nextBtn2 = document.getElementById('slide-right-employee');
const sliderItems2 = slider2.querySelectorAll('li');
let currentIndex2 = 0;

function updateSlider2() {
    const itemWidth = sliderItems2[0].offsetWidth;
    slider2.style.transform = `translateX(-${currentIndex2 * itemWidth}px)`;
}

prevBtn2.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 - 1 + sliderItems2.length) % sliderItems2.length;
    updateSlider2();
});

nextBtn2.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 + 1) % sliderItems2.length;
    updateSlider2();
})



