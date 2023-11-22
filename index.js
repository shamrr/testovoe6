//перенаправление на страницу благодарности
const form = document.querySelector(".form");
const openGratitudePage = (e) => {
    e.preventDefault();
    window.location.href = "pages/gratitude.html";
}
//перенаправление на главную страницу
const goToHomePage = () => {
    window.location.href = "/";
}