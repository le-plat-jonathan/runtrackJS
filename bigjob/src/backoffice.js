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
function fetchData() {
    fetch('database.json')
    .then(response => response.json())
    .then(data => {
        const users = data.users;
        const nav = document.querySelector('.flex-col');
        let userCount = 0;
        
        users.forEach(user => {
            const { nom, prenom, email, admin  } = user;
        
            if (admin === true) {
            const html = `
                <div style="border-bottom: 1px solid gray; border-radius: 0" role="button" class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    <div class="grid mr-4 place-items-center">
                        <img style="height: 6rem; width: 6rem" alt="Profile Picture" src="./images/admin.png" class="relative inline-block h-12 w-12 !rounded-full object-cover object-center" />
                    </div>
                    <div>
                        <h6 class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">${prenom} ${nom}</h6>
                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">${email}</p>
                    </div>
                </div>
            `;
            nav.innerHTML += html;
            } else {
                const html = `
                <div role="button" class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    <div class="grid mr-4 place-items-center">
                        <img style="height: 6rem; width: 6rem" alt="Profile Picture" src="./images/user.jpg" class="relative inline-block h-12 w-12 !rounded-full object-cover object-center" />
                    </div>
                    <div>
                        <h6 class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">${prenom} ${nom}</h6>
                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">${email}</p>
                    </div>
                </div>
            `;
            nav.innerHTML += html;
            }
            userCount++;
        });
        const countHtml = `<p class="text-blue-600 text-center">${userCount} utilisateurs trouvés</p>`;
        nav.innerHTML += countHtml;
    })
    .catch(error => console.error('Erreur lors de la récupération des données: ', error));
}

fetchData();
