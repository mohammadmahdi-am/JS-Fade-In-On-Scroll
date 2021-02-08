
var myElement = document.getElementById('img-2');
var bounding = myElement.getBoundingClientRect();
var myElementHeight = myElement.offsetHeight;
var myElementWidth = myElement.offsetWidth;

window.addEventListener("scroll",function ()  {

    var bounding = myElement.getBoundingClientRect();

    if (bounding.top >= -myElementHeight 
        && bounding.left >= -myElementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {

        console.log('Element is in the viewport!');
        myElement.style.opacity = "1"
    } else {

        console.log('Element is NOT in the viewport!');
    }
})