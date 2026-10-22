const exp_academica = [
    {
        titulo: "Desarrollo de Aplicaciones Web",
        centro: "Mi centro educativo",
        fecha: "2024 - Actualidad",
        descripcion: "Formación en HTML, CSS y JavaScript."
    },
    {
        titulo: "Bachillerato",
        centro: "Mi centro anterior",
        fecha: "2022 - 2024",
        descripcion: "Estudios de bachillerato."
    }
];

const exp_profesional = [
    {
        puesto: "Proyecto personal",
        empresa: "Proyecto propio",
        fecha: "2025 - Actualidad",
        descripcion: "Creación de páginas web y aprendizaje de desarrollo web."
    }
];

// Seleccionamos las listas del HTML
const listaAcademica = document.getElementById("experiencia-academica");
const listaProfesional = document.getElementById("experiencia-profesional");

// Mostramos la experiencia académica
for (let i = 0; i < exp_academica.length; i++) {
    const estudio = exp_academica[i];

    const elemento = document.createElement("li");

    elemento.innerHTML =
        "<strong>" + estudio.titulo + "</strong>" +
        "<p>" + estudio.centro + " | " + estudio.fecha + "</p>" +
        "<p>" + estudio.descripcion + "</p>";

    listaAcademica.appendChild(elemento);
}

// Mostramos la experiencia profesional
for (let i = 0; i < exp_profesional.length; i++) {
    const trabajo = exp_profesional[i];

    const elemento = document.createElement("li");

    elemento.innerHTML =
        "<strong>" + trabajo.puesto + "</strong>" +
        "<p>" + trabajo.empresa + " | " + trabajo.fecha + "</p>" +
        "<p>" + trabajo.descripcion + "</p>";

    listaProfesional.appendChild(elemento);
}
