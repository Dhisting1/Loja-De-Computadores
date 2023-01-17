function Menu(config){
    // Operador Ternario para verificar se o parametro config é uma string ou não
    this.nav = (typeof config.container === 'string') ? document.querySelector(config.container) : config.container;
    
    // validar se o botão do menu é uma string ou não
    this.btn = (typeof config.toggleBtn === 'string') ? document.querySelector(config.toggleBtn) : config.toggleBtn;

    this.maxWidth = config.widthEnabled || false;

    var _opened = false;
    var _this = this; 
    // Variavel interna para ter certeza que o this que estou chamando é o mesmo dessa função

    this.btn.removeAttribute('style');

    if (this.maxWidth) {
        window.addEventListener('resize', _e => {
            if(window.innerWidth > _this.maxWidth) {
                _this.nav.removeAttribute('style');
                _opened = true;
            } else if (!this.nav.getAttribute('style')) {
                closeMenu();
            }
        });

        if (window.innerWidth <= _this.maxWidth) {
            closeMenu();
        }
    }

    this.btn.addEventListener('click', openOrClose)
    
    // função para verificar se o menu está aberto ou fechado

    function openOrClose(){
        if(!_opened){
            openMenu();
        }else{
            closeMenu();
        }
    }
    
    // Funções menu aberto
    function openMenu(){
        var _top = _this.nav.getBoundingClientRect().top + 'px';

        var _style = {
            maxHeight: 'calc(100vh - ' + _top + ' )',
            overflow: 'hidden'
        }

        applyStyleToNav(_style);

        _opened = true;
    }

    function applyStyleToNav(_style){
        Object.keys(_style).forEach( stl => {
            _this.nav.style[stl] = _style[stl];
        })
    }
    

    // função menu fechado
    function closeMenu(){
        var _style = {
            maxHeight: `0px`,
            overflow: 'hidden'
        }

        applyStyleToNav(_style);

        _opened = false;
    }

}