document.querySelector("form").addEventListener("submit", function(event) {
    let isValid = true;

    document.querySelectorAll(".error").forEach(function(el) {
        el.textContent = "";
    });


    const name = document.querySelector("input[name='name']").value;
    if (name.trim() === "") {
        isValid = false;
        document.querySelector("input[name='name']").nextElementSibling.textContent = "Please enter a name.";
    }


    const email = document.querySelector("input[name='email']").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.querySelector("input[name='email']").nextElementSibling.textContent = "Please enter a valid email address.";
    }


    const password = document.querySelector("input[name='password']").value;
    if (password.length < 6) {
        isValid = false;
        document.querySelector("input[name='password']").nextElementSibling.textContent = "Password must be at least 6 characters.";
    }


    const confirmPassword = document.querySelector("input[name='confirm_password']").value;
    if (password !== confirmPassword) {
        isValid = false;
        document.querySelector("input[name='confirm_password']").nextElementSibling.textContent = "Passwords do not match.";
    }

    if (!isValid) {
        event.preventDefault(); 
    }
});

