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
