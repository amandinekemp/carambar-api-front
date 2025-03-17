async function getRandomJoke() {
    const response = await fetch("http://localhost:3000/blagues/random");
    const data = await response.json();
    let jokeContent;
    if (data.content) {
        jokeContent = data.content + "<br><br>Réponse: " + data.answer;
    } else {
        jokeContent = "Aucune blague trouvée";
    }
    document.getElementById("joke").innerHTML = jokeContent;
}
