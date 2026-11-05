
const form = document.getElementById("contactForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");
const consent = document.getElementById("consent");

const queryTypes = document.querySelectorAll(
  'input[name="queryType"]'
);

const successMessage = document.getElementById("successMessage");
const characterCount = document.getElementById("characterCount");

const MAX_CHARACTERS = 500;

// Exibir mensagem de erro
function showError(fieldName, errorText) {
  const errorElement = document.querySelector(
    `[data-error-for="${fieldName}"]`
  );

  if (errorElement) {
    errorElement.textContent = errorText;
    errorElement.hidden = false;
  }
}

// Limpar mensagem de erro
function clearError(fieldName) {
  const errorElement = document.querySelector(
    `[data-error-for="${fieldName}"]`
  );

  if (errorElement) {
    errorElement.textContent = "";
    errorElement.hidden = true;
  }
}

// Validar formulário
function validateForm() {
  let isValid = true;

  const fields = [
    { element: firstName, name: "firstName" },
    { element: lastName, name: "lastName" },
    { element: email, name: "email" },
    { element: message, name: "message" }
  ];

  // Verificar campos obrigatórios
  fields.forEach(field => {
    clearError(field.name);

    if (!field.element.value.trim()) {
      showError(field.name, "Este campo é obrigatório.");
      isValid = false;
    }
  });

  // Validar nome
  clearError("firstName");

  if (
    firstName.value.trim() &&
    !/^[A-Za-zÀ-ÿ\s]+$/.test(firstName.value.trim())
  ) {
    showError("firstName", "Digite um nome válido, sem números ou caracteres especiais.");
    isValid = false;
  }

  // Validar sobrenome
  clearError("lastName");

  if (
    lastName.value.trim() &&
    !/^[A-Za-zÀ-ÿ\s]+$/.test(lastName.value.trim())
  ) {
    showError("lastName", "Digite um sobrenome válido, sem números ou caracteres especiais.");
    isValid = false;
  }

  // Validar e-mail
  clearError("email");

  if (
    email.value.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
  ) {
    showError("email", "Digite um e-mail válido.");
    isValid = false;
  }

  // Validar quantidade de caracteres da mensagem
  clearError("message");

  if (message.value.length > MAX_CHARACTERS) {
    showError("message", "A mensagem deve ter no máximo 500 caracteres.");
    isValid = false;
  }

  // Validar tipo de consulta
  clearError("queryType");

  const selectedQuery = document.querySelector(
    'input[name="queryType"]:checked'
  );

  if (!selectedQuery) {
    showError("queryType", "Selecione um tipo de consulta.");
    isValid = false;
  }

  // Validar consentimento
  clearError("consent");

  if (!consent.checked) {
    showError("consent", "Você precisa aceitar o consentimento.");
    isValid = false;
  }

  return isValid;
}

// Enviar formulário
form.addEventListener("submit", function(event) {
  event.preventDefault();

  successMessage.hidden = true;

  if (validateForm()) {
    successMessage.hidden = false;

    form.reset();

    updateCharacterCount();

    console.log("Formulário enviado com sucesso!");
  }
});

// Limpar erros ao digitar
[firstName, lastName, email, message].forEach(field => {
  field.addEventListener("input", () => {
    clearError(field.id);
  });
});

// Atualizar contador de caracteres
function updateCharacterCount() {
  characterCount.textContent =
    `${message.value.length}/${MAX_CHARACTERS} caracteres`;
}

message.addEventListener("input", updateCharacterCount);

// Limpar erro ao selecionar tipo de consulta
queryTypes.forEach(radio => {
  radio.addEventListener("change", () => {
    clearError("queryType");
  });
});

// Limpar erro ao marcar consentimento
consent.addEventListener("change", () => {
  clearError("consent");
});

// Inicializar contador
updateCharacterCount();
