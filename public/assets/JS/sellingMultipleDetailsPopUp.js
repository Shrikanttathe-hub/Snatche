function openSellingMultipleDetails() {
    document.querySelector('.productDeatail main').classList.add('productDeatail-main-active');
    document.querySelector('.sellingMultipleDetailsPopUp').classList.add('sellingMultipleDetailsPopUpShow');
    document.querySelector('.productDeatail').classList.add('bodyOverflow-ActiveNew');
    document.querySelector('.sellingMultipleDetailsPopUp').style.display = 'flex';
}

function confirm2(){
    document.querySelector('.sellingMultipleDetailsPopUp #orderCancel').style.display = 'flex';
    document.querySelector('.productDeatail main').classList.add('productDeatail-main-active');
}

document.querySelector('.sellingMultipleDetailsPopUp #Yes').addEventListener("click", function () {
    document.querySelector('.sellingMultipleDetailsPopUp #orderCancel').style.display = "none";
    document.querySelector('.sellingMultipleDetailsPopUp').classList.remove('sellingMultipleDetailsPopUpShow');
    document.querySelector('.sellingMultipleDetailsPopUp').style.display = "none";
    document.querySelector('.productDeatail').classList.remove('bodyOverflow-ActiveNew');
    document.querySelector('.productDeatail main').classList.remove('productDeatail-main-active');
});

document.querySelector('.sellingMultipleDetailsPopUp #no').addEventListener("click", function(){
    document.querySelector('.sellingMultipleDetailsPopUp #orderCancel').style.display = "none";

    // RE-SHOW the popup if it was hidden
    document.querySelector('.sellingMultipleDetailsPopUp').classList.add('sellingMultipleDetailsPopUpShow');
    document.querySelector('.sellingMultipleDetailsPopUp').style.display = 'flex';

    document.querySelector('.productDeatail').classList.add('bodyOverflow-ActiveNew');
    document.querySelector('.productDeatail main').classList.add('productDeatail-main-active');
});
