"use strict"

const allTabs = document.querySelectorAll('.tabs__item');
const allPages = document.querySelectorAll('.pages__item');




for (let i of allTabs) {
    i.addEventListener('click', function () {
        for (let k of allTabs) {
            k.classList.remove('_active')
        }
        i.classList.add('_active')
        openPage()
    })
}

console.log(allPages[1])

// function openPage() {
//     for (let i of allTabs) {
//         if (i.classList.contains('_active')) {
//             console.log('++', i)
//         }
//     }
// }
//ДОДЕЛАТЬ ОТКРЫТИЕ НУЖНОЙ СТРАНИЦЫ АУ

function openPage() {
    var numberPage = 0;
    for (let tab of allTabs) {
        if (tab.classList.contains('_active')) {
            for (let page of allPages) {
                page.classList.remove('_active')
            }
            allPages[numberPage].classList.add('_active');
            numberPage = 0;
        } else {
            numberPage++;
        }
    }
}