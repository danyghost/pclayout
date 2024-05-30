const modalBtn = document.querySelector('.modal__button')
const modal = document.querySelector('.modal')

modal.addEventListener('click', () => {
    modal.style.display = 'flex'
})

modal.addEventListener('click', (event) => {
    const modalContent = event.target.closest('.modal__inner')
    console.log(modalContent);

    if (!modalContent) {
        console.log('Клик вне блока');
        modal.style.display = ''
    }
})