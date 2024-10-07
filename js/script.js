document.getElementById("contato-form").addEventListener("submit", function(event) {
  // Previne o envio do formulário
  event.preventDefault();

  // Recupera os elementos do formulário
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const assunto = document.getElementById("assunto");
  const mensagem = document.getElementById("mensagem");

  // Recupera os spans para mensagens de erro
  const nomeError = document.getElementById("nome-error");
  const emailError = document.getElementById("email-error");
  const assuntoError = document.getElementById("assunto-error");
  const mensagemError = document.getElementById("mensagem-error");

  let formIsValid = true;

  // Validação do campo Nome
  if (nome.value.trim() === "") {
      nomeError.textContent = "O campo Nome é obrigatório.";
      nomeError.style.display = "block";
      formIsValid = false;
  } else {
      nomeError.style.display = "none";
  }

  // Validação do campo E-mail (simples validação de formato)
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email.value.trim() === "") {
      emailError.textContent = "O campo E-mail é obrigatório.";
      emailError.style.display = "block";
      formIsValid = false;
  } else if (!emailPattern.test(email.value)) {
      emailError.textContent = "Por favor, insira um e-mail válido.";
      emailError.style.display = "block";
      formIsValid = false;
  } else {
      emailError.style.display = "none";
  }

  // Validação do campo Assunto
  if (assunto.value.trim() === "") {
      assuntoError.textContent = "O campo Assunto é obrigatório.";
      assuntoError.style.display = "block";
      formIsValid = false;
  } else {
      assuntoError.style.display = "none";
  }

  // Validação do campo Mensagem
  if (mensagem.value.trim() === "") {
      mensagemError.textContent = "O campo Mensagem é obrigatório.";
      mensagemError.style.display = "block";
      formIsValid = false;
  } else {
      mensagemError.style.display = "none";
  }

  // Se o formulário for válido, permita o envio
  if (formIsValid) {
      alert("Formulário enviado com sucesso!");
      // Se estiver usando backend, aqui você removeria o preventDefault() para enviar o formulário de verdade.
      // event.target.submit();
  }
});
