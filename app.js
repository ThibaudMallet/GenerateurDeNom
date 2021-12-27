// Liste des noms des personnages de Harry Potter : 
// Ron Weasley, Ginny Weasley, Romilda Vane, Harry Potter, Hermione Granger, Neville Londubat
// Tom Jedusor, Severus Rogue, Dolores Ombrage, Bellatrix Lestrange, Drago Malefoy, Regulus Black
// Cedric Diggory, Norbert Dragonneau, Susan Bones, Nymphadora Tonks, Ted Lupin, Pomona Chourave
// Luna Lovegood, Cho Chang, Quirinus Quirrell, Gilderoy Lockhart, Filius Flitwick, Mimi Geignarde

//CONST
const nameButton = document.querySelector(".name-button");
const resetButton = document.querySelector(".reset-button");
const body = document.body;
const txt = document.querySelector(".txt");

console.log(txt);

let name = ["Ron Weasley", "Ginny Weasley", "Romilda Vane", "Harry Potter", "Hermione Granger", "Neville Londubat", "Tom Jedusor", "Severus Rogue", "Dolores Ombrage", "Bellatrix Lestrange", "Drago Malefoy", "Regulus Black", "Cedric Diggory", "Norbert Dragonneau", "Susan Bones", "Nymphadora Tonks", "Norbert Dragonneau", "Pomona Chourave", "Luna Lovegood", "Cho Chang", "Quirinus Quirrell", "Gilderoy Lockhart", "Filius Flitwick", "Mimi Geignarde"];

//LISTENER
nameButton.addEventListener("click", addName);
resetButton.addEventListener("click", resetName);

//FUNCTION
//Générer un nom à partir du tableau
function generateName(name) {
    return name[Math.floor(Math.random() * 24)];
}
function addName(event) {
    let id = generateName(name);

    document.getElementById("input").value = id;
    body.style.backgroundColor = changeBackGroundColor(id);
}
//Reset le nom
function resetName(event) {
    document.getElementById("input").value = "";
    body.style.backgroundColor = "gray";
    txt.innerHTML = "";
}
//Changer le backGround en fonction du nom
function changeBackGroundColor(id) {
    color = "gray";

    switch (id) {
        case "Ron Weasley":
        case "Ginny Weasley":
        case "Romilda Vane":
        case "Harry Potter":
        case "Hermione Granger":
        case "Neville Londubat":
            color = "#d62121", txt.innerHTML = "Bienvenue chez Gryffondor !";
        break;
        case "Tom Jedusor":
        case "Severus Rogue":
        case "Dolores Ombrage":
        case "Bellatrix Lestrange":
        case "Drago Malefoy":
        case "Regulus Black":
            color = "#57a634", txt.innerHTML = "Bienvenue chez Serpentard !";
        break;
        case "Cedric Diggory":
        case "Norbert Dragonneau":
        case "Susan Bones":
        case "Nymphadora Tonks":
        case "Ted Lupin":
        case "Pomona Chourave":
            color = "#ebe14a", txt.innerHTML = "Bienvenue chez Poufsouffle !";
        break;
        case "Luna Lovegood":
        case "Cho Chang":
        case "Quirinus Quirrell":
        case "Gilderoy Lockhart":
        case "Filius Flitwick":
        case "Mimi Geignarde":
            color = "#2d58db", txt.innerHTML = "Bienvenue chez Serdaigle !";
        break;
        }
return color;
}
