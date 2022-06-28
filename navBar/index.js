const cont = document.getElementById('container')
const btn = document.getElementById('button')
const nave = document.getElementById('nav')
btn.addEventListener('click',nav)
function nav(e) {

 let newBtn = document.createElement('button')
 newBtn.textContent = '>'
  nave.appendChild(newBtn).classList.toggle("arrow")
btn.replaceWith(newBtn)
   let newUl = document.createElement('ul')
    let ul = cont.appendChild(newUl)
    console.log(ul)
    ul.classList.toggle("ulTag")

    let newLi = document.createElement('li')
   ul.appendChild(newLi).classList.toggle("liTag")
   newLi.textContent = "HOME"
         newLi = document.createElement('li')
          ul.appendChild(newLi).classList.toggle("liTag")
          newLi.textContent = "CONTACT"
           newLi = document.createElement('li')
          ul.appendChild(newLi).classList.toggle("liTag")
          newLi.textContent = "ABOUT"
          
        newBtn.addEventListener('click',closeNav)
    
        function closeNav(e) {
            ul.remove()
            newBtn.replaceWith(btn)
        }
}