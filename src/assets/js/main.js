// event handlers functions 

const sections = document.getElementsByClassName("feedback-form__section")

function regFormOnClickForward() {
    sections[0].classList.remove('active')
    sections[1].classList.add('active')
}

function regFormOnClickBack() {
    sections[1].classList.remove('active')
    sections[0].classList.add('active')
}