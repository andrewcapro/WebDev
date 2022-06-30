export default function menu() {
    const content = document.querySelector('#content')
    content.innerHTML = ''
    const intro = document.createElement('div')
    intro.setAttribute('id', 'intro')

    const heading = document.createElement('h3')
    heading.innerHTML = 'Puppy loves chasing <br /> CHIPMONKS'

    const image = document.createElement('img')
    image.setAttribute('src', 'https://lh3.googleusercontent.com/pw/AM-JKLUPneoCLIqj4lJ6yv0w3p6o7aI5eSXfT0_mrDh9lRCRZHiAu5psijZ5GztfTa3rs6SRxH1SeSPR71vmVBPvhj9QHW-d2-mmlrvGjnT2xe4wQru9rS7-t7VgqUYQDJeeJu7M6dcNFv7RLFhMzQ6gCFiW7w=w697-h929-no?authuser=2')

    intro.append(heading, image)
    content.appendChild(intro)
}