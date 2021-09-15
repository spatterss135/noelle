const canvas = document.querySelector('.canvas')
const colorButton = document.querySelector('.colors-button')
const colorMenu = document.querySelector('.color-menu')
const colorOptions = document.querySelectorAll('.color-option')


for (i=0;i<400;i++){
    let pixel = document.createElement('div')
    pixel.classList.add('pixel')
    canvas.append(pixel)
}

let selectedColor;
for (i=0;i<colorOptions.length;i++){
    colorOptions[i].addEventListener('click', function(e){
        selectedColor = e.target.style.backgroundColor
        console.log(e.target)
        popIn()
    })
}



const pixel = document.querySelectorAll('.pixel')
for (i=0;i<pixel.length;i++) {
    pixel[i].addEventListener('click', function(e) {
        e.target.style.backgroundColor = selectedColor
    })
}


function popIn () {
    colorMenu.style.animation = 'popIn 500ms forwards 1';
    colorMenu.style.transformOrigin = 'left'
    colorButton.addEventListener('click', popOut)
}
function popOut() {
    colorMenu.style.animation = 'popOut 500ms forwards 1';
    colorMenu.style.transformOrigin = 'left'
    colorButton.addEventListener('click', popIn)
    colorButton.removeEventListener('click', popOut)

}
colorButton.addEventListener('click', popOut)