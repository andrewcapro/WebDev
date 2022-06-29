export default function menu() {
    const content = document.querySelector('#content')
    content.innerHTML = ''
    const intro = document.createElement('div')
    intro.setAttribute('id', 'intro')

    const heading = document.createElement('h3')
    heading.innerHTML = 'I<br /> LOVE<br /> PEARS'

    const image = document.createElement('img')
    image.setAttribute('src', 'https://www.pngmart.com/files/16/Green-Pears-PNG-Transparent-Image.png')

    intro.append(image, heading)
    content.appendChild(intro)
}