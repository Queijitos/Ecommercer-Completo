            document.getElementById('cadastroForm').addEventListener('submit', function(event) {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmpassorwd').value;
            
            // Validação de senha
            if (password !== confirmPassword) {
                alert('As senhas não correspondem!');
                event.preventDefault();
            }

            // Verificar se algum gênero foi selecionado
            const genderSelected = document.querySelector('input[name="gender"]:checked');
            if (!genderSelected) {
                alert('Por favor, selecione um gênero.');
                event.preventDefault();
            }
        });