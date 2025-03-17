async function getRandomJoke() {
    const apiurl = "https://carambar-api-5ec1.onrender.com";
    const response = await fetch(apiurl+"/v1/blagues/random");
    const data = await response.json();
    let jokeContent;
    if (data.content) {
        jokeContent = data.content + "<br><br>Réponse: " + data.answer;
    } else {
        jokeContent = "Aucune blague trouvée";
    }
    document.getElementById("joke").innerHTML = jokeContent;
}
