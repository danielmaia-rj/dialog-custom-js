(function(){
  var
    btn = document.getElementById("dialog-custom-modal"),
    fade = document.getElementsByClassName('dialog-custom-fade')[0],
    janelinha = document.getElementsByClassName('dialog-custom-alertinha')[0],
    botoesJanelinha = document.getElementsByClassName('dialog-custom-alertinha-btn')[0],
    btnDir = botoesJanelinha.getElementsByTagName('button')[0],
    btnEsq = botoesJanelinha.getElementsByTagName('button')[1];

  function _abrir(){
    fade.className = fade.className + " in";
    janelinha.className = janelinha.className + " in";
  };

  function _fechar(){
    fade.className = fade.className.replace( /(?:^|\s)in(?!\S)/g , '' );
    janelinha.className = janelinha.className.replace( /(?:^|\s)in(?!\S)/g , '' );
  };

  btn.addEventListener("click", function(){
    _abrir();
  });

  fade.addEventListener("click", function(){
    _fechar();
  });

  btnDir.addEventListener("click", function(){
    /*Coloque aqui o evento que vai ser disparado ao clicar nessa opção*/
    window.alert('Clicou em '+this.innerText+'');
    _fechar();
  });

  btnEsq.addEventListener("click", function(){
    /*Coloque aqui o evento que vai ser disparado ao clicar nessa opção*/
    window.alert('Clicou em '+this.innerText+'');
    _fechar();
  });
})()
