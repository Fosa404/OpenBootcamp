const Name = "Giuliano";
const lastName = "Fossatti";

const Persona = {name: Name, lastName: lastName};


localStorage.setItem("Persona",JSON.stringify(Persona));


sessionStorage.setItem("Persona", JSON.stringify(Persona));


document.cookie = "Name=Giuliano;LastName=Fossatti;expires=" + new Date(2022, 8, 1, 17,16).toUTCString();