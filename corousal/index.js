const next = document.getElementById('next')
 const prev = document.getElementById('previous')
 let imge = document.getElementById('img')
 let name = document.getElementById('name')
 let parah = document.getElementById('para')
 
 let array=[{
    img :'./img/1600154260690.jpg',
    names:'Aman datterwal',
    para:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore iusto voluptas porro quaerat velit commodi nesciunt eaque. Quidem, aspernatur. Ut, reprehenderit excepturi voluptatibus ullam labore libero delectus aspernatur esse.'
 }
 ,{
    img :'./img/Selena-Gomez.jpg',
    names:'selena gomez',
    para:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore iusto voluptas porro quaerat velit commodi nesciunt eaque. Quidem, aspernatur. Ut, reprehenderit excepturi voluptatibus ullam labore libero delectus aspernatur esse.'
 },{
    img :'./img/steve-jobs.jpg',
    names:'steve jobs',
    para:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore iusto voluptas porro quaerat velit commodi nesciunt eaque. Quidem, aspernatur. Ut, reprehenderit excepturi voluptatibus ullam labore libero delectus aspernatur esse.'
 },{
    img :'./img/achyut.jpg',
    names:'Achyut vardhan',
    para:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati labore iusto voluptas porro quaerat velit commodi nesciunt eaque. Quidem, aspernatur. Ut, reprehenderit excepturi voluptatibus ullam labore libero delectus aspernatur esse.'
 }]
 console.log(array)
let i=0;
next.addEventListener('click',nextReview)
prev.addEventListener('click',previousReview) 
function nextReview(e) {
    if (i<array.length-1) {
        
        i++;
        imge.src =array[i].img
        name.textContent = array[i].names
        parah.textContent = array[i].para
    }
    else
    {
        i=0;
         imge.src =array[i].img
    name.textContent = array[i].names
    parah.textContent = array[i].para

    }
}
function previousReview(e) {
    if (i>0) {
        
        i--;
        imge.src =array[i].img
        name.textContent = array[i].names
        parah.textContent = array[i].para
    }else{
        i=array.length-1
        imge.src =array[i].img
        name.textContent = array[i].names
        parah.textContent = array[i].para
    }
}