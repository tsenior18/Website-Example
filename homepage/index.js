/* JS For the Live time When clicking the button */
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

// ---- JS For the Log In section & Setting Users  
const button1 = document.querySelector('#button1');
button1.addEventListener('click', function () {
    var user = document.querySelector('#username').value
    var passwords = document.querySelector('#password').value
    if (user == 'tom' && passwords == 'tom') {
        alert('yes');
    } else {
        alert('no');
    }
})