/**
 * func.js
 * Funções utilitárias para adicionar funcionalidades ao seu portfólio.
 */

// Exemplo: Alternar tema claro/escuro
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Exemplo: Rolagem suave para seções
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Exemplo: Mostrar mensagem de boas-vindas
function showWelcomeMessage() {
    alert('Bem-vindo ao meu portfólio!');
}

// Exemplo: Copiar texto para área de transferência
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => alert('Texto copiado!'))
        .catch(() => alert('Falha ao copiar texto.'));
}

// Função para mostrar/ocultar abas
function showTab(tabId, btn) {
    const tabs = ['inicio', 'sobre-mim', 'sumarios'];
    tabs.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.style.display = (id === tabId) ? 'block' : 'none';
        }
    });
    // Destacar aba ativa
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    // Esconder detalhe da aula se mudar de aba
    if(tabId !== 'sumarios') {
        const detalhe = document.getElementById('aula-detalhe');
        if(detalhe) detalhe.style.display = 'none';
    }
}

// Dados das aulas
const aulasDetalhes = {
    1: {
        titulo: "Aula 1: Apresentação",
        data: "10/09/2025",
        texto: "Apresentação do professor e dos alunos. Enquadramento da disciplina Aplicações Informáticas B: objetivos, conteúdos programáticos e metodologia de trabalho. Apresentação das normas e regras de funcionamento da disciplina. Esclarecimento sobre critérios de avaliação.",
        materiais: [
            { nome: "Apresentação PDF", link: "#" },
            { nome: "Resumo da Aula", link: "#" }
        ],
        opiniao: "Uma boa introdução à disciplina, com esclarecimentos importantes sobre o funcionamento e expectativas."
    },
    2: {
        titulo: "Aula 2: Introdução aos conceitos fundamentais",
        data: "19/09/2025",
        texto: "Introdução aos conceitos fundamentais de linguagem natural e linguagem formal. Definição e importância da programação no contexto das aplicações informáticas. Conceito de algoritmo: características e papel na resolução de problemas. Apresentação do pseudocódigo como forma estruturada de representação de algoritmos. Exemplificação inicial e breve exploração prática.",
        materiais: [
            { nome: "Slides da Aula", link: "#" },
            { nome: "Exercícios Práticos", link: "#" }
        ],
        opiniao: "Conteúdos essenciais para compreender a base da programação e desenvolvimento de software."
    },
    3: {
        titulo: "Aula 3: Introdução ao ePortfólio",
        data: "19/09/2025",
        texto: "Introdução ao ePortfólio da disciplina: conceito, objetivos e importância para a aprendizagem e avaliação. Estrutura e ferramentas a utilizar na construção do Portfolio. Organização inicial do trabalho dos alunos.",
        materiais: [
            { nome: "Material de Apoio", link: "#" }
        ],
        opiniao: "Uma aula útil para entender como documentar e refletir sobre o aprendizado ao longo do periodo escolar."
    },
    4: {
        titulo: "Aula 4: Resolução de exercícios práticos",
        data: "25/09/2025",
        texto: "Resolução de exercícios práticos de modo a rever, aplicar e consolidar os conteúdos abordados até ao momento.",
        materiais: [
            { nome: "Código Exemplo", link: "#" },
            { nome: "Slides", link: "#" }
        ],
        opiniao: "Exercícios práticos que ajudaram a fixar os conceitos aprendidos."
    },
    5: {
        titulo: "Aula 5: Resolução de exercícios práticos",
        data: "26/09/2025",
        texto: "Resolução de exercícios práticos de modo a rever, aplicar e consolidar os conteúdos abordados até ao momento.",
        materiais: [
            { nome: "Mapa de Redes", link: "#" }
        ],
        opiniao: "Exercícios práticos que ajudaram a fixar os conceitos aprendidos."
    },
    6: {
        titulo: "Aula 6: Resolução de exercícios práticos",
        data: "26/09/2025",
        texto: "Resolução de exercícios práticos de modo a rever, aplicar e consolidar os conteúdos abordados até ao momento.",
        materiais: [
            { nome: "Slides Aula 6", link: "#" },
            { nome: "Exercícios Práticos", link: "#" }
        ],
        opiniao: "Exercícios práticos que ajudaram a fixar os conceitos aprendidos."
    },
    7: {
        titulo: "Aula 7: Resolução de exercícios práticos",
        data: "02/10/2025",
        texto: "Resolução de exercícios práticos de modo a rever, aplicar e consolidar os conteúdos abordados até ao momento.",
        materiais: [
            { nome: "Slides Aula 7", link: "#" },
            { nome: "Exercícios Práticos", link: "#" }
        ],
        opiniao: "Exercícios práticos que ajudaram a fixar os conceitos aprendidos."
    }, 
    8: {
        titulo: "Aula 8: Introdução ao Python",
        data: "03/10/2025",
        texto: "Introdução à linguagem de programação Python: características e aplicações. Utilizar um IDE para desenvolvimento e execução de programas. Identificar diferentes tipos de dados. Utilizar variáveis em programas. Elaborar programas em ambiente de consola.",
        materiais: [
            { nome: "Slides Aula 8", link: "#" },
            { nome: "Exercícios Práticos", link: "#" }
        ],
        opiniao: "Uma introdução clara e prática ao Python, facilitando o início na programação."
    }, 
    9: {
        titulo: "Aula 9: Resolução de exercícios práticos",
        data: "03/10/2025",
        texto: "Resolução de exercícios práticos utilizando a linguagem de programação Python de forma a rever, aplicar e consolidar os conteúdos.",
        materiais: [
            { nome: "Slides Aula 9", link: "#" },
            { nome: "Exercícios Práticos", link: "#" }
        ],
        opiniao: "Exercícios práticos que ajudaram a fixar os conceitos aprendidos em Python."
    }
}



function showAulaDetalhe(aulaNum) {
    const detalhe = aulasDetalhes[aulaNum];
    if (!detalhe) return;
    document.getElementById('sumarios').style.display = 'none';
    document.getElementById('aula-detalhe').style.display = 'block';
    let html = `
        <h2>${detalhe.titulo}</h2>
        <div class="sumario-header">
            <span class="sumario-label">Sumário:</span>
            <span class="sumario-data">Data: ${detalhe.data}</span>
        </div>
        <p style="margin-top:18px;">${detalhe.texto}</p>
        <div class="materiais-opiniao">
            <div class="materiais">
                <h3>Materiais da Aula:</h3>
            </div>
            <div class="opiniao">
                <h3>Minha Opinião:</h3>
                <p>${detalhe.opiniao || "Ainda não escrevi a opinião desta aula."}</p>
            </div>
        </div>
    `;
    document.getElementById('aula-detalhe-conteudo').innerHTML = html;
}





function voltarSumarios() {
    document.getElementById('aula-detalhe').style.display = 'none';
    document.getElementById('sumarios').style.display = 'block';
}

// Mostrar a aba "inicio" ao carregar a página
window.onload = function() {
    showTab('inicio', document.querySelector('.tab-btn'));
};

function showTab(tabId, btn) {
    const tabs = ['inicio', 'sobre-mim', 'sumarios', 'bibliografia']; // <-- adicionei bibliografia
    tabs.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.style.display = (id === tabId) ? 'block' : 'none';
        }
    });
    // Destacar aba ativa
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    // Esconder detalhe da aula se mudar de aba
    if(tabId !== 'sumarios') {
        const detalhe = document.getElementById('aula-detalhe');
        if(detalhe) detalhe.style.display = 'none';
    }
}
