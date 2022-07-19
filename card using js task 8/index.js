console.log("CARD CREATION")

var body = document.querySelector('body')
var heading = document.createElement('h1')
heading.innerHTML = "Hello Everyone!!!!"

var image = document.createElement('img')
image.src = "https://www.careeraddict.com/uploads/article/59099/illustration-man-suit.jpg"
image.style = `
    width: 100%
`

var content = document.createElement('p')
content.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat laudantium adipisci totam. Pariatur sunt earum beatae, autem ratione rerum aut ullam mollitia sapiente laboriosam error sint, harum repellat repudiandae? orem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat laudantium orem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat laudantium orem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat laudantium orem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat laudantium orem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat laudantium orem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat laudantium "

var button = document.createElement('button')
button.innerHTML = "Click Here" 
button.style = `
    margin-top: 10px;
    padding: 10px 30px;
    background-color: red;
    width: 100%
`
var container = document.createElement('div')
body.appendChild(container)
container.style = `
    background-color: blue;
    padding: 10px;
    border: 1px solid #2e699c;
    width: 500px;
    height: auto;
`
container.append(heading, image, content, button)