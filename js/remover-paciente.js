var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});




  tabela.addEventListener("mouseover", function( event ) {   
    event.target.parentNode.classList.add("danger");
    //event.target.parentNode.innerHTML = "";
    /*setTimeout(function() {
      event.target.parentNode.classList.remove("danger");
    }, 500);*/
  }, false);

   tabela.addEventListener("mouseout", function( event ) {   
    event.target.parentNode.classList.remove("danger");
  }, false);