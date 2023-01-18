function leiamais(){
    let pontos = document.getElementById('pontos');
    let maisTexto = document.getElementById('mais');
    let leiaBtn = document.getElementById('leia');

    if(pontos.style.display === 'none'){
        pontos.style.display = 'inline';
        maisTexto.style.display = 'none';
        leiaBtn.innerHTML = 'Leia mais'
    }else{
        pontos.style.display = 'none';
        maisTexto.style.display = 'inline';
        leiaBtn.innerHTML = 'Leia menos'
    }
}