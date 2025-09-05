const textElement = document.getElementById('game-text');
const optionsElement = document.getElementById('options-container');

// O estado inicial do jogo, pode ter mais coisas como inventário e vida.
let gameState = {};

// As diferentes "cenas" do seu jogo.
const scenes = {
    start: {
        text: 'Você está no início de uma floresta. O que você faz?',
        options: [
            { text: 'Entrar na floresta', nextScene: 'path' },
            { text: 'Voltar para casa', nextScene: 'end' }
        ]
    },
    path: {
        text: 'Você caminha por uma trilha estreita. Você ouve um barulho. Um coelho pula da moita à sua frente. Que ação você toma?',
        options: [
            { text: 'Continuar andando', nextScene: 'continue' },
            { text: 'Investigar a moita', nextScene: 'bush' }
        ]
    },
    bush: {
        text: 'Você investiga a moita e encontra uma chave brilhante! Agora você pode abrir a próxima porta do jogo.',
        options: [
            { text: 'Pegar a chave e continuar', nextScene: 'continue' }
        ]
    },
    continue: {
        text: 'Você continua andando e chega em um grande lago.',
        options: [
            { text: 'Ir nadar no lago', nextScene: 'lake' },
            { text: 'Contornar o lago', nextScene: 'around' }
        ]
    },
    lake: {
        text: 'O lago está gelado, mas você se sente revigorado.',
        options: [
            { text: 'Continuar a exploração', nextScene: 'end' }
        ]
    },
    around: {
        text: 'Você contorna o lago e vê um antigo templo. É aqui que sua jornada termina... por enquanto.',
        options: [
            { text: 'Reiniciar o jogo', nextScene: 'start' }
        ]
    },
    end: {
        text: 'Fim do jogo. Obrigado por jogar!',
        options: [
            { text: 'Reiniciar', nextScene: 'start' }
        ]
    }
};

function startGame() {
    gameState = {};
    showScene('start');
}

function showScene(sceneName) {
    const scene = scenes[sceneName];
    textElement.innerText = scene.text;
    
    // Limpar as opções antigas
    while (optionsElement.firstChild) {
        optionsElement.removeChild(optionsElement.firstChild);
    }
    
    // Criar os botões de opção
    scene.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option-button');
        button.innerText = option.text;
        button.addEventListener('click', () => selectOption(option));
        optionsElement.appendChild(button);
    });
}

function selectOption(option) {
    const nextScene = option.nextScene;
    showScene(nextScene);
}

// Iniciar o jogo quando a página carrega
startGame();