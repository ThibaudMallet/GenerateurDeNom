// Liste des noms des personnages de Harry Potter : 
// Ron Weasley, Ginny Weasley, Romilda Vane, Harry Potter, Hermione Granger, Neville Londubat
// Tom Jedusor, Severus Rogue, Dolores Ombrage, Bellatrix Lestrange, Drago Malefoy, Regulus Black
// Cedric Diggory, Norbert Dragonneau, Susan Bones, Nymphadora Tonks, Norbert Dragonneau, Pomona Chourave
// Luna Lovegood, Cho Chang, Quirinus Quirrell, Gilderoy Lockhart, Filius Flitwick, Mimi Geignarde

//CONST
const NameButton = document.querySelector(".name-button");
const ResetButton = document.querySelector(".reset-button");
let Name = ["Ron Weasley", "Ginny Weasley", "Romilda Vane", "Harry Potter", "Hermione Granger", "Neville Londubat", "Tom Jedusor", "Severus Rogue", "Dolores Ombrage", "Bellatrix Lestrange", "Drago Malefoy", "Regulus Black", "Cedric Diggory", "Norbert Dragonneau", "Susan Bones", "Nymphadora Tonks", "Norbert Dragonneau", "Pomona Chourave", "Luna Lovegood", "Cho Chang", "Quirinus Quirrell", "Gilderoy Lockhart", "Filius Flitwick", "Mimi Geignarde"];

//LISTENER
NameButton.addEventListener("click", AddName);
ResetButton.addEventListener("click", ResetName);
//body.addEventListener("click", background);

//FUNCTION
//Générer un nom à partir du tableau
function GenerateName(Name) {
    return Name[Math.floor(Math.random() * 24)];
}
// Afficher le nom défini aléatoirement
function AddName(event) {
    document.getElementById("input").value = GenerateName(Name);
}
//Reset le nom
function ResetName(event) {
    document.getElementById("input").value = "";
}












/*function GetInput() {
    const getInput = input.value;
    console.log(getInput);
}



//Changer le background selon le nom défini
/*function background() {
    if (GetInput() === "Ron Weasley") {
        body.classList.add("gryffondor");
    } else if (GenerateName(Name) === Name[7, 8, 9, 10, 11, 12]) {
        body.classList.add("serpentard");
    } else if (GenerateName(Name) === Name[13, 14, 15, 16, 17, 18]) {
        body.classList.add("poufsouffle");
    } else
        body.classList.add("serdaigle");
    }
/*function changeBackground() {
    if (GenerateName(Name) === Name[0, 1, 2, 3, 4, 5]) {
    body.classList.add("gryffondor");
} else if (GenerateName(Name) === Name[6, 7, 8, 9, 10, 11]) {
    body.classList.add("serpentard");
} else if (GenerateName(Name) === Name[12, 13, 14, 15, 16, 17]) {
    body.classList.add("poufsouffle");
} else
    body.classList.add("serdaigle");
}
function background() {
    document.body.style.backgroundImage = "linear-gradient(120deg, gray, rgb(23, 35, 207))";
}
*/


