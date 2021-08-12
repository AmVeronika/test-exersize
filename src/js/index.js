let inputFirstname = document.getElementById('1');
let inputTel = document.getElementById('2');
let inputEmail = document.getElementById('3');
let button = document.getElementById('button');

button.onclick = () => {
   check(inputFirstname, /^[a-zа-яё]+$/iu);
   check(inputTel, /\B'|'\B/);//Нашла новый более доступный и упрощённый вариант
   // check(inputTel, /^\+?[\d]{1}\(?[\d]{3}\)?[\d]{3}-?[\d]{4}$/); //Добавила проверку номера с учетом того, что (+), скобочки, тире могут быть, а могут и не быть (т.к. люди поразному вводят номера)
   check(inputEmail, /^([a-z\d\.-_]+)@([a-z\d_\.-]+)\.([a-z\d]{2,5})$/i);
}
function check(name, regexp) {
   name.style.outline = "none";
   if (!regexp.test(name.value)) {
      name.style.outline = "1px solid red";
      name.value = "Введите корректно данные";
   }
}