document.getElementById("formulaire").addEventListener("submit", function(event) {
    event.preventDefault();

    validateField("nom", "erreur_nom", "Le champ Nom est obligatoire.");
    validateField("prenom", "erreur_prenom", "Le champ Prénom est obligatoire.");
    validateField("email", "erreur_email", "Veuillez saisir une adresse email valide.");
    validateField("password", "erreur_password", "Le champ Mot de passe est obligatoire.");
    validateField("adresse", "erreur_adresse", "Le champ Adresse est obligatoire.");
    validateField("codepostal", "erreur_codepostal", "Le champ Code postal est obligatoire.");

    if (validateForm()) {
        this.submit();
    }
});

function validateField(fieldName, errorId, errorMessage) {
    const fieldValue = document.getElementById(fieldName).value;
    const errorElement = document.getElementById(errorId);

    setTimeout(function() {
        if (fieldValue.trim() === "") {
            errorElement.textContent = errorMessage;
        } else {
            errorElement.textContent = "";
        }
    }, 500);
}

function validateForm() {
    const errors = document.querySelectorAll(".erreur");
    let isValid = true;

    errors.forEach(function(error) {
        if (error.textContent !== "") {
            isValid = false;
        }
    });

    return isValid;
}

document.getElementById("showPassword").addEventListener("input", togglePasswordVisibility);

function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const checkBox = document.getElementById("showPassword");

    if (checkBox.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

//////////////////////////////////////////////////////////// Check nom ////////////////////////////////////////////////////////////

document.getElementById("nom").addEventListener("change", function() {
    checkLastName();
});

function checkLastName() {
    let name = document.getElementById("nom").value;
    let specCarContent = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(name);
    let errorMessage = "";
    let errorElement = document.getElementById("erreur_nom");

    if (name.length < 3 && specCarContent) {
        errorMessage = "Le nom doit contenir au moins 3 caractères et ne peut pas contenir de caractère spécial.";
        errorElement.style.color = "red";
    } else if (name.length < 3 && !specCarContent) {
        errorMessage = "Le nom doit contenir au moins 3 caractères.";
        errorElement.style.color = "red";
    } else if (name.length >= 3 && specCarContent) {
        errorMessage = "Le nom ne peut pas contenir de caractère spécial.";
        errorElement.style.color = "red";
    }

    errorElement.textContent = errorMessage;

    document.getElementById("erreur_nom").textContent = errorMessage;

    return errorMessage === "";
}

//////////////////////////////////////////////////////////// Check prénom ////////////////////////////////////////////////////////////

document.getElementById("prenom").addEventListener("change", function() {
    checkFirstName();
});

function checkFirstName() {
    let prenom = document.getElementById("prenom").value;
    let specCarContent = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(prenom);
    let errorMessage = "";
    let errorElement = document.getElementById("erreur_prenom");

    if (prenom.length < 3 && specCarContent) {
        errorMessage = "Le prénom doit contenir au moins 3 caractères et ne peut pas contenir de caractère spécial.";
        errorElement.style.color = "red";
    }else if (prenom.length < 3 && !specCarContent) {
        errorMessage = "Le prénom doit contenir au moins 3 caractères.";
        errorElement.style.color = "red";
    } else if (prenom.length >= 3 && specCarContent) {
        errorMessage = "Le prénom ne peut pas contenir de caractère spécial.";
        errorElement.style.color = "red";
    }

    errorElement.textContent = errorMessage;

    document.getElementById("erreur_prenom").textContent = errorMessage;

    return errorMessage === "";
}

//////////////////////////////////////////////////////////// Check mail ////////////////////////////////////////////////////////////

document.getElementById("email").addEventListener("change", function() {
    checkEmail();
});

function checkEmail() {
    let email = document.getElementById("email").value;
    let errorMessage = "";
    let googleDomaine = /@gmail.com/.test(email);
    let errorElement = document.getElementById("erreur_email");

    if (email.length < 8) {
        errorMessage = "L'email doit contenir au moins 8 caractères";
        errorElement.style.color = "red";
    } else if (email.length >= 8 && !googleDomaine) {
        errorMessage = "L'email doit appartenir au domaine gmail.";
        errorElement.style.color = "red";
    }

    errorElement.textContent = errorMessage;

    document.getElementById("erreur_email").textContent = errorMessage;

    return errorMessage === "";
}


//////////////////////////////////////////////////////////// Check password ////////////////////////////////////////////////////////////

document.getElementById("password").addEventListener("change", function() {
    checkPassword();
});

function checkPassword() {
    let password = document.getElementById("password").value;
    let contientMajuscule = /[A-Z]/.test(password);
    let specCarContent = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
    let errorMessage = "";
    let errorElement = document.getElementById("erreur_password");

    if (password.length < 8 && !contientMajuscule && !specCarContent) {
        errorMessage = "Le mot de passe doit contenir au moins 8 caractères, une majuscule et un caractère spécial.";
        errorElement.style.color = "red";
    } else if (password.length > 8 && !contientMajuscule && !specCarContent) {
        errorMessage = "Le mot de passe doit contenir au moins une lettre majuscule et un caractère spécial.";
        errorElement.style.color = "red";
    } else if (!specCarContent) {
        errorMessage = "Le mot de passe doit contenir au moins un caractère spécial.";
        errorElement.style.color = "red";
    } else if (!contientMajuscule) {
        errorMessage = "Le mot de passe doit contenir au moins une majuscule.";
        errorElement.style.color = "red";
    } else {
        errorMessage = "Mot de passe valide.";
        errorElement.style.color = "green";
    }

    errorElement.textContent = errorMessage;

    document.getElementById("erreur_password").textContent = errorMessage;

    return errorMessage === "";
}
