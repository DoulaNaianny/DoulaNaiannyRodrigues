function verificarItens() {
    const itens = document.querySelectorAll('.checklist input[type="checkbox"]');
    const itensMarcados = [];
    const itensFaltando = [];
  
    itens.forEach((item) => {
      const nome = item.parentElement.textContent.trim();
      if (item.checked) {
        itensMarcados.push(nome);
      } else {
        itensFaltando.push(nome);
      }
    });
  
    let mensagem = `<strong>✅ Itens organizados:</strong><ul>`;
    itensMarcados.forEach((item) => {
      mensagem += `<li>${item}</li>`;
    });
    mensagem += `</ul>`;
  
    mensagem += `<strong>📝 Itens que faltam:</strong><ul>`;
    itensFaltando.forEach((item) => {
      mensagem += `<li>${item}</li>`;
    });
    mensagem += `</ul>`;
  
    if (itensFaltando.length === 0) {
      mensagem += `<p>🎉 Parabéns! Você já está com tudo pronto para a maternidade.</p>`;
    } else if (itensFaltando.length <= 3) {
      mensagem += `<p>👍 Falta pouco! Aproveite para revisar esses últimos itens com calma.</p>`;
    } else {
      mensagem += `<p>👶 Se você é mãe de primeira viagem, procure montar a mala com pelo menos 1 semana de antecedência. Conte com apoio se precisar!</p>`;
    }
  
    document.getElementById("resultado").innerHTML = mensagem;
  }
  