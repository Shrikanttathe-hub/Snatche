//selling Details Add and payment pop up JS Start

function openSellingAndPayment() {
  document.querySelector('.productDeatail main').classList.add('productDeatail-main-active');
  document.querySelector('.sellingAddAndPayment').classList.add('sellingAddAndPaymentShow');
  document.querySelector('.productDeatail').classList.add('bodyOverflow-ActiveNew');
  document.querySelector('.sellingAddAndPayment').style.display = 'flex';
}

// Open Cancel Confirmation Inside Selling Popup
function confirm1() {
  document.querySelector('.sellingAddAndPayment #orderCancel').style.display = 'flex';
  document.querySelector('.productDeatail main').classList.add('productDeatail-main-active');
}

document.querySelector('.sellingAddAndPayment #Yes').addEventListener("click", function () {
  document.querySelector('.sellingAddAndPayment #orderCancel').style.display = "none";
  document.querySelector('.sellingAddAndPayment').classList.remove('sellingAddAndPaymentShow');
  document.querySelector('.sellingAddAndPayment').style.display = "none";
  document.querySelector('.productDeatail').classList.remove('bodyOverflow-ActiveNew');
  document.querySelector('.productDeatail main').classList.remove('productDeatail-main-active');
  expandSarthakAccordionFirst();
});

document.querySelector('.sellingAddAndPayment #no').addEventListener("click", function () {
  document.querySelector('.sellingAddAndPayment #orderCancel').style.display = "none";

  // RE-SHOW the popup if it was hidden
  document.querySelector('.sellingAddAndPayment').classList.add('sellingAddAndPaymentShow');
  document.querySelector('.sellingAddAndPayment').style.display = 'flex';

  document.querySelector('.productDeatail').classList.add('bodyOverflow-ActiveNew');
  document.querySelector('.productDeatail main').classList.add('productDeatail-main-active');
});

const items = document.querySelectorAll('.accordion button');
items.forEach((item) => item.addEventListener('click', toggleAccordion));
function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  items.forEach((item) => {
    item.setAttribute('aria-expanded', 'false');
    item.closest('.accordion-item').classList.remove('sellFunctionPopUpactive');
    item.querySelector('.accordion-buttonRight img').style.transform = 'rotate(0deg)';
    item.querySelector('.accordion-buttonRight p').textContent = 'Expand';
    item.querySelector('.accordion-buttonLeft h3').style.display = 'block';
    item.querySelector('.accordion-buttonLeft p').style.display = 'none';
  });
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
    this.closest('.accordion-item').classList.add('sellFunctionPopUpactive');
    this.querySelector('.accordion-buttonRight img').style.transform = 'rotate(180deg)';
    this.querySelector('.accordion-buttonRight p').textContent = 'Collapse';
    this.querySelector('.accordion-buttonLeft h3').style.display = 'none';
    this.querySelector('.accordion-buttonLeft p').style.display = 'block';
  }
};

function expandSarthakAccordionFirst() {
  const sarthakBtn = document.getElementById('sarthak-accordion-buttonOne');
  if(sarthakBtn) {
    toggleAccordion.call(sarthakBtn);
  }
}

document.querySelector('.sellingDetails .sellingDetailbottom button').addEventListener('click', function () {
  document.querySelector('.sellingAddAndPayment').style.display = 'flex';
  setTimeout(() => {
     expandSarthakAccordionFirst();
  }, 100); 
});

//selling Address and payment pop up JS End