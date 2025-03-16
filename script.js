async function getRandomJoke() {
    const response = await fetch("http://localhost:3000/api/jokes/random");
    const data = await response.json();
    document.getElementById("joke").textContent = data.content ? data.content : "Aucune blague trouvée";
}
