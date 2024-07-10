const inputText = document.getElementById('inputText');
const errorMessage = document.getElementById('errorMessage');
const outputText = document.getElementById('outputText');

// Função para criptografar
function criptografar() {
    const input = inputText.value;

    if (!validarTexto(input)) {
        errorMessage.textContent = 'Letras maiúsculas e caracteres especiais não são aceitos.';
        return;
    }

    errorMessage.textContent = '';
    const criptografado = btoa(input);
    outputText.style.display = 'block';
    outputText.textContent = criptografado;
}

// Função para descriptografar
function descriptografar() {
    const input = inputText.value;

    try {
        const descriptografado = atob(input);
        outputText.style.display = 'block';
        outputText.textContent = descriptografado;
        errorMessage.textContent = '';
    } catch (e) {
        errorMessage.textContent = 'O texto fornecido não é uma mensagem criptografada válida.';
    }
}

// Validação de texto
function validarTexto(texto) {
    const regex = /^[a-z0-9\s]*$/;
    return regex.test(texto);
}

// Função para copiar o texto
function copiarTexto() {
    if (outputText.textContent) {
        navigator.clipboard.writeText(outputText.textContent)
            .then(() => {
                alert('Texto copiado!');
            })
            .catch(err => {
                console.error('Erro ao copiar texto: ', err);
            });
    }
}
