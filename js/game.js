/* VARIAVEIS DE CONTROLE DO NOSSO JOGO */
var qtdPerguntas = 3;
const perguntasFeitas = [];

//PERGUNTAS DO JOGO
const perguntas = [
    // PERGUNTA 0
    {
        pergunta: "Qual dessas linguagens não é considerado liguagem de programaçao?",
        respostas: ["PHP", "Javascript", "C++", "HTML"],
        correta: "resp3"
    },
    // PERGUNTA 1
    {
        pergunta: "Em que ano o Brasil foi descoberto?", 
        respostas: ["1498", "1500", "1375", "1828"], 
        correta: "resp1"
    },
    // PERGUNTA 2
    {
        pergunta: "Oque significa a Sigla HTML", 
        respostas: ["Hyper tonto maluco legal", "Hyper Text Markup languagem", "Hey Trade More Languagem", "Hyper text mark"], 
        correta: "resp1"
    },
    // PERGUNTA 3
    {
        pergunta: "Quais dessas Linguagens são consideradas Limguagens de Marcaçao", 
        respostas: ["HTML", "Javascript", "C++", "PHP"],
        correta: "resp0"
    },
]

var qtdPerguntas = perguntas.length - 1;

gerarPergunta(qtdPerguntas);

function gerarPergunta(maxPerguntas) {
     //GERAR UM NUMERO ALEATORIO
     let aleatorio = (Math.random() * maxPerguntas).toFixed();
     // CONVERTER PARA NUMERO
     aleatorio = Number(aleatorio);
     // MOSTRAR NO CONSOLE QUAL FOI A PERGUNTA SORTEADO
     console.log('A pergunta sorteado foi a:' + aleatorio);

     // VERIFICAR SE A PERGUNTA SORTEADA Jà FOI FEITA
     if(!perguntasFeitas.includes(aleatoria)) {
        // COLOCAR COMO PERGUNTA FEITA
        perguntasFeitas.push(aleatorio);

        // PREENCHER HTML COM OS DADOS DA QUESTAO SORTEADA
        var p_selecionada = perguntas[aleatorio].pergunta;
        console.log(p_selecionada);
        
     }

}



