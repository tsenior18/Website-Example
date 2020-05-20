const button = document.querySelector('#clicks');

button.addEventListener('click', function getTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ampm = h >= 12 ? 'PM' : 'AM';

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var final = h + ":" + m + ":" + s + " " + ampm;
    setTimeout(getTime, 1000);

    const times = document.querySelector('#time').innerHTML = final;
});