let input = document.getElementById('input')
let paragraph = document.getElementById('para')
input.addEventListener('keydown', () =>{
    let value = input.value
    paragraph.innerHTML = value
})