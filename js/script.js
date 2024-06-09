/*Создать html-страницу с возможностью ввода числового зна-
чения через кнопки (больше, меньше).
Пользователь не должен иметь возможность печатать текст 
или цифры. Число изменяется только при нажатии на кнопки. */

let counter = document.getElementById('counter')
let showCounter = document.getElementById('showCounter')

function clickButtons(e) {
    if(!e.target.closest('div [data-meaning]')) {
        return
    }
    console.log(parseInt(showCounter.textContent))
    showCounter.textContent
    if(e.target.closest('div [data-meaning]').textContent == '+') {
        showCounter.textContent = parseInt(showCounter.textContent) + 1
    } 
    if(e.target.closest('div [data-meaning]').textContent == '-') {
        showCounter.textContent = parseInt(showCounter.textContent) - 1
    }
}

counter.addEventListener('click', clickButtons)
///////////////////////////////////////////////////////////////////////////////////////

/*Создать html-страницу с кнопкой, по нажатию на которую 
добавляются цветные блоки на страницу. По клику на сам блок, 
он должен удаляться со страницы.*/
let btnAddColor = document.querySelector('#btnAddColor')
let setColor = document.querySelector('.set-color')
// в этом примере не стал делать делегирование событий
function addColorBlock() {
    let span = document.createElement('span')
    setColor.append(span)
    span.style.cssText = `background-color: rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)});`
}

function removeElement(e) {                      
    if(!e.target.closest('span')) {
        return
    }
    e.target.remove()
}

btnAddColor.addEventListener('click', addColorBlock)
setColor.addEventListener('click',  removeElement)
///////////////////////////////////////////////////////////////////////////////////////

/*Создать html-страницу с текстом и палитрой цветов. 
При клике на цвет палитры, должен изменяться цвет текста на 
выбранный. Для указания, какой ячейке какой цвет соответствует, 
можно использовать атрибут data-color в каждой ячейке, а потом 
с помощью JS получать необходимый цвет из этого атрибута.*/


let paletteColor = document.querySelectorAll('.color-palette span')
let myText = document.querySelector('#myText')

paletteColor.forEach(function(el) {
    el.style.cssText = `background-color: #${el.dataset.color};`
})

function changeTextColor(e) {
    myText.style.cssText = `color: #${e.target.dataset.color};`
}

paletteColor.forEach(function(el) {
    el.addEventListener('click', changeTextColor)
})

///////////////////////////////////////////////////////////////////////////////////////







