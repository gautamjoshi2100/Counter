let inc = document.querySelector(".button_up");
let dec = document.querySelector(".button_down");
let count_display = document.getElementById("count").innerHTML;
count_display = parseInt(count_display);
inc.addEventListener('click', function() {
    count_display++;
    let updated = count_display.toString();
    document.getElementById("count").innerHTML = updated;
})

dec.addEventListener('click', function() {
    count_display--;
    let updated = count_display.toString();
    document.getElementById("count").innerHTML = updated;
})