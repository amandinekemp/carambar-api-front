document.getElementById("getJoke").addEventListener("click", async () => {
    const response = await fetch("https://your-api-url.com/api/jokes/random");
    const data = await response.json();
    document.getElementById("joke").textContent = data.content;
});
