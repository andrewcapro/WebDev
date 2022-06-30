import menu from './menu.js'
import locations from './locations.js'
import contact from './contact.js'

const tabs = document.querySelectorAll('#tabs li')
tabs.forEach(tab => {
    tab.addEventListener('click', switchTab)
})

function switchTab(e) {
    tabs.forEach(tab => tab.classList.remove('current'))
    e.target.classList.add('current')
    if (e.target.classList.contains('menu')){
        menu()
    } else if (e.target.classList.contains('locations')) {
        locations()
    } else if (e.target.classList.contains('contact')) {
        contact()
    }
}

menu()