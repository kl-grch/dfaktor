'use strict';

const menuListItems = document.querySelectorAll('.menu__list-link>li');
const menuLinkSublinks = document.querySelectorAll('.menu__list-sublink');


// Разворачиваем меню

menuListItems.forEach((list, i) => {
    list.addEventListener('click', () => {
            if (!menuLinkSublinks[i].classList.contains('active')) {
                menuLinkSublinks[i].classList.add('active');
            } else {
                menuLinkSublinks[i].classList.remove('active');
            }
    });
});

