console.log('testando');

const dictionaryApiKey = "e6878e10-3c0e-4668-b970-e6ddfda9df43";

// Função para buscar dados da API do dicionário
async function getDictionaryData() {
    const word = document.getElementById("word").value;
    if (!word) {
        alert("Please enter a word!");
        return;
    }

    const url = `https://www.dictionaryapi.com/api/v3/references/spanish/json/${word}?key=${dictionaryApiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        const definitionDiv = document.getElementById("definition");
        definitionDiv.innerHTML = "";

        if (data.length > 0 && typeof data[0] === "object" && data[0].shortdef) {
            definitionDiv.innerHTML = `<h3>${word}</h3><p>${data[0].shortdef.join(", ")}</p>`;
        } else {
            definitionDiv.innerHTML = `<p>Word not found.</p>`;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("definition").innerHTML = `<p>Error fetching data. Try again later.</p>`;
    }
}

// Adicionar evento ao botão de pesquisa
document.getElementById("searchButton").addEventListener("click", getDictionaryData);
