export default function contact() {
    const content = document.querySelector('#content')
    content.innerHTML = ''
    const intro = document.createElement('div')
    intro.setAttribute('id','intro')

    const heading = document.createElement('h1')
    heading.innerHTML = 'Choose from one of our epic locations'

    const location1 = document.createElement('h3')
    location1.innerHTML = 'Hoboken'
    const location2 = document.createElement('h3')
    location2.innerHTML = 'Aruba'
    const location3 = document.createElement('h3')
    location3.innerHTML = 'Red Bank'

    intro.append(heading,location1,location2,location3)
    content.appendChild(intro)
}