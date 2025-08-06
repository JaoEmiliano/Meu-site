document.getElementById('formulario').addEventListener('submit', function(event) {

    event.preventDefault();


    const nome = document.querySelector('input[name="nome"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const numero = document.querySelector('input[name="numero"]').value;


    const dadosFormulario = {
        nome: nome,
        email: email,
        numero: numero
    };

    localStorage.setItem('ultimaMensagem', JSON.stringify(dadosFormulario));

    alert('Mensagem salva no seu navegador!');


}); // trabalhando nisso, aprofundando estudos para melhor entender tal area
