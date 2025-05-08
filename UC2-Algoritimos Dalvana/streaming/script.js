//dados dos filmes com imagens armazenadas localmente na pasta "imagens"

const filmes ={

    // Acao

    acao: [
        {
        titulo: "Mad Max: Estrada da Furia",
        diretor: "George Miller",
        elenco: "Tom Hady, Charlize Therton, Nicholas Hoult",
        sinopse: "Em um futuro pós-apcalíptico, Max se junta a Furiosa em um missão para escapar de um tirano que controla o deserto.",
        imagem:"imagens/MADMAX.jpg",

        },
    ],
        acao:
        [
        {
            titulo:"Ate o Ultimo Homem ",
            diretor:"Mel Gibson",
            elenco:"Andrew Garfield, Sam Worthington, luke bracey, Teresa palmer",
            sinopse:" a história verídica de Desmond Doss, um soldado americano que se recusou a carregar um rifle e matar durante a Segunda Guerra Mundial. Doss trabalhou na ala médica durante a Batalha de Okinawa e salvou mais de 75 homens, sendo condecorado. O filme acompanha a história de Desmond desde a juventude até a fase adulta, quando ele resolve seguir uma carreira na medicina.",
            imagem:"imagens/ATEOULTIMOHOMEM.jpg",
        },
    ],
        acao:
        [
            {
                titulo:"Um Espião e Meio",
                diretor:"Rawson Marshall Thurber",
                elenco:" Dwayne johnson, Kenvin Hart",
                sinopse:"Narra a aventura de dois ex-colegas de classe que se reencontram 20 anos depois. Bob, um ex-nerd que virou um agente da CIA, recruta Calvin, um ex-valentão que virou um contador, para uma missão perigosa. Eles terão que lidar com tiroteios, traição e humor.",
                imagem:"imagens/UMESPIAOEMEIO",
            },
        ],
        acao:
        [
            {
                titulo:" Bad Boys: Até o Fim ",
                diretor:" adil e bilall ",
                elenco:" Will smith, Martin Larence ",
                sinopse:"Bad Boys 4: Até o Fim é um filme que marca o retorno dos policiais Mike e Marcus. Quando o capitão Howard é acusado de ligação com o cartel de drogas, os Bad Boys decidem investigar a situação para limpar o seu nome e encontrar os verdadeiros culpados  ",
                imagem:"imagens/BADBOYS4",
            }
        ],

        // Romance

        romance:
        [
            {
                titulo:"o date perfeito",
                diretor:"chris nelson",
                elenco:"Noah Centineo, Laura Marano, Odiseas Georgiadis, Camila Mendes",
                sinopse:" a história de Brooks, um jovem que precisa de dinheiro para pagar pela faculdade. Ele decide criar um aplicativo que permite contratar um namorado para todo tipo de situação imaginável. Porém, adotar uma personalidade e um par romântico diferente para cada dia a se mostra uma tarefa difícil e ele começa a se perguntar quem ele é de verdade e como encontrar o amor verdadeiro. ",
                imagem:"imagens/ODATEPERFEITO",
            }
        ],
        romance:
        [
            {
                titulo:"Para Todos os Garotos que Já Amei",
                diretor:"Susan Johnson",
                elenco:"lana condor, Noah Centineo",
                sinopse:" A história é baseada no romance de Jenny Han e gira em torno de Lara Jean, que escreve cartas de amor secretas para seus paqueras, mas que um dia são misteriosamente enviadas.",
                imagem:"imagens/PARATODOSOSGAROTOSQUEJAAMEI",
            }
        ],
        romance:
        [
            {
                titulo:"Sua Culpa",
                diretor:"Domingo Gonzalez",
                elenco:"Nicole Wallace, Gabriel Guevara",
                sinopse:"a história de amor entre Noah e Nick, que parece inquebrável, apesar dos truques de seus pais para separá-los. No entanto, o trabalho de Nick e a entrada de Noah na faculdade abrem suas vidas para novos relacionamentos.",
                imagem:"imagens/SUACULPA",
            }
        ],

        // ficcaoCientifica

        ficcaoCientifica:
        [
            {
                titulo:"Jogador Nº1 ",
            diretor:"Steven Spielberg",
            elenco:"Tye Sheridan, Olivia Cooke, Ben Mendelsohn, Lena Waithe",
            sinopse:" A história se passa em um futuro distópico, onde o protagonista, Wade Watts, participa de uma competição em um mundo virtual chamado OASIS, em busca de um Ovo da Páscoa que promete uma imensa fortuna ao vencedor. O filme explora temas de cultura pop e a luta por liberdade em um mundo dominado pela tecnologia.",
            imagem:"imagens/JOGADORN1",
            }
        ],
        ficcaoCientifica:
        [
            {
                titulo:"PIXELS",
                diretor:"Chris Columbus",
                elenco:"Adam Sandler, Kevin James, Michelle Monaghan, Peter Dinklage, Josh Gad",
                sinopse:"a história de uma invasão alienígena que usa jogos de arcade clássicos como modelos para suas várias ofensivas. O presidente Will Cooper busca ajuda de seu melhor amigo de infância Sam Brenner, um campeão de competições de vídeo-games nos anos 80, para liderar uma equipe de jogadores veteranos, derrotar os alienígenas e salvar o planeta. Os alienígenas invadem a Terra e tudo o que veem transformam em pixels.",
                imagem:"imagens/PIXELS",
            }
        ],
        ficcaoCientifica:
        [
            {
                titulo:"WALL. E",
                diretor:" Andrew Stanton",
                elenco:"Ben Burtt, elissa knigth, jaff garlin, fred wilard ",
                sinopse:"A história de um robô chamado WALL-E, criado no ano de 2100 para limpar a Terra coberta por lixo. Ele se apaixona por um outro robô, chamado EVA, que tem a missão de encontrar pelo menos uma planta na superfície do planeta Terra",
                imagem:"imagens/WALLE",
            }
        ]
    }

//funçao para criar os filmes e exibilos no html
function exibirFilmes() {
    // obter os conteineres de cadacategoria
    const acaoContainer = document.getElementById("acao")
    const romanceContainer = document.getElementById("romance")
    const ficcaoCientificaContainer = document.getElementById("ficcaoCientifica")

    //funcao para exibir filmes e exibi-los no html
    function exibirCategoria(filmes, container) {
        filmes.forEach(filme => {
            const divFilme = document.createElement("div")
            divFilme.classList.add("filme")
            divFilme.innerHTML = `
            <img src = "${filme.imagem}" alt"${filme.titulo}">
            <h3>${filme.titulo}</h3>
            <p><strong>Diretor: </strong> ${filme.diretor}</p>
            <p><strong>elenco: </strong> ${filme.elenco}</p>
            <p><strong>sinopse: </strong> ${filme.sinopse}</p>
            `
            container.appendChild(divFilme)
        });
    }
    // exibir filmes para cada categoria
    exibirCategoria(filmes.acao, acaoContainer)
    exibirCategoria(filmes.romance, romanceContainer)
    exibirCategoria(filmes.ficcaoCientifica, ficcaoCientificaContainer)

}
// chamar a funcao para exibir os filmes
exibirFilmes()























