alert('Seja bem vindo!')

/*
    quando clicar na seta pra avancçar temos que esconder todas as 
    imagens e mostrar a próxima imagem 

        a imagem atual começa em 0 pq é a primeira imagem
        assim que for clicado no avançar eu preciso adicionar mais 1 ao contardor de imagens
        pra poder saber que agora eu vou mostrar a segunda imagem 

        esconder todas as imagens 
            pegar todas as imagens usando o DOM e remover a classe mostrar 

        mostrar a próxima imagem 
            pegar todas as imagens , descobrir qual é a próxima , e colocar a classe 
            mostrar nela 
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;


/*quando clicar na seta pra avancçar temos que esconder todas as 
    imagens e mostrar a próxima imagem 

 */

setaAvancar.addEventListener('click', function () {

    /*testa se o contador da imagemAtual e´igual ao total de images  */
    const totalDeImagens = imagensPainel.length - 1;
    if (imagemAtual === totalDeImagens) {
        return;
    }

    /*a imagem atual começa em 0 pq é a primeira imagem
        assim que for clicado no avançar eu preciso adicionar mais 1 ao contardor de imagens
        pra poder saber que agora eu vou mostrar a segunda imagem 
     */
    imagemAtual++;

    /*esconder todas as imagens 
            pegar todas as imagens usando o DOM e remover a classe mostrar 
     */
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    /*mostrar a próxima imagem 
            pegar todas as imagens , descobrir qual é a próxima , e colocar a classe 
            mostrar nela 
     */
    imagensPainel[imagemAtual].classList.add('mostrar');
});

/*quando clicar na seta pra voltar temos que esconder todas as 
    imagens e mostrar a  imagem anterior

 */

setaVoltar.addEventListener('click', function () {

    if (imagemAtual === 0) {
        console.log('não tem mais como voltar')
        return;
    }

    imagemAtual--;

    /*esconder todas as imagens 
            pegar todas as imagens usando o DOM e remover a classe mostrar 
     */
            imagensPainel.forEach(imagem => {
                imagem.classList.remove('mostrar')
            });
                /*mostrar a imagem anterior
            pegar todas as imagens , descobrir qual é a próxima , e colocar a classe 
            mostrar nela 
     */
    imagensPainel[imagemAtual].classList.add('mostrar');

            
})