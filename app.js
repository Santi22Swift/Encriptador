let botonEncriptar = document.getElementById('boton-encriptar');
let botonDesencriptar = document.getElementById('boton-desencriptar');
let ocultarContenido = document.getElementById('ocultar-contenido');
let contenidoTexto = document.getElementById('contenido-texto');
let textoResultado = document.getElementById('texto-resultado'); // Cambiado a getElementById

// Agregar eventos de click a los botones
botonEncriptar.onclick = function () {
    cambiarContenido('');
};

botonDesencriptar.onclick = function () {
    cambiarContenido('');
};

// Función para cambiar el contenido y mostrar u ocultar el textarea
function cambiarContenido(nuevoContenido) {
    ocultarContenido.style.display = 'none';
    contenidoTexto.innerHTML = ' ';
    ocultarContenido.style.display = 'block';
    textoResultado.textContent = nuevoContenido;

    // Oculta la imagen
    let imagenMunieco = document.getElementById('munieco');
    if (imagenMunieco) {
        imagenMunieco.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const inputUsuario = document.getElementById('input-Usuario');
    const botonEncriptar = document.getElementById('boton-encriptar');
    const botonDesencriptar = document.getElementById('boton-desencriptar');
    const botonCopiar = document.getElementById('boton-copiar');
    const resultadoTexto = document.getElementById('texto-resultado'); // Cambiado a getElementById
    const contenidoTexto = document.getElementById('contenido-texto');
    const ocultarContenido = document.getElementById('ocultar-contenido');

    // Función para encriptar el texto
    function encriptarTexto(texto) {
        return texto.replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    // Función para desencriptar el texto
    function desencriptarTexto(texto) {
        return texto.replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    // Evento al hacer clic en el botón de encriptar
    botonEncriptar.addEventListener('click', function () {
        const textoOriginal = inputUsuario.value.toLowerCase();
        const textoEncriptado = encriptarTexto(textoOriginal);
        resultadoTexto.textContent = textoEncriptado;
        ocultarContenido.classList.remove('ocultar');
        textoResultado.style.display = 'block'; // Muestra el textarea
    });

    // Evento al hacer clic en el botón de desencriptar
    botonDesencriptar.addEventListener('click', function () {
        const textoEncriptado = inputUsuario.value.toLowerCase();
        const textoDesencriptado = desencriptarTexto(textoEncriptado);
        resultadoTexto.textContent = textoDesencriptado;
        ocultarContenido.classList.remove('ocultar');
        textoResultado.style.display = 'block'; // Muestra el textarea
    });

    // Evento al hacer clic en el botón de copiar
    botonCopiar.addEventListener('click', function () {
        const textoCopiado = resultadoTexto.textContent;
        navigator.clipboard.writeText(textoCopiado).then(function () {
            alert('Texto copiado al portapapeles');
        }).catch(function (err) {
            console.error('Error al copiar el texto', err);
        });
    });
});
