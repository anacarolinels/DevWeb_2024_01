 // Função para carregar os clãs disponíveis
 async function loadClans() {
    const response = await fetch('https://dattebayo-api.onrender.com/clans');
    const clans = await response.json();

    const clansSelect = document.getElementById('clans');

    clans.forEach(clan => {
        const option = document.createElement('option');
        option.value = clan;
        option.textContent = clan;
        clansSelect.appendChild(option);
    });
}

// Função para carregar os ninjas de um determinado clã
async function getNinjas() {
    const clanSelect = document.getElementById('clans');
    const clan = clanSelect.value;

    const response = await fetch(`https://dattebayo-api.onrender.com/characters/${clan}`);
    const ninjas = await response.json();

    const ninjasSelect = document.getElementById('ninjas');
    ninjasSelect.innerHTML = '<option value="">Selecione um ninja</option>';

    ninjas.forEach(ninja => {
        const option = document.createElement('option');
        option.value = ninja;
        option.textContent = ninja;
        ninjasSelect.appendChild(option);
    });
}

// Carregar os clãs quando a página for carregada
window.onload = loadClans;