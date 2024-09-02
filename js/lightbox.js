const imgmen1 = document.querySelector('.imgmenu')
const imagenes = document.querySelectorAll('.img-galeria');
const imageneslight = document.querySelector('.agregar-imagen');
const contenedorlight = document.querySelector('.image-light');


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', () =>{
        apaimg(imagen.getAttribute('src'))
    })
})

contenedorlight.addEventListener('click', (e) =>{
    if(e.target !== imageneslight){
        contenedorlight.classList.toggle('show')
        imageneslight.classList.toggle('showImage')
        imgmen1.style.opacity = '1'
    }
});

const apaimg = (imagen) => {
    imageneslight.src = imagen
    contenedorlight.classList.toggle('show')
    imageneslight.classList.toggle('showImage')
    imgmen1.style.opacity = '0'
};