let colecaoMidia = []

async function carregarCatalogo() {
    const container_card = document.getElementById('catalogo-grid');
    container_card.innerHTML = "<p>Carregando itens, aguarde.</p>";
    
    try{
        const resposta = await fetch('dados.json');
        if(!resposta.ok) throw new Error('Erro ao buscar dados');

        colecaoMidia = await resposta.jsom();
    }catch(erro){
        container_card.innerHTML = `<p style ="color:#ef4444;">
        Erro ao carregar catálogo: ${erro.message}</p>`;

    }
}

function renderizarGrid(lista){
    const container = document.getElementById('catalogo-grid');
    container.innerHTML = "";

    if(lista.length ===0){
        container.innerHTML = `<p class="info">Nenhum item cadastrato nesta categoria</p>`;
        return;
    }
}

document.addEventListener('DOMContentLoaded',carregarCatalogo);