const ingreso = document.querySelector(".ingreso");
const mensaje = document.querySelector(".mensaje");
const copiarBoton = document.querySelector('.copiar');

function btnEcriptar() {
    const textoEncriptado = encriptar(ingreso.value);
    mensaje.value = textoEncriptado;
    ingreso.value = "";
}

function btnDesecriptar() {
    const textoDesencriptado = desencriptar(ingreso.value);
    mensaje.value = textoDesencriptado;
}

function encriptar(stringEncriptada) {
    if (/[A-Z]/.test(stringEncriptada) || /[^a-z]/.test(stringEncriptada)) {
        alert('No se permiten mayúsculas ni caracteres especiales.');
        return '';
    }
    ocultaryaparecer();
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptado) {
    if (/[A-Z]/.test(stringDesencriptado) || /[^a-z]/.test(stringDesencriptado)) {
        alert('No se permiten mayúsculas ni caracteres especiales.');
        return '';
    }
    ocultaryaparecer();
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}




copiarBoton.addEventListener('click', () => {
    mensaje.select();
    document.execCommand('copy');
});

function ocultaryaparecer() {
    const Oplaceholder = document.querySelector('.placeholde');
    const Omuneco = document.querySelector('.muneco');
    const Acopiar = document.querySelector('.copiar');
    Oplaceholder.style.display = 'none';
    Omuneco.style.display = 'none';
    Acopiar.style.display = 'block';
}

