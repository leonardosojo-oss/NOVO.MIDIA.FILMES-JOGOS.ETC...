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

    lista.forEach(item => {
        const card = document.createElement(`div`);
        card.className = 'card';

        card.innerHTML = `
        <div>
        <span class="tag-categoria">${item.categoria}</span>
        <h3>${item.titulo}</h3>
        <p class="info">Plataforma: ${item.plataforma}</p>
        <p class="info">Nota: <span class="nota">${item.notatoFixed(1)}</span></p>
        <p class="info">Status: <strong>${item.status}</strong></p>
        <div>

        
        `
    });
}



document.addEventListener('DOMContentLoaded',carregarCatalogo);