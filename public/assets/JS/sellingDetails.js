// Sellfunction selling Details pop up JS start
function openSellingDetailsPopUp() {
  document.querySelector('.productDeatail main').classList.add('productDeatail-main-active');
  document.querySelector('.sellingDetailsPopUp').classList.add('sellingDetailsPopUpShow');
  document.querySelector('.productDeatail').classList.add('bodyOverflow-ActiveNew');
  document.querySelector('.sellingDetailsPopUp').style.display = 'flex';
  document.getElementById('sellNow_tab').checked = true;
}

// cancel confirmation      
function confirmNew(){
  document.querySelector('.sellingDetailsPopUp #orderCancel').style.display = 'flex';
  document.querySelector('.productDeatail main').classList.add('productDeatail-main-active');
}

document.querySelector('.sellingDetailsPopUp #Yes').addEventListener("click", function(){
    document.querySelector('.sellingDetailsPopUp #orderCancel').style.display = "none";
    document.querySelector('.sellingDetailsPopUp').classList.remove('sellingDetailsPopUpShow');
    document.querySelector('.sellingDetailsPopUp').style.display = "none"; 
    // document.querySelector('.productDeatail').classList.remove('bodyOverflow-ActiveNew');
    // document.querySelector('.productDeatail main').classList.remove('productDeatail-main-active');
});

document.querySelector('.sellingDetailsPopUp #no').addEventListener("click", function() {
    document.querySelector('.sellingDetailsPopUp #orderCancel').style.display = "none";

    // RE-SHOW the popup if it was hidden
    document.querySelector('.sellingDetailsPopUp').classList.add('sellingDetailsPopUpShow');
    document.querySelector('.sellingDetailsPopUp').style.display = 'flex';

    document.querySelector('.productDeatail').classList.add('bodyOverflow-ActiveNew');
    document.querySelector('.productDeatail main').classList.add('productDeatail-main-active');
});
//selling Details pop up JS End
