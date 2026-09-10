/*
  CONFIGURAÇÃO DO FIREBASE
  =========================
  Este arquivo conecta o site a uma conta gratuita do Firebase (Google),
  responsável por guardar os logins com segurança.

  PASSO A PASSO PRA PEGAR SUAS CHAVES:

  1. Acesse https://console.firebase.google.com e entre com uma conta Google.
  2. Clique em "Adicionar projeto", dê um nome (ex: "ponto-e-fio") e crie.
  3. Dentro do projeto, clique no ícone "</>" (Web) pra registrar um app web.
     Dê um nome qualquer e clique em "Registrar app".
  4. O Firebase vai mostrar um bloco de código parecido com o objeto abaixo.
     Copie os valores de lá e cole aqui embaixo, substituindo os textos
     "SUBSTITUA_AQUI".
  5. No menu lateral, vá em "Authentication" → aba "Sign-in method" →
     clique em "Email/senha" → ative a primeira opção → Salvar.

  Pronto — o login do site passa a funcionar de verdade.
*/

const firebaseConfig = {
  apiKey: "AIzaSyBh9ZaTBha_ehtg7QHfBhIeqsGyCHDvVaU",
  authDomain:"fiodeafeto70.firebaseapp.com",
  projectId: "fiodeafeto70",
  storageBucket: "fiodeafeto70.firebasestorage.app",
  messagingSenderId: "640275279006",
  appId: "1:640275279006:web:cdd0051d06a8a4808cdf8f",
};

firebase.initializeApp(firebaseConfig);
