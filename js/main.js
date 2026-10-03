// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
  console.log('Mesa Solidária: Sistema carregado.');

  // Seleciona o formulário de cadastro/doação
  const form = document.querySelector('form');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Impede o recarregamento da página

      // Captação básica de dados do formulário
      const formData = new FormData(form);
      const dados = Object.fromEntries(formData.entries());

      // Persistência com localStorage (conceito chave da Prática 3)
      localStorage.setItem('ultimoCadastro', JSON.stringify(dados));

      alert('Cadastro realizado com sucesso e salvo localmente!');
      form.reset();
    });
  }
});