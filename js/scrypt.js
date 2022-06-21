"use strict"

const allTabs = document.querySelectorAll('.tabs__item');
const allPages = document.querySelectorAll('.pages__item');




for (let i of allTabs) {
    i.addEventListener('click', function () {
        for (let k of allTabs) {
            k.classList.remove('_active')
        }
        i.classList.add('_active')
    })
}

function openPage() {
    for (let i of allTabs) {
        if (i.classList.contains('_active')) {
            console.log('++', i)
        }
    }
}
//ДОДЕЛАТЬ ОТКРЫТИЕ НУЖНОЙ СТРАНИЦЫ АУ