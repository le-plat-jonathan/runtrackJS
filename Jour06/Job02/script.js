/////////////////////////////////////////////////////// Modal ///////////////////////////////////////////////////////

const myModal = document.getElementById('butterflyModal');
const myInput = document.getElementById('myInput');
myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
});


/////////////////////////////////////////////////////// Reboote le monde ///////////////////////////////////////////////////////

document.getElementById('reboot').addEventListener('click', citationBLade);

function citationBLade () {
    const citation = document.getElementById('btnChange');
    citation.innerHTML = `<p>J'ai vu tant de choses, que vous, humains, ne pourriez pas croire... De grands navires en feu surgissant de l'épaule d'Orion, j'ai vu des rayons fabuleux, des rayons C, briller dans l'ombre de la Porte de Tannhaüser. Tous ces moments se perdront dans l'oubli, comme les larmes dans la pluie. Il est temps de mourir.</p>`;
}

/////////////////////////////////////////////////////// Pagination ///////////////////////////////////////////////////////

/////////////////////////////////////////////////////// Page 1 ///////////////////////////////////////////////////////

document.getElementById('page1').addEventListener('click', page1Content);

function page1Content () {
    const contenu = document.getElementById('jumbotronContent');
    contenu.innerHTML = `
    <h1 class="display-4">Bonjour, monde!</h1>
    <div id="btnChange">
        <p class="lead">Il existe plusieurs visions du terme :</p>
        <p class="lead">le monde est la matière, l'espace et les phénomènes qui nous sont accessibles par les sens, l'expérience ou la raison.</p>
        <p class="lead">Le sens le plus courant désigne notre planète, la Terre, avec ses habitants, et son environnement plus ou moins naturel.</p>
    </div>
    <hr class="my-4">
    <p>Le sens étendu désigne l'univers dans son ensemble.</p>
    <button type="button" id="reboot" class="btn btn-danger btn-lg" href="#" role="button">Rebooter le monde</button>
    <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    `
}

/////////////////////////////////////////////////////// Page 2 ///////////////////////////////////////////////////////

document.getElementById('page2').addEventListener('click', page2Content);

function page2Content () {
    const contenu = document.getElementById('jumbotronContent');
    contenu.innerHTML = `
    <div class = 'd-flex flex-column justify-content-center align-items-center'>
    <h3>Nous vendons aussi des criquets, mais eux sont comestibles !</h3>
    <img src="criquet.jpg" style="height: 20rem; border: 1px solid black; ">
    </div>
    `
}

/////////////////////////////////////////////////////// Page 3 ///////////////////////////////////////////////////////

document.getElementById('page3').addEventListener('click', page3Content);

function page3Content () {
    const contenu = document.getElementById('jumbotronContent');
    contenu.innerHTML = `
    <div class = 'd-flex flex-column justify-content-center align-items-center' style = 'height : 50vh;'>
    <p> On n'a plus rien n'abusez pas ! </p>
    </div>
    `
}

/////////////////////////////////////////////////////// Group list active ///////////////////////////////////////////////////////

let items = document.querySelectorAll('.list-group-item');

items.forEach(function(item) {
    item.addEventListener('click', function() {
        items.forEach(function(item) {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});


/////////////////////////////////////////////////////// Progress Bar ///////////////////////////////////////////////////////

let progressBar = document.querySelector('.progress-bar');

document.getElementById('down_progress').addEventListener('click', function() {
    let currentWidth = parseInt(progressBar.style.width);
    let newWidth = Math.max(currentWidth - 5, 0);
    progressBar.style.width = newWidth + '%';
});

document.getElementById('up_progress').addEventListener('click', function() {
    let currentWidth = parseInt(progressBar.style.width);
    let newWidth = Math.min(currentWidth + 5, 100);
    progressBar.style.width = newWidth + '%';
});


/////////////////////////////////////////////////////// DGC ///////////////////////////////////////////////////////

document.addEventListener('keydown', function(event) {
    if (event.key === 'd') {
        document.addEventListener('keydown', function(event) {
            if (event.key === 'g') {
                document.addEventListener('keydown', function(event) {
                    if (event.key === 'c') {
                        afficherModal();
                    }
                });
            }
        });
    }
});

function afficherModal() {

    let login = document.querySelector('input[placeholder="Login"]').value;
    let password = document.querySelector('input[placeholder="Mot de passe"]').value;
    let url = document.querySelector('input[aria-label="Amount (to the nearest dollar)"]').value;
    let email = document.getElementById('inputEmail').value;
    let passwordForm = document.getElementById('inputPassword').value;
    
    let modalContent = `
        <div class="modal fade" id="formSummaryModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Récapitulatif du formulaire</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Login: ${login}</p>
                        <p>Mot de passe: ${password}</p>
                        <p>URL: ${url}</p>
                        --------------------------------------------------<br><br>
                        <p>Email: ${email}</p>
                        <p>Mot de passe: ${passwordForm}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalContent);
  
    let modal = new bootstrap.Modal(document.getElementById('formSummaryModal'));
    modal.show();
}

/////////////////////////////////////////////////////// submit form change spinner color ///////////////////////////////////////////////////////

document.querySelector('#form_right').addEventListener('submit', function(e) {
    e.preventDefault();

    let email = document.getElementById('inputEmail').value;
    let password = document.getElementById('inputPassword').value;

    if (email.trim() !== '' && password.trim() !== '') {
        changeSpinnerColor();
    }

    function changeSpinnerColor() {
        document.querySelector('.spinner-border').classList.remove('text-primary');
        document.querySelector('.spinner-border').classList.add('text-warning');
    }
    
});
