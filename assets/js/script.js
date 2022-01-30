function reload() {
    document.location.reload(true);
}

function teste() {
    const form = document.querySelector('.formulario');

    function recebe(evento) {
        evento.preventDefault();

        const valueName = form.querySelector('#floatingName');
        const name = valueName.value;
        const valueEmail = form.querySelector('#floatingEmail');
        const email = valueEmail.value;
        const valueTel = form.querySelector('#floatingTel');
        const tel = valueTel.value;
        const valueText = form.querySelector('#floatingTextarea');
        const text = valueText.value;

        function check() {
            if (name, email, tel, text != "") {
                alertify.success('Orçamento enviado com sucesso!');
                setTimeout(function() { reload() }, 3000);
            } else {
                alertify.error('Preencha os espaços vazios!');
            }
        }
        check();
    }
    form.addEventListener('submit', recebe);
}

teste();

// Bônus
function formatTel() {
    const tel = document.querySelector('#floatingTel');

    tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value))
    tel.addEventListener('change', (e) => mascaraTelefone(e.target.value))

    const mascaraTelefone = (valor) => {
        valor = valor.replace(/\D/g, "")
        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
        valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
        tel.value = valor
    }
}

formatTel();