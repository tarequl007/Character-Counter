const txt = document.querySelector('#txt');
const result = document.querySelector('#result');

txt.addEventListener('input', function() {

    result.innerText = txt.value.length;

})