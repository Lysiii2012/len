const btn = document.querySelectorAll('.btn');
const body = document.body;
const boxForm = document.querySelector('.pop-form');
const close = document.querySelector('.close')
const formBlock = document.querySelector('.form-block');

btn.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        boxForm.classList.add('active');
        body.classList.add('overlay')
    })
})

function closePopUp() {
    boxForm.classList.remove('active');
    body.classList.remove('overlay')  
}

close.addEventListener('click', (e) => {
    e.preventDefault();
    closePopUp()
} )
document.addEventListener('click', (e) => { 
    if (!formBlock.contains(e.target) && !e.target.closest('.btn')) {
        closePopUp();
    }
});