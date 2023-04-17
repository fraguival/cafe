const toggle = document.querySelector('.toggle')
const menu = document.querySelector('.header__menu')

toggle.addEventListener('click', () => {

    'use strict'
    toggle.classList.toggle('rotate')
    menu.classList.toggle('active')
})