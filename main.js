let biblioteca = {
    "libros": [
        {
            "titulo": "El Principito",
            "autor": "Antoine de Saint-Exupéry",
            "año": 1943,
            "genero": "Ficción",
            "disponible": true
        },
        {
            "titulo": "Cien años de soledad",
            "autor": "Gabriel García Márquez",
            "año": 1967,
            "genero": "Realismo mágico",
            "disponible": false
        },
        {
            "titulo": "1984",
            "autor": "George Orwell",
            "año": 1949,
            "genero": "Distopía",
            "disponible": true
        }
    ]
};

function leerDatos(callback) {
    setTimeout(() => {
        console.log("Datos leídos");
        callback(biblioteca);
    }, 1000);
}

function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}

function agregarLibro(titulo, autor, año, genero, disponible) {
    const nuevoLibro = {titulo, autor, año, genero, disponible};
    biblioteca.libros.push(nuevoLibro);
    setTimeout(() => {
        console.log(`Libro "${titulo}" agregado a la biblioteca. ${nuevoLibro.disponible ? 'Disponible' : 'Prestado'}`);
    }, 1000);
}

function actualizarDisponibilidad(titulo, nuevoEstado) {
    const libro = biblioteca.libros.find(libro => libro.titulo === titulo);
    if (libro) {
        libro.disponible = nuevoEstado;
        setTimeout(() => {
            console.log(`Disponibilidad de "${titulo}" actualizada a ${nuevoEstado ? 'Disponible' : 'Prestado'}`);
        }, 1000);
    } else {
        console.log(`El libro "${titulo}" no se encontró.`);
    }
}

mostrarLibros();
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
actualizarDisponibilidad("1984", false);