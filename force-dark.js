// force-dark.js - Script para forçar o tema escuro na aplicação
(function() {
  // Aplicar tema escuro imediatamente
  document.documentElement.classList.add('dark');
  document.body.classList.add('dark');
  document.documentElement.setAttribute('data-theme', 'dark');
  
  // Forçar as cores de fundo
  document.body.style.backgroundColor = 'rgb(17, 24, 39)';
  document.body.style.color = 'rgb(229, 231, 235)';
  
  // Salvar a preferência no localStorage
  localStorage.setItem('theme', 'dark');
  
  // Adicionar estilos de correção inline
  const fixStyle = document.createElement('style');
  fixStyle.textContent = `
    body, #root, #__next, main, div[role="main"], .app-container {
      background-color: rgb(17, 24, 39) !important;
      color: rgb(229, 231, 235) !important;
    }
    
    .dark *, .dark [data-theme="dark"] * {
      --bg-color: rgb(17, 24, 39) !important;
    }
  `;
  document.head.appendChild(fixStyle);
  
  console.log('Tema escuro aplicado pelo force-dark.js');
})();
