//Being selling pop up when Sell button clicked js starts here
function openSellFunctionPopUpMainNew() {
    document.getElementById('sellFunctionPopUp1').classList.add('sellFunctionShow');
    document.querySelector('main').classList.add('main-active');
    document.querySelector('body').classList.add('bodyOverflow-Active');
}

//Click Outside to close Pop up
const popUpOverlay = document.getElementById('sellFunctionPopUp1');
const popUp = document.querySelector('.sellFunctionMain');

popUpOverlay.addEventListener('click', function (event) {
    if (!popUp.contains(event.target)) {
        popUpOverlay.classList.remove('sellFunctionShow');
        document.querySelector('main').classList.remove('main-active');
        document.querySelector('body').classList.remove('bodyOverflow-Active');
    }
});
//Being selling pop up when Sell button clicked js Ends here

//sell your product Pop Up js Starts here
function openSellFunctionPopUpBeingSelling() {
    document.querySelector('main').classList.add('main-active');
    document.querySelector('body').classList.add('bodyOverflow-Active');
    document.getElementById('sellFunctionPopUp2').classList.add('sellFunctionShow');
    document.getElementById('sellFunctionPopUp1').classList.remove('sellFunctionShow');
}

function openSellFunctionPopUpBeingSellingClose() {
    document.getElementById('sellFunctionPopUp2').classList.remove('sellFunctionShow');
    document.getElementById('sellFunctionPopUp1').classList.add('sellFunctionShow');
    document.querySelector('main').classList.add('main-active');
    document.querySelector('body').classList.add('bodyOverflow-Active');
}
//sell your product Pop Up js Ends here

//sell your product Results Pop Up js Starts here
function openSellFunctionPopUpResult() {
    document.getElementById('sellFunctionPopUp3').classList.add('sellFunctionShow');
    document.getElementById('sellFunctionPopUp2').classList.remove('sellFunctionShow');
    document.querySelector('main').classList.add('main-active');
    document.querySelector('body').classList.add('bodyOverflow-Active');
}

function openSellFunctionPopUpResultClose() {
    document.getElementById('sellFunctionPopUp3').classList.remove('sellFunctionShow');
    document.getElementById('sellFunctionPopUp2').classList.add('sellFunctionShow');
}
//sell your product Results Pop Up js Ends here

//sell your product No esults Pop Up js Starts here
function openSellFunctionPopUpNoResult() {
    document.getElementById('sellFunctionPopUp4').classList.add('sellFunctionShow');
    document.getElementById('sellFunctionPopUp3').classList.remove('sellFunctionShow');
    document.querySelector('main').classList.add('main-active');
    document.querySelector('body').classList.add('bodyOverflow-Active');
}

function openSellFunctionPopUpNoResultClose() {
    document.getElementById('sellFunctionPopUp4').classList.remove('sellFunctionShow');
    document.getElementById('sellFunctionPopUp3').classList.add('sellFunctionShow');
}
//sell your product No Results Pop Up js Ends here

//sell your product Add a Product Request Pop Up js Starts here
function openSellFunctionPopUpAddProduct() {
    document.getElementById('sellFunctionPopUp5').classList.add('sellFunctionShow');
    document.getElementById('sellFunctionPopUp4').classList.remove('sellFunctionShow');
    document.querySelector('main').classList.add('main-active');
    document.querySelector('body').classList.add('bodyOverflow-Active');
}

function openSellFunctionPopUpAddProductClose() {
    document.getElementById('sellFunctionPopUp5').classList.remove('sellFunctionShow');
    document.getElementById('sellFunctionPopUp4').classList.add('sellFunctionShow');
}
//sell your product Add a Product Request Pop Up js Ends here


