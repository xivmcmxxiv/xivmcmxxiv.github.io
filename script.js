var showInfo = document.querySelector(".info-btn");
var contacts = document.querySelector(".contacts");

showInfo.addEventListener("click", function () {
    contacts.classList.toggle("visible");
});
