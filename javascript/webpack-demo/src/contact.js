export default function contact() {
    const content = document.querySelector('#content')
    content.innerHTML = ''
    const intro = document.createElement('div')
    intro.setAttribute('id','intro')

    const heading = document.createElement('h3')
    heading.innerHTML = 'Im sorry to inform you<br /> This place does not exist'

    const rick = document.createElement('iframe')
    rick.setAttribute('src', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')

    intro.append(heading,rick)
    content.appendChild(intro)
}