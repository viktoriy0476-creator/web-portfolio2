const btn = document.getElementById("loadUser");
const card = document.getElementById("userCard");

btn.addEventListener("click", async () => {
    card.innerHTML = "<p>Завантаження...</p>";

    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();

        const user = data.results[0];

        card.innerHTML = `
            <img src="${user.picture.large}">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>Email: ${user.email}</p>
            <p>Country: ${user.location.country}</p>
        `;
    } catch (error) {
        card.innerHTML = "<p style='color:red'>Помилка завантаження</p>";
    }
});
