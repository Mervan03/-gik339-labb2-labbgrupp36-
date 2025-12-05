const checkbox = document.getElementById('divStyle');

const TextFields = document.querySelectorAll('.textfield');

let pressButton = document.querySelector('button');

const EmptyBox = document.querySelector('#emptyBox');



function userchoice(e) {
    console.log(e.target);


  

    if (e.target.name==='content') {

        e.target.value
        EmptyBox.innerHTML = e.target.value




    }


}


TextFields[0].addEventListener('input', userchoice);
TextFields[1].addEventListener('input', userchoice);



checkbox.addEventListener('change', function() {

    EmptyBox.style.backgroundColor = TextFields[0].value; 



});

pressButton.addEventListener('click', function() {

    EmptyBox.remove();
});