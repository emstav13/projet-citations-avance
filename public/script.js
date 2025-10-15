async function chargerCitation() {


    document.getElementById('citation').innerText = "La vie est belle - Auteur inconnu";
}

document.getElementById('nouvelle').addEventListener('click', chargerCitation);
window.onload = chargerCitation;
