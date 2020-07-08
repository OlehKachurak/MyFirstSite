btn.addEventListener('click', function(e) {
    var bill = document.getElementById('bill').value;
    var tip = document.getElementById('tip').value;
    var numb = document.getElementById('numb').value;
     
    tip_math = tip / 100;
    total = (bill + bill * tip_math)/numb;
    result.innerHTML = total;
    e.preventDefault();

});
document.getElementsByTagName('input')[1].style.color="red";
document.getElementsByTagName('form').style.border="1px solid";