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


/*Создать html-страницу со статьей, комментариями к ней и 
формой для добавления нового комментария. 
При нажатии на кнопку Добавить комментарий форма должна 
очищаться, а комментарий добавляться к списку всех коммента-
риев. Комментарий состоит из имени пользователя, даты и текста. */

const commentBlock = document.getElementById('commentBlock')
const userName = document.getElementById('userName')
const userText = document.getElementById('userText')
const userCommentsBlock = document.getElementById('userCommentsBlock')
const inputBlock  = document.getElementById('inputBlock')

function btnAddComment(e) {                               // ловим клик по кнопке
    if(!e.target.closest('#btnAddComment')) {
        return
    }
    addComment()
}

commentBlock.addEventListener('click' , btnAddComment)

function addComment() {
    let userNameinfo = userName.value
    let userTextinfo = userText.value
    let time = `${new Date().getHours()} часов   ${new Date().getMinutes()} минут  ${new Date().getSeconds()} секунд`
    
    if(userNameinfo =='' || userTextinfo == '') {
        alert('введите текст')
        return
    }

    let uName = document.createElement('div')      
    uName.className = 'user-comments-block'
    userCommentsBlock.after(uName)

    userCommentsBlock.nextElementSibling.insertAdjacentHTML ('beforeEnd' ,  // сосед справа в него втавим готовый html
        `<p class="name">${userNameinfo}</p>
        <p class="date">${time}</p>
        <p class="text">${userTextinfo}</p> `
    )      
    // userNameinfo = '' //  !!!!!!!!!!!!!почему при при такой записи форма не очищается ?????
    userName.value = ''
    userText.value = ''
}


///////////////////////////////////////////////////////////////////////////////////////

// !!!! даже не представляю как делать следующее задание

/*Создать html-страницу с текстовым полем для ввода страны. 
При вводе пользователем страны, под текстовым полем должен 
появляться выпадающий список с подсказками (максимум 10 штук). 
Подсказки зависят от того, что ввел пользователь. Данные 
для подсказок храните в массиве, которые заранее создайте и 
заполните странами. При щелчке на подсказку ее текст должен 
вводится в input.*/