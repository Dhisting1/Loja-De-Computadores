// Função soneca retorna uma promessa com o setTimeout para que a função notif() seja executada em questões de milisegundos
function soneca(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
//  Função assincrona notif() verifica se o campo do formulario foi preenchido ou não
async function notif() {
    let btn = document.getElementById("btn")
    await soneca(10)
    btn.textContent = alert("Preencher os campos antes de enviar!!")  
}
