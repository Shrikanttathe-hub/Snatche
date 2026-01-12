document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".yourProductrightMoreDetails");
  const accordion = document.querySelector(".accordionNew1");
  const yourProductPara = document.querySelector(".yourProductPara");
  const goToMyOrders = document.querySelector(".goToMyOrders");
  const greenPara = document.querySelector(".greenSection > p");
  const goToMyOrdersText = document.querySelector(".goToMyOrdersText");
 
  
  let isOpen = false;

  toggleBtn.addEventListener("click", function () {
    accordion.classList.toggle("open");
    isOpen = !isOpen;

    if (window.innerWidth > 767 && isOpen) {
      yourProductPara.style.visibility = "hidden";
      goToMyOrders.style.display = "none";
      greenPara.style.display = "none";
      goToMyOrdersText.style.display = "block";
    } else if(window.innerWidth < 767 && isOpen){
      goToMyOrders.style.display = "block";
      greenPara.style.display = "none";
      goToMyOrdersText.style.display = "none";
    } else if(window.innerWidth < 767 && !isOpen){
       goToMyOrders.style.display = "block";
      greenPara.style.display = "block";
      goToMyOrdersText.style.display = "none";
    }
    else {
      yourProductPara.style.visibility = "visible";
      goToMyOrders.style.display = "block";
      greenPara.style.display = "block";
      goToMyOrdersText.style.display = "none";
    }

    toggleBtn.innerHTML = isOpen
      ? 'Less Details <img src="./assets/Image/successfull/arrow.svg" class="yourProductrightMoreDetailsArrow" style="transform: rotate(180deg); transition: transform 0.3s ease; padding-right:12px; padding-left:0px" />'
      : 'More Details <img src="./assets/Image/successfull/arrow.svg" class="yourProductrightMoreDetailsArrow" style="transition: transform 0.3s ease;" />';
  });
});

//js for back to Top
function scrollBackToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
