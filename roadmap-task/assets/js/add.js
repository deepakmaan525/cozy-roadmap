var tab1 = document.getElementById('tab1')
var tab2 = document.getElementById('tab2')
var tab3 = document.getElementById('tab3')
var tab4 = document.getElementById('tab4')
var openTab1 = document.getElementById('opentab1')
var openTab2 = document.getElementById('opentab2')
var openTab3 = document.getElementById('opentab3')
var openTab4 = document.getElementById('opentab4')
var cards = document.getElementById('cards')
var closeBtns = document.querySelectorAll('.close')

tab1.addEventListener("click", function () {
    openTab1.classList.remove('d_none');
    cards.classList.add('d_none');
});
tab2.addEventListener("click", function () {
    openTab2.classList.remove('d_none');
    cards.classList.add('d_none');
});
tab3.addEventListener("click", function () {
    openTab3.classList.remove('d_none');
    cards.classList.add('d_none');
});
tab4.addEventListener("click", function () {
    openTab4.classList.remove('d_none');
    cards.classList.add('d_none');
});

closeBtns.forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
        openTab1.classList.add('d_none');
        cards.classList.remove('d_none');
    });
});
closeBtns.forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
        openTab2.classList.add('d_none');
        cards.classList.remove('d_none');
    });
});
closeBtns.forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
        openTab3.classList.add('d_none');
        cards.classList.remove('d_none');
    });
});
closeBtns.forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
        openTab4.classList.add('d_none');
        cards.classList.remove('d_none');
    });
});

