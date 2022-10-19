function inicio(){
    let escolha = parseInt(prompt("Escolha qual dos Exercícios:\n1.) Algoritmo para ler 20 números e armazenar em um array \n2.) Algoritmo para ler 12 números informados pelo usuário e armazenar em dois arrays: com os números acima de 50 e  abaixo de 50 \n3.) Drofo e Topper estão em uma aventura mágica. Faça um programa que contenha um inventário para cada um dos dois aventureiros. \n4.) Sair"));
    
    switch (escolha){
        case 1:
            lerVinteNumeros();
            break;
        case 2:
            doisArrays();
            break;
        case 3:
            drofoETopper();
            break;
        case 4:
            sair();
            break;
        default:
            erro();
            break;
    }
}

function lerVinteNumeros(){
    let numeros = [];

    while(numeros.length < 20){
        let num = parseFloat(prompt("Digite um número:"));
        numeros.push(num);
    }

    alert("Os números digitados foram: " + numeros.toString());

    inicio();
}

function doisArrays(){
    let numMaiores50 = [];
    let numMenor50 = [];
    let contagem = 0;

    while(contagem < 12){
        let num = parseFloat(prompt("Digite um número: "));

        if(num > 50){
            numMaiores50.push(num);
        }else{
            numMenor50.push(num);
        }

        contagem++;
    }

    alert("Os números digitados maiores de 50 foram : \n" + numMaiores50.toString() + "\nOs números digitados menores de 50 foram: \n" + numMenor50.toString());
    inicio();
}

function drofoETopper(){
    let itensDrofo = ["Anel Invisibilidade", "Bota Mágica", "Bota Mágica", "Poção do Sono", "Poção Inocência", "Poção Inocência"];
    let itensTorper = ["Capa da Invisibilidade", "Pedra do Despertar", "Varinha das Varinhas", "Poção da Inocência", "Poção da Mentira", "Poção da Mentira", "Poção Anti-Inteligência"];

    /* AÇÕES DO TORPER */

    // Consumiu uma das poções da mentira
    itensTorper.splice(5,1);

    // Perdeu sua Pedra
    itensTorper.splice(1,1);

    // Ganhou um par de Botas Mágicas do Drofo
    itensDrofo.splice(2,1);
    itensTorper.push("Bota Mágica");

    // Achou um Escudo Mágico e uma Espada Mágica.
    itensTorper.splice(6, 0, "Escudo Mágico", "Espada Mágica");

    
    /* AÇÕES DO DROFO */

    // Ganhou mais uma bota mágica
    itensDrofo.push("Bota Mágica");

    // Usou sua Poção do Sono e consumiu a Poção Anti-Inteligência do Torper
    itensDrofo.splice(2,1);
    itensTorper.splice(4,1);
    
    // Encontrou um Ovo de Dragão e uma Coxinha
    itensDrofo.splice(5, 0, "Ovo de Dragão", "Coxinha");

    // Exiba o resultado final de cada um dos inventários utilizando "document.write".
    document.write("<strong>Itens do Drofo: </strong>" + itensDrofo.toString() + "<br><br>");
    document.write("<strong>Itens do Torper: </strong>" + itensTorper.toString() + "<br><br>");
    document.write("<button onclick='inicio()'>Voltar para o Menu</button>");

}

function sair(){
    let confirmarSaida = confirm("Você deseja sair?");

    if(confirmarSaida){
        window.close();
    }else{
        inicio()
    }
}

function erro(){
    alert("Selecione os números de 1 a 4.");
    inicio();
}

inicio();