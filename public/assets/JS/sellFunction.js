 //Open SellFuntion Pop up
    function openSellFunctionPopUp(){
        document.querySelector('.productDeatail main').classList.add('productDeatail-main-active');
        document.querySelector('.sellFunction').classList.add('sellFunctionPopUpShow');
        document.querySelector('.productDeatail').classList.add('bodyOverflow-Active');
    }
    
const popUpOverlayNew = document.querySelector(".sellFunction");
const popupContent = document.querySelector(".sellFunction .popupContent");

popUpOverlayNew.addEventListener("click", function(event){
    // If you clicked directly on the overlay (not inside the popup content), then close
    if (!popupContent.contains(event.target)) {
        document.querySelector('.productDeatail main').classList.remove('productDeatail-main-active');
        document.querySelector('.sellFunction').classList.remove('sellFunctionPopUpShow');
        document.querySelector('.productDeatail').classList.remove('bodyOverflow-Active');
    }
});
