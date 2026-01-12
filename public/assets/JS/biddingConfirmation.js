//Bidding Confirmation Pop up JS Starts Here
function biddingConfirmationPop() {
  document.querySelector('.productDeatail main').classList.add('productDeatail-main-active');
  document.querySelector('.biddingConfirmationPopUp').classList.add('biddingConfirmationPopShow');
  document.querySelector('.productDeatail').classList.add('bodyOverflow-ActiveNew');
  document.querySelector('.biddingConfirmationPopUp').style.display = 'flex';
}

// Open Cancel Confirmation Inside Selling Popup
function confirm() {
  document.querySelector('.biddingConfirmationPopUp #orderCancel').style.display = 'flex';
  document.querySelector('.productDeatail main').classList.add('productDeatail-main-active');
}

document.querySelector('.biddingConfirmationPopUp #Yes').addEventListener("click", function () {
  document.querySelector('.biddingConfirmationPopUp #orderCancel').style.display = "none";
  document.querySelector('.biddingConfirmationPopUp').classList.remove('biddingConfirmationPopShow');
  document.querySelector('.biddingConfirmationPopUp').style.display = "none";
  document.querySelector('.productDeatail').classList.remove('bodyOverflow-ActiveNew');
  document.querySelector('.productDeatail main').classList.remove('productDeatail-main-active');
  expandSarthakAccordion3();
});

document.querySelector('.biddingConfirmationPopUp #no').addEventListener("click", function () {
  document.querySelector('.biddingConfirmationPopUp #orderCancel').style.display = "none";

  // RE-SHOW the popup if it was hidden
  document.querySelector('.biddingConfirmationPopUp').classList.add('biddingConfirmationPopShow');
  document.querySelector('.biddingConfirmationPopUp').style.display = 'flex';

  document.querySelector('.productDeatail').classList.add('bodyOverflow-ActiveNew');
  document.querySelector('.productDeatail main').classList.add('productDeatail-main-active');
});

function expandSarthakAccordion3() {
  const sarthakBtn = document.getElementById('sarthak-accordion-buttonThree');
  if (sarthakBtn) {
    toggleAccordion.call(sarthakBtn);
  }
}

document.querySelector('.bidButtonNew .placeBid').addEventListener('click', function () {
  document.querySelector('.biddingConfirmationPopUp').style.display = 'flex';
  setTimeout(() => {
    expandSarthakAccordion3();
  }, 10);
});

//selling Address and payment pop up JS End