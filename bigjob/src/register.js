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

    const prenom = document.querySelector("#FirstName").value;
    const nom = document.querySelector("#LastName").value;
    const email = document.querySelector("#Email").value;
    const password = document.querySelector("#Password").value;
    let newUser = {};

    if (email === "jonathan.le-plat@laplateforme.io") {
        newUser = {
            nom: nom,
            prenom: prenom,
            email: email,
            password: password,
            admin: true
        };
    } else {
        newUser = {
            nom: nom,
            prenom: prenom,
            email: email,
            password: password,
            admin: false
        };
    }
 
    let data = JSON.parse(localStorage.getItem('userData'));

    if (!data) {
        data = { users: [] };
    }

    data.users.push(newUser);

    localStorage.setItem('userData', JSON.stringify(data));

    formulaire.reset();
    const showMessage = document.querySelector(".showMessage");
    showMessage.innerHTML= `<h3 style="color:green">Compte créé avec succès!</h3>`;

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
        localStorage.removeItem("connectedUser");
    });
});
