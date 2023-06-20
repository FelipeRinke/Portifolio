// CRIA UMA FUNCAO
function toggleMode() {
    // Cria uma constante (documentElement =  HTML)
    const html = document.documentElement
    // CRIA A FUNÇAO PARA TROCA DE MODO ESCURO PARA CLARO
    html.classList.toggle('light')


// CODIGO PARA MUDAR FOTO DO PERFIL QUANDO APERTAR O BOTAO DE SWITCH
    const img = document.querySelector("#profile img")
    if (html.classList.contains('light')) {
        // SE TIVER LIGHT MODE ADICIONAR A IMAGEM LIGHT
        img.setAttribute('src', 'assets/Avatar1.png')
    } else {
        // SENAO ADICIONAR A IMAGEM PADRAO
        img.setAttribute('src', 'assets/avatar.png')
    }


    // PRIMEIRA MANEIRA PARA FAZER TROCA DE MODOS
    // SE EM HTML CLASS CONTEM LIGHT
    // if(html.classList.contains('light')){
    // REMOVA A CLASSE LIGHT
    //     html.classList.remove('light')
    // } else{
    // SENAO ADICIONE A CLASSE LIGHT
    //     html.classList.add('light')
    // }
}