// função que é chamada para mostrar a div na tela
function openWindow () {
    document.getElementById("janela").style.display = 'block'; 
}

// função que é chamada para ocultar a div a dar e recarregar a tela após isso
function closeWindow () {
    document.getElementById("janela").style.display = 'none';
    window.location.reload(); 
}

function toggleMenu (){
    const menus = document.getElementById("menus");
    menus.classList.toggle("active");
}
