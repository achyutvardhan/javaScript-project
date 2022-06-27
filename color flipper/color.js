const btn = document.getElementById('button')
   btn.addEventListener('click',changeColor)
   function changeColor(e) {
    const colour = document.getElementById('color')
    const bdy = document.getElementById('body')
    if (color.textContent == 'red') {
        bdy.style.backgroundColor  = 'green';
        color.textContent = 'green';
    }
    else{
        
        bdy.style.backgroundColor  = 'red';
        color.textContent = 'red';
    }
}