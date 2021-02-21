const form = document.querySelector("form");
const email = document.querySelector("input");
const button = document.querySelector("button");

form.addEventListener("submit", event => {
    if (!email.value) {
        event.preventDefault();
        createError("Oops, looks like you forgot to add your email");
    } else if (!email.value.match(/\S+@\S+\.\S+/)) {
        event.preventDefault();
        createError("Please provide a valid email")
    };
});

// email.addEventListener("focus", () => email.classList.remove("errorEmail"));

const createError = message => {
    const previousErrors = document.querySelectorAll(".errorMessage, .errorIcon");
    for (let error of previousErrors) {
        error.remove();
    };
    const error = document.createElement("p");
    error.innerText = message;
    const icon = document.createElement("img");
    icon.src = "icon-error.svg";
    error.classList.add("loading");
    icon.classList.add("loading");
    form.append(error, icon);
    setTimeout(() => {
        error.classList.replace("loading", "errorMessage");
        icon.classList.replace("loading", "errorIcon");
        email.classList.add("errorEmail");
    }, 0);
    button.focus();
}