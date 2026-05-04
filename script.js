// javascript

console.log("Website Loaded");

// Example: simple alert on form submit
document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector(".contact-form");

if (form) {
form.addEventListener("submit", (e) => {
e.preventDefault();
alert("Message sent successfully!");
});
}
});