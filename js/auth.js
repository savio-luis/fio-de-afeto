/*
  LOGIN DE CLIENTE
  =================
  Este arquivo cuida de abrir/fechar o modal, trocar de aba (Entrar / Criar
  conta), enviar os formulários pro Firebase e mostrar quem está logado.
  Não precisa editar nada aqui — só o js/firebase-config.js.
*/

const auth = firebase.auth();

const modal = document.getElementById("conta-modal");
const botaoConta = document.getElementById("conta-botao");
const botaoFechar = document.getElementById("modal-fechar");
const blocoLogado = document.getElementById("modal-logado");
const blocoDeslogado = document.getElementById("modal-deslogado");
const emailAtualEl = blocoLogado.querySelector(".modal-email-atual");
const botaoSair = document.getElementById("botao-sair");

const tabs = document.querySelectorAll(".modal-tab");
const formEntrar = document.getElementById("form-entrar");
const formCadastrar = document.getElementById("form-cadastrar");

function abrirModal() {
  modal.hidden = false;
}
function fecharModal() {
  modal.hidden = true;
  limparErros();
}
function limparErros() {
  document.querySelectorAll(".modal-erro").forEach(el => {
    el.hidden = true;
    el.textContent = "";
  });
}
function mostrarErro(form, mensagem) {
  const el = form.querySelector(".modal-erro");
  el.textContent = mensagem;
  el.hidden = false;
}

function mensagemDeErro(codigo) {
  const mapa = {
    "auth/invalid-email": "Esse email não parece válido.",
    "auth/user-not-found": "Não existe conta com esse email.",
    "auth/wrong-password": "Senha incorreta.",
    "auth/invalid-credential": "Email ou senha incorretos.",
    "auth/email-already-in-use": "Já existe uma conta com esse email. Tenta entrar.",
    "auth/weak-password": "A senha precisa ter pelo menos 6 caracteres."
  };
  return mapa[codigo] || "Algo deu errado. Tenta de novo em instantes.";
}

botaoConta.addEventListener("click", abrirModal);
botaoFechar.addEventListener("click", fecharModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) fecharModal();
});

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("ativo"));
    tab.classList.add("ativo");
    limparErros();
    if (tab.dataset.tab === "entrar") {
      formEntrar.hidden = false;
      formCadastrar.hidden = true;
    } else {
      formEntrar.hidden = true;
      formCadastrar.hidden = false;
    }
  });
});

formEntrar.addEventListener("submit", (e) => {
  e.preventDefault();
  limparErros();
  const email = formEntrar.email.value.trim();
  const senha = formEntrar.senha.value;

  auth.signInWithEmailAndPassword(email, senha)
    .then(() => fecharModal())
    .catch(err => mostrarErro(formEntrar, mensagemDeErro(err.code)));
});

formCadastrar.addEventListener("submit", (e) => {
  e.preventDefault();
  limparErros();
  const nome = formCadastrar.nome.value.trim();
  const email = formCadastrar.email.value.trim();
  const senha = formCadastrar.senha.value;

  auth.createUserWithEmailAndPassword(email, senha)
    .then(cred => cred.user.updateProfile({ displayName: nome }))
    .then(() => fecharModal())
    .catch(err => mostrarErro(formCadastrar, mensagemDeErro(err.code)));
});

botaoSair.addEventListener("click", () => {
  auth.signOut();
});

auth.onAuthStateChanged((user) => {
  if (user) {
    botaoConta.textContent = user.displayName ? user.displayName.split(" ")[0] : "Minha conta";
    blocoLogado.hidden = false;
    blocoDeslogado.hidden = true;
    emailAtualEl.textContent = `Logado como ${user.email}`;
  } else {
    botaoConta.textContent = "Entrar";
    blocoLogado.hidden = true;
    blocoDeslogado.hidden = false;
    formEntrar.reset();
    formCadastrar.reset();
  }
});
