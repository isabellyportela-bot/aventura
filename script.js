let step = 0;
let path = [];

function makeChoice(choice) {
    const description = document.getElementById("description");
    const choices = document.getElementById("choices");
   
    // Salva a escolha para futuras decisões
    path.push(choice);

    if (step === 0) {
        if (choice === 'explorar') {
            description.textContent = "Você começa a explorar a sala de servidores, repleta de computadores antigos e telas piscando. Um arquivo corrompido chama sua atenção.";
            choices.innerHTML = `
                <button onclick="makeChoice('corrigir')">Tentar corrigir o arquivo</button>
                <button onclick="makeChoice('seguir')">Ignorar o arquivo e seguir em frente</button>
            `;
        } else if (choice === 'tela') {
            description.textContent = "A tela à sua frente começa a mostrar mensagens criptografadas. Você consegue entender algumas palavras: 'A Entidade observa.'";
            choices.innerHTML = `
                <button onclick="makeChoice('falar')">Tentar falar com a Entidade</button>
                <button onclick="makeChoice('ignorar')">Ignorar e seguir em frente</button>
            `;
        } else if (choice === 'voz') {
            description.textContent = "Você ouve uma voz suave que sussurra em seus ouvidos: 'Você não está sozinho aqui.' A voz parece familiar.";
            choices.innerHTML = `
                <button onclick="makeChoice('confiar')">Confiar na voz e seguir suas instruções</button>
                <button onclick="makeChoice('desconfiar')">Desconfiar e se afastar da voz</button>
            `;
        }
    } else if (step === 1) {
        if (choice === 'corrigir') {
            description.textContent = "Você tenta corrigir o arquivo, mas algo estranho acontece. O código se espalha pelo ambiente e tudo começa a distorcer. O sistema parece estar ganhando vida!";
            choices.innerHTML = `
                <button onclick="makeChoice('confrontar')">Confrontar a distorção</button>
                <button onclick="makeChoice('fugir')">Fugir do código distorcido</button>
            `;
        } else if (choice === 'seguir') {
            description.textContent = "Você segue em frente, ignorando o arquivo corrompido. Porém, algo começa a desmoronar ao seu redor. O sistema está se desfazendo.";
            choices.innerHTML = `
                <button onclick="makeChoice('explorar')">Voltar e tentar corrigir o arquivo</button>
                <button onclick="makeChoice('fugir')">Fugir da sala de servidores</button>
            `;
        } else if (choice === 'falar') {
            description.textContent = "Você tenta se comunicar com a Entidade, mas ela responde de forma enigmática: 'A resposta está no código. Você deve escolher.'";
            choices.innerHTML = `
                <button onclick="makeChoice('escolher')">Fazer uma escolha definitiva</button>
                <button onclick="makeChoice('ignorar')">Ignorar a Entidade e continuar sozinho</button>
            `;
        } else if (choice === 'ignorar') {
            description.textContent = "Você decide ignorar a tela e continuar. A escuridão ao seu redor se torna mais opressiva, e você começa a perder a sensação de tempo.";
            choices.innerHTML = `
                <button onclick="makeChoice('confiar')">Confiar em sua intuição e seguir em frente</button>
                <button onclick="makeChoice('desconfiar')">Desconfiar e procurar uma saída</button>
            `;
        } else if (choice === 'confiar') {
            description.textContent = "Você decide confiar na voz e seguir suas instruções. A voz guia você a uma sala secreta onde um grande mistério é revelado.";
            choices.innerHTML = `<button onclick="restartGame()">Recomeçar a jornada</button>`;
        } else if (choice === 'desconfiar') {
            description.textContent = "Você decide ignorar a voz e sair da sala. Mas algo estava errado. O sistema começa a se corromper mais rápido e você fica preso.";
            choices.innerHTML = `<button onclick="restartGame()">Recomeçar a jornada</button>`;
        }
    }
    step++;
}

function restartGame() {
    const description = document.getElementById("description");
    const choices = document.getElementById("choices");

    description.textContent = "Você acorda em um mundo digital desconhecido. O que você fará?";
    choices.innerHTML = `
        <button onclick="makeChoice('explorar')">Explorar a sala de servidores</button>
        <button onclick="makeChoice('tela')">Interagir com a tela misteriosa</button>
        <button onclick="makeChoice('voz')">Ouvir a voz misteriosa</button>
    `;
    step = 0;
    path = [];
}

