document.querySelectorAll('.addToPortfolioBtn').forEach(button => {
  button.addEventListener('click', () => {
    const productBox = button.closest('.searchRes .prod_search');
    const title = productBox.dataset.title;
    const price = productBox.dataset.price;
    const img = productBox.dataset.img;
    const brand = productBox.dataset.brand;

    let favList = JSON.parse(localStorage.getItem('portfolioList')) || [];

    const isAlreadyAdded = favList.some(item => item.title === title);

    // Remove any old tooltip
    // const oldTooltip = button.querySelector('.tooltip-text');
    // if (oldTooltip) oldTooltip.remove();

    // if (isAlreadyAdded) {
    //   // REMOVE from snatchList
    //   favList = favList.filter(item => item.title !== title);
    //   localStorage.setItem('snatchList', JSON.stringify(favList));

    //   button.classList.remove('added');
    //   showTooltip(button, "Removed from Snatche List");
    // } else {
    //   // ADD to snatchList
    //   favList.push({ title, price, img, brand });
    //   localStorage.setItem('snatchList', JSON.stringify(favList));

    //   button.classList.add('added');
    //   showTooltip(button, "Added to Snatche List");
    // }
  });
});

 
// function showTooltip(button, message) {
//   const tooltip = document.createElement('div');
//   tooltip.className = 'tooltip-text';
//   tooltip.textContent = message;

  // Append tooltip first to calculate its position
//   button.appendChild(tooltip);

  // Small delay to ensure DOM updates
//   requestAnimationFrame(() => {
//     const tooltipRect = tooltip.getBoundingClientRect();
//     const viewportWidth = window.innerWidth;

//     // Flip tooltip if it goes beyond the right edge
//     if (tooltipRect.right > viewportWidth ) {
//       tooltip.classList.add('last');
//       tooltip.classList.add('last1');
//     }else{
//       tooltip.classList.remove('last');
//       tooltip.classList.remove('last1');
//     }
//   });

//   // Remove tooltip after 2 seconds
//   setTimeout(() => tooltip.remove(), 1000);
// }


document.addEventListener('DOMContentLoaded', () => {
  const favList = JSON.parse(localStorage.getItem('portfolioList')) || [];

  document.querySelectorAll('.searchRes .prod_search').forEach(productBox => {
    const title = productBox.dataset.title;
    const button = productBox.querySelector('.addToPortfolioBtn');

    const isWishlisted = favList.some(item => item.title === title);

    // if (isWishlisted) {
    //   button.classList.add('added');
    // } else {
    //   button.classList.remove('added');
    // }
  });
});



