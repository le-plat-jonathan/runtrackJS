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

function generateCalendar(year, month) {
    const calendarElement = document.getElementById('calendar');
    const currentMonthElement = document.getElementById('currentMonth');
    
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    calendarElement.innerHTML = '';

    const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    currentMonthElement.innerText = `${monthNames[month]} ${year}`;

    const firstDayOfWeek = firstDayOfMonth.getDay();

    const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'text-center font-semibold';
        dayElement.innerText = day;
        calendarElement.appendChild(dayElement);
    });

    for (let i = 0; i < firstDayOfWeek; i++) {
        const emptyDayElement = document.createElement('div');
        calendarElement.appendChild(emptyDayElement);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'text-center py-2 border cursor-pointer';
        dayElement.innerText = day;

        const currentDate = new Date();
        if (year === currentDate.getFullYear() && month === currentDate.getMonth() && day === currentDate.getDate()) {
            dayElement.classList.add('bg-blue-600', 'text-white');
        }

        calendarElement.appendChild(dayElement);
    }
}

const currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
generateCalendar(currentYear, currentMonth);

document.getElementById('prevMonth').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentYear, currentMonth);
});

document.getElementById('nextMonth').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentYear, currentMonth);
});

function showModal(selectedDate) {
    const modal = document.getElementById('myModal');
    const modalDateElement = document.getElementById('modalDate');
    modalDateElement.innerText = selectedDate;
    modal.classList.remove('hidden');
  
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.users.length > 0) {
      const user = userData.users[0];
      document.getElementById('firstName').value = user.prenom;
      document.getElementById('lastName').value = user.nom;
    }
}  

function hideModal() {
    const modal = document.getElementById('myModal');
    modal.classList.add('hidden');
}

const dayElements = document.querySelectorAll('.cursor-pointer');
dayElements.forEach(dayElement => {
    dayElement.addEventListener('click', () => {
        const day = parseInt(dayElement.innerText);
        const selectedDate = new Date(currentYear, currentMonth, day);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = selectedDate.toLocaleDateString(undefined, options);
        showModal(formattedDate);
    });
});

document.getElementById('closeModal').addEventListener('click', () => {
    hideModal();
});

// -------------------------------  soumission du formulaire d'inscription au cours ------------------------------- //

document.getElementById('courseForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const prenom = document.getElementById('firstName').value;
    const nom = document.getElementById('lastName').value;
    const nomDuCours = document.getElementById('courseName').value;
    const heureDuCours = document.getElementById('courseTime').value;
    const selectedDate = document.getElementById('modalDate').innerText;

    let currentDate = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
    let formattedDate = new Intl.DateTimeFormat('fr-FR', options).format(currentDate);

    const courseData = {
        nom: nom,
        prenom: prenom,
        nomDuCours: nomDuCours,
        heureDuCours: heureDuCours,
        dateDuCours: selectedDate,
        date_heure_inscription : formattedDate
    };
  
    localStorage.setItem(`cours${nomDuCours}`, JSON.stringify(courseData));
  
    hideModal();
  });
  