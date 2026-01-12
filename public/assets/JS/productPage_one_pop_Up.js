//JS for Size Chart POP Up2  But now Pop Up
function openProductDetails(){
  document.querySelector('.productDeatail main').classList.add('productDeatail-main-active');
  document.querySelector('.productPage_one_pop_Up').classList.add('productPage_one_pop_UpShow');
  document.querySelector('.productDeatail').classList.add('bodyOverflow-ActiveNew');
  document.querySelector('.productPage_one_pop_Up').style.display = 'flex';
}

// Open Cancel Confirmation Inside Selling Popup
function confirm4() {
  document.querySelector('.productPage_one_pop_Up #orderCancel').style.display = 'flex';
  document.querySelector('.productDeatail main').classList.add('productDeatail-main-active');
}

document.querySelector('.productPage_one_pop_Up #Yes').addEventListener("click", function () {
  document.querySelector('.productPage_one_pop_Up #orderCancel').style.display = "none";
  document.querySelector('.productPage_one_pop_Up').classList.remove('productPage_one_pop_UpShow');
  document.querySelector('.productPage_one_pop_Up').style.display = "none";
  document.querySelector('.productDeatail').classList.remove('bodyOverflow-ActiveNew');
  document.querySelector('.productDeatail main').classList.remove('productDeatail-main-active');
  expandSarthakAccordion();
});

document.querySelector('.productPage_one_pop_Up #no').addEventListener("click", function(){
  document.querySelector('.productPage_one_pop_Up #orderCancel').style.display = "none";

  // RE-SHOW the popup if it was hidden
  document.querySelector('.productPage_one_pop_Up').classList.add('productPage_one_pop_UpShow');
  document.querySelector('.productPage_one_pop_Up').style.display = 'flex';

  document.querySelector('.productDeatail').classList.add('bodyOverflow-ActiveNew');
  document.querySelector('.productDeatail main').classList.add('productDeatail-main-active');
});

function expandSarthakAccordion() {
  const sarthakBtn = document.getElementById('sarthak-accordion-button');
  if(sarthakBtn) {
    toggleAccordion.call(sarthakBtn);
  }
}


document.querySelector('.buyButton .buyNow').addEventListener('click', function () {
  document.querySelector('.productPage_one_pop_Up').style.display = 'flex';
  setTimeout(() => {
     expandSarthakAccordion();
  }, 10); 
});

//selling Address and payment pop up JS End