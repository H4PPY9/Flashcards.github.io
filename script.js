// Inicializa Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true, // Permite un loop infinito
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    spaceBetween: 20, // Espacio entre tarjetas
});

// Función para voltear las tarjetas
function flipCard(button) {
    let card = button.previousElementSibling;
    card.parentElement.classList.toggle("flipped");
}
