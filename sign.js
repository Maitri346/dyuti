const container = document.querySelector(".wrapper");
const pwShowHide = document.querySelectorAll(".showHidePw");
const pwFields = document.querySelectorAll("input[type='password']");
const login = document.querySelector(".login-link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";
            } else {
                pwField.type = "password";
            }
        });

        // Toggle eye icon classes
        pwShowHide.forEach(icon => {
            if (icon.classList.contains("uil-eye")) {
                icon.classList.remove("uil-eye");
                icon.classList.add("uil-eye-slash");
            } else {
                icon.classList.remove("uil-eye-slash");
                icon.classList.add("uil-eye");
            }
        });
    });
});

login.addEventListener("click", () => {
    container.classList.remove("active");
});