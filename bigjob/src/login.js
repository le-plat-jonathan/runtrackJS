window.addEventListener("DOMContentLoaded", (event) => {
    let data = JSON.parse(localStorage.getItem("userData"));

    const navAuth = document.querySelector("#navAuth");

    if (data){
        data.users.forEach(user => {
            if (user.admin === true) {
                navAuth.innerHTML= `
                <a class="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition" href="index.html">Planning</a>
                <a class="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition" href="backoffice.html">Backoffice</a>
                <a id="logOut" class="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition" href="register.html">Déconnexion</a>
                `
            } else {
                navAuth.innerHTML= `
                <a class="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition" href="index.html">Planning</a>
                <a id="logOut" class="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition" href="register.html">Déconnexion</a>
                `
            }
        });
    } else {
        navAuth.innerHTML= `
        <a class="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition" href="login.html">Connexion</a>
        <a class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600 transition sm:block" href="register.html">Inscription</a>
        `
    }

    let lougOutBtn = document.querySelector("#logOut");
    lougOutBtn.addEventListener('click', function () {
        localStorage.removeItem("userData");
    });

});

const formulaire = document.querySelector('form');

formulaire.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.querySelector("#Email").value;
    const password = document.querySelector("#Password").value;
    const showMessage = document.querySelector(".showMessage");
    let user = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage.innerHTML= `<h3 style="color:red">Veuillez fournir une adresse email valide</h3>`;
    } else if (email === "" || password === "") {
        showMessage.innerHTML= `<h3 style="color:red">Veuillez fournir un email valide et un mot de passe</h3>`;
    } else if (!email.includes('@laplateforme.io')) {
        showMessage.innerHTML= `<h3 style="color:red">L'adresse email doit appartenir au domaine laplateforme.io</h3>`;
    } else if (!password) {
        showMessage.innerHTML= `<h3 style="color:red">Veuillez saisir un mot de passe</h3>`;
    } else {
        if (email === "jonathan.le-plat@laplateforme.io") {
            user = {
                email: email,
                password: password,
                admin: true
            };
        } else {
            user = {
                email: email,
                password: password,
                admin: false
            };
        }

        let data = JSON.parse(localStorage.getItem('userData'));

        if (!data) {
            data = { users: [] };
        }

        data.users.push(user);

        localStorage.setItem('userData', JSON.stringify(data));

        formulaire.reset();
        showMessage.innerHTML= `<h3 style="color:green">Connexion réussie!</h3>`;

        const navAuth = document.querySelector("#navAuth");
        data.users.forEach(user => {
            if (!data) {
                navAuth.innerHTML= `
                <a class="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition" href="login.html">Connexion</a>
                <a class="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600 transition sm:block" href="register.html">Inscription</a>
                `
            } else if (user.admin === true) {
                navAuth.innerHTML= `
                <a class="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition" href="index.html">Planning</a>
                <a class="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition" href="backoffice.html">Backoffice</a>
                <a id="logOut" class="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition" href="register.html">Déconnexion</a>
                `
            }  else {
                navAuth.innerHTML= `
                <a class="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition" href="index.html">Planning</a>
                <a id="logOut" class="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition" href="register.html">Déconnexion</a>
                `
            }
            });

        let lougOutBtn = document.querySelector("#logOut");
        lougOutBtn.addEventListener('click', function () {
            localStorage.removeItem("userData");
        });
    }
});
