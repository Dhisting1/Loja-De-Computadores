function Carrossel(config){
    // Validação dos botões de prev e next, 
    this.container = ( typeof config.container === 'string') ? document.querySelector(config.container) : config.container
    
    this.itens = (typeof config.itens === 'string') ? this.container.querySelectorAll(config.itens) : config.itens
    
    this.btnPrev = (typeof config.btnPrev === 'string') ? this.container.querySelector(config.btnPrev) : config.btnPrev
    
    this.btnNext = (typeof config.btnNext === 'string') ? this.container.querySelector(config.btnNext) : config.btnNext
    
    var _this = this;
    var _currentSlide = 0;
    
    init()
    // Função para adicionar a classe show nas figures
    function init(){
        var _show = _this.container.querySelectorAll('.show')
        // Array para percorrer a tag figure e adicionar e remover a classe show
        Array.prototype.forEach.call(_show, function(sh){
            sh.classList.remove('show')
        })
        _this.itens[0].classList.add('show')
        _this.btnNext.removeAttribute('style')
        _this.btnPrev.removeAttribute('style')

        // chamada de função para o evento 'click' nas setas
        addListeners()        
    }
    // adicionando o evento 'click' aos botões
    function addListeners(){
        _this.btnNext.addEventListener('click', showNextSlide)
        _this.btnPrev.addEventListener('click', showPrevSlide)
    }
    // função para incrementar +1 na variavel _current
    function showNextSlide(){
        _currentSlide++;
        showSlide()
    }
    // funcao para decrementar -1 a variavel _current
    function showPrevSlide(){
        _currentSlide--;
        showSlide()
    }
    // função que faz com que os botões do carrossel funcionem 
    function showSlide(){
        var qtd = _this.itens.length; 
        var slide = _currentSlide % qtd;
        slide = Math.abs(slide);
        console.log(slide, qtd, _currentSlide)
        
        _this.container.querySelector('.show').classList.remove('show');

        _this.itens[slide].classList.add('show');
    }
    
}