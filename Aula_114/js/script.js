alert("Bem-vindo(a) ao meu portfólio!");

function apresentacao() {
  alert("Olá! Meu nome é André Doria Santos e sou estudante de Desenvolvimento Web.");
}


function alterarTitulo() {
  const nome = prompt("Digite seu nome:");
  if (nome) {
    document.getElementById("titulo-principal").innerHTML = "Portfólio Profissional de " + nome;
  }
}

function destacarSobre() {
  const secaoSobre = document.getElementById("sobre");
  if (secaoSobre) {
   
    secaoSobre.style.border = "3px solid #6366f1";
    secaoSobre.style.borderRadius = "10px";
    secaoSobre.style.padding = "40px";
  }
}

let clique = 0;
function contarClique() {
  clique = clique + 1;
  document.getElementById("contador").innerHTML = clique;
}

let formulario = document.getElementById("formContato")

formulario.addEventListener('submit', function(e){
  e.preventDefault();

  let nome = document.getElementById("nomeContato").value;
  let email = document.getElementById("emailContato").value;
  let mensagem = document.getElementById("mensagemContato").value;
  let feedback = document.getElementById("feedback");

  feedback.textContent="";

  if (nome.length < 3) {
        feedback.className = "erro";
        feedback.textContent = "❌ Nome deve ter pelo menos 3 caracteres.";
        return;
    }

    if (email.indexOf("@") === -1) {
        feedback.className = "erro";
        feedback.textContent = "❌ E-mail inválido. Digite um e-mail válido.";
        return;
    }

    if (mensagem.length < 10) {
        feedback.className = "erro";
        feedback.textContent = "❌ Mensagem deve ter pelo menos 10 caracteres.";
        return;
    }

    feedback.className = "sucesso";
    feedback.textContent = "✅ Mensagem enviada com sucesso!";

    // Opcional: limpar formulário
    this.reset();
  
})