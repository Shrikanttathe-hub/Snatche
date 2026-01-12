//JS for Size Chart POP Up
function openSizeChart() {
    document.querySelector('.sizeChartTable').classList.add('sizeChartTableShow');
    document.querySelector('.productDeatail main').classList.add('productDeatail-main-active');
    document.querySelector('.productDeatail').classList.add('bodyOverflow-Active');

    document.getElementById('nike').checked = true;
}

// if we clicked pop up overlay then it will close
const popUpOverlaySizeChart = document.querySelector(".sizeChartTable");
const popUpSizeChartContent = document.querySelector('.sizeChartTable .sizeChart');

popUpOverlaySizeChart.addEventListener("click", function (event) {
    if (!popUpSizeChartContent.contains(event.target)) {
        document.querySelector('.productDeatail main').classList.remove('productDeatail-main-active');
        document.querySelector('.sizeChartTable').classList.remove('sizeChartTableShow');
        document.querySelector('.productDeatail').classList.remove('bodyOverflow-Active');
    }
});

function closeSizeChart() {
    document.querySelector('.sizeChartTable').classList.remove('sizeChartTableShow');
    document.querySelector('.productDeatail main').classList.remove('productDeatail-main-active');
    document.querySelector('.productDeatail').classList.remove('bodyOverflow-Active');
}