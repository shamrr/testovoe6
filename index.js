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
//обработка закрытия плашки с cookie
const acceptCookies = () => {
    const cookie = document.querySelector('#cookieAlert')
    cookie.style.display = "none";
}