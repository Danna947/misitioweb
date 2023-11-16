const interaccion = new IntersectionObserver((entries)=>{//entradas
    entries.forEach((entry)=>{
        console.log(entry)//cuando se cruza el obejtivo//
        if(entry.isIntersecting){
            entry.target.classList.add('show');


        }else{
            entry.target.classList.remove('show')
        }
    });
});



const tinkerbell = document.querySelectorAll('.img-tik');

tinkerbell.forEach((el)=>interaccion.observe(el));