// Effectue une requête HTTP GET vers le fichier local "data.json" pour récupérer une liste de produits
fetch("data.json")
  .then((rep) => {
    if (!rep.ok) {
      throw new Error(`Erreur de chargement: ${rep.status} ${rep.statusText}`);
    }
    return rep.json();
  })
  .then((donnee) => {
    afficher(donnee);
  })
  .catch((error) => {
    console.error("Une erreur est survenue :", error);
  });

function afficher(data) {
  // Récupérer N° promo dans l'url
  const match = window.location.href.match(/\/([^\/]+)\.html$/);
  const Npromo = match ? match[1] : null;

  const paris = data[Npromo].Paris;
  const lyon = data[Npromo].Lyon;
  const ste = data[Npromo].St_Etienne;

  let item = ``;
  let listProjectParis = document.querySelector(`#parislist`);
  let listProjectLyon = document.querySelector(`#lyonlist`);
  let listProjectSte = document.querySelector(`#stelist`);

  /* Liste lyon */
  lyon.forEach((projet) => {
    let titre = projet.titre;
    let lien = projet.lien;
    let equipe = projet.equipe;
    item += `
            <li><a href="${lien}"> ${titre} </a <br>
            <p> ${equipe}</p>
            </li>
            `;
  });

  listProjectLyon.innerHTML += item;
  item = ``;

  /* Liste Paris */
  paris.forEach((projet) => {
    let titre = projet.titre;
    let lien = projet.lien;
    let equipe = projet.equipe;

    item += `
    <li><a href="${lien}"> ${titre} </a <br>
    <p> ${equipe}</p>
    </li>
    `;
  });

  listProjectParis.innerHTML += item;
  item = ``;

  /* Liste Ste */
  ste.forEach((projet) => {
    let titre = projet.titre;
    let lien = projet.lien;
    let equipe = projet.equipe;


    item += `
    <li><a href="${lien}"> ${titre} </a <br>
    <p> ${equipe}</p>
    </li>
    `;
  });

  listProjectSte.innerHTML += item;
  item = ``;
}


function Hello() {
  return <p>Welcome tu react</p>
  }
  
  