// Função auto invocavel para o controle do menu e carrossel do site

(function(){
    // variave que irá remover a classe no-js do html e colocar uma classe chamada js
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');
    
    
    // Objeto de configuração do menu
    var menu = new Menu({
        container: '.top-header-nav',
        toggleBtn: '.header-btn-menu',
        widthEnabled: 1024
    });

    var carrosselImgs = new Carrossel({
        container: '.pc-slider .slide-show',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next',
        
    })
})();