class Contact {
    constructor(nom, prenom) {
      this.nom = nom;
      this.prenom = prenom;
    }
    description() {
        return `Nom: ${this.nom}, prénom: ${this.prenom}`;
    }
}

const listeContacts = [];

listeContacts.push(new Contact("Lévis", "Carole"));
listeContacts.push(new Contact("Nelson", "Mélodie"));

function options(){
    return console.log("1 : Lister les contacts"), 
    console.log("2 : Ajouter un contact"),
    console.log("0 : Quitter");
}

console.log("Bienvenue dans le gestionnaire de contacts !");
options();

let choix = Number(prompt("Choisissez une option"));

while (choix !== 0) {
    if (choix === 1) {
        console.log(`Il y a ${listeContacts.length} contacts.`)
        listeContacts.forEach(contact => {
            console.log(contact.description());
        });
        options();
        choix = Number(prompt("Choisissez une option"));
    } else if (choix === 2) {
        listeContacts.push(new Contact(prompt("Entrez le nom du contact"), prompt("Ecrivez le prénom du contact")));
        console.log(`Le contact a été ajouté avec succès, il y a présent ${listeContacts.length} contacts.`)
        options();
        choix = Number(prompt("Choisissez une option"));
    } else {
        console.log("Cette option n'existe pas!");
        options();
        choix = Number(prompt("Choisissez une option"));
    }
}
console.log("Au revoir!");
