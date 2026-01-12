function sellingMultiplePaymentAndAddressPopUp() {
  document.querySelector('.productDeatail main').classList.add('productDeatail-main-active');
  document.querySelector('.sellingMultiplePaymentAndAddressPopUp').classList.add('sellingMultiplePaymentAndAddressPopUpShow');
  document.querySelector('.productDeatail').classList.add('bodyOverflow-ActiveNew');
  document.querySelector('.sellingMultiplePaymentAndAddressPopUp').style.display = 'flex';
}

// Open Cancel Confirmation Inside Selling Popup
function confirm3() {
  document.querySelector('.sellingMultiplePaymentAndAddressPopUp #orderCancel').style.display = 'flex';
  document.querySelector('.productDeatail main').classList.add('productDeatail-main-active');
}

document.querySelector('.sellingMultiplePaymentAndAddressPopUp #Yes').addEventListener("click", function () {
  document.querySelector('.sellingMultiplePaymentAndAddressPopUp #orderCancel').style.display = "none";
  document.querySelector('.sellingMultiplePaymentAndAddressPopUp').classList.remove('sellingMultiplePaymentAndAddressPopUpShow');
  document.querySelector('.sellingMultiplePaymentAndAddressPopUp').style.display = "none";
  document.querySelector('.productDeatail').classList.remove('bodyOverflow-ActiveNew');
  document.querySelector('.productDeatail main').classList.remove('productDeatail-main-active');
  expandSarthakAccordion1();
});

document.querySelector('.sellingMultiplePaymentAndAddressPopUp #no').addEventListener("click", function () {
  document.querySelector('.sellingMultiplePaymentAndAddressPopUp #orderCancel').style.display = "none";

  // RE-SHOW the popup if it was hidden
  document.querySelector('.sellingMultiplePaymentAndAddressPopUp').classList.add('sellingMultiplePaymentAndAddressPopUpShow');
  document.querySelector('.sellingMultiplePaymentAndAddressPopUp').style.display = 'flex';

  document.querySelector('.productDeatail').classList.add('bodyOverflow-ActiveNew');
  document.querySelector('.productDeatail main').classList.add('productDeatail-main-active');
});

function expandSarthakAccordion1() {
  const sarthakBtn1 = document.getElementById('sarthak-accordion-buttonSecond');
  if (sarthakBtn1) {
    toggleAccordion.call(sarthakBtn1);
  }
}

document.querySelector('.selling_muldetails_main .sellingDetailbottom button').addEventListener('click', function() {
  document.querySelector('.sellingMultiplePaymentAndAddressPopUp').style.display = 'flex';
  setTimeout(() => {
    expandSarthakAccordion1();
  }, 10);
});
