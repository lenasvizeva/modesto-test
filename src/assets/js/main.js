const sections = document.getElementsByClassName("feedback-form__section")

function regFormOnClickForward() {
    sections[0].style.display = 'none'
    sections[1].style.display = 'flex'
}

function regFormOnClickBack() {
    sections[1].style.display = 'none'
    sections[0].style.display = 'flex'
}