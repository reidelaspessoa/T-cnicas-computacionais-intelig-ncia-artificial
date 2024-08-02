const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas'); 
const caixaAlternativas = document.querySelector('.caixa-alternativas');   
const caixaResultado = document.querySelector('.caixa-resultado'); 
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
    enunciado: "Qual país tem o maior índice de pobreza?",
    alternativas: [
        {
            texto:"África", 
            afirmação:""
        },
        { 
            texto: "Somália", 
            afirmação: ""
        },
        {
            texto: "Suíça",
            afirmação: "" 
        },
        {
            texto: "Cuba",
            afirmação: ""
        }
    ]
},
    {
    enunciado: "Qual o estado brasileiro mais racista?",
    alternativas: [
        {
            texto: "São Paulo", 
            afirmação: "" 
        },
        {
            texto: "Paraná", 
            afirmação: "" 
        },
        {
            texto: "Rio Granda do Sul", 
            afirmação: "" 
        },
        {
            texto: "Santa Catarina",
            afirmação: ""
        }
    ]
},
    {
    enunciado: "Qual dos seguintes fatores é mais frequentemente citado como uma causa primária da desigualdade social em sociedades modernas?",
    alternativas: [
        {
            texto: "Distribuição desigual de riqueza e renda", 
            afirmação: "" 
        },
        {
            texto: "Localização geográfica", 
            afirmação: "" 
        },
        {
            texto: "Preferências culturais", 
            afirmação: "" 
        },
        {
            texto: "Condições climáticas",
            afirmação: ""
        }
    ]
},
    ];

    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";

    function mostraPergunta() {
        if (atual >= perguntas.length) {
            mostraResultado();
            return;

        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.textContent = " ";
        mostraAlternativas();
        }
        function mostraAlternativas() {
            for (const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = 
            document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
            }
        }
        function mostraResultado() {
            caixaPerguntas.textContent = "As perguntas abordam temas relevantes sobre desigualdade social: o primeiro questiona qual país possui o maior índice de pobreza e o segundo busca identificar o estado brasileiro mais racista. A última questão se concentra em investigar qual dos fatores, dentre os apresentados, é mais frequentemente apontado como causa primária da desigualdade social em sociedades modernas.";
            textoResultado.textContent = historiaFinal;
            caixaAlternativas.textContent = " ";
            }
        function respostaSelecionada(opcaoSelecionada) {
            const afirmacoes = opcaoSelecionada.afirmação;
            historiaFinal = afirmacoes + " ";
            atual++;
            mostraPergunta();
            }
        mostraPergunta();