// função que é chamada para mostrar a div na tela
function openWindow () {
    document.getElementById("janela").style.display = 'block'; 
}

// função que é chamada para ocultar a div a dar e recarregar a tela após isso
function closeWindow () {
    document.getElementById("janela").style.display = 'none';
    window.location.reload(); 
}

document.addEventListener("DOMContentLoaded", function(){
   document.querySelector(".button-menu").addEventListener("click", function(e){
      e.preventDefault();
      var navi = document.querySelector(".menus");
      var navi_ativo = navi.dataset.ativo;
      navi.setAttribute("data-ativo", navi_ativo == "true" ? "false" : "true");
   });
});
