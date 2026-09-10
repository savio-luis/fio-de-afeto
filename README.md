# Ponto & Fio — site de vendas de crochê

Site simples, sem mensalidade, feito em HTML, CSS e JavaScript puro.
Não precisa de servidor nem de instalar nada complicado.

## Como abrir no VS Code

1. Abra o VS Code.
2. Vá em **Arquivo → Abrir Pasta** e escolha a pasta `crochet-shop`.
3. Instale a extensão gratuita **Live Server** (ícone de quadradinhos na
   barra lateral esquerda, procure por "Live Server").
4. Clique com o botão direito no arquivo `index.html` e escolha
   **"Open with Live Server"**. O site abre no navegador e atualiza
   sozinho sempre que você salva uma alteração.

## Como adicionar ou editar produtos

Tudo fica no arquivo `js/products.js`. Não precisa mexer em HTML.

1. Abra `js/products.js`.
2. Copie um dos blocos de produto (do `{` ao `}`) e cole antes do `];`
   no final do arquivo.
3. Mude o `name`, `price`, `category`, `description` e `image`.

```js
{
  name: "Nome da peça",
  price: 50.00,
  category: "amigurumi", // amigurumi, roupa, acessorio ou decoracao
  image: "meu-produto.jpg",
  description: "Uma frase curta sobre a peça.",
  featured: false // true pra aparecer em destaque no topo
}
```

## Como colocar fotos de verdade

1. Tire a foto do produto (de preferência quadrada, boa iluminação).
2. Salve o arquivo dentro da pasta `images/`.
3. No `products.js`, escreva o nome exato do arquivo em `image`,
   por exemplo `"ursinho-azul.jpg"`.

Se o nome do arquivo estiver errado ou a foto ainda não existir, o site
mostra automaticamente um desenho de "foto em breve" no lugar — o site
nunca quebra por falta de imagem.

## Como configurar o botão do WhatsApp

Abra `js/script.js` e troque o número na primeira linha:

```js
const WHATSAPP_NUMERO = "5581999999999";
```

Use o formato: código do país (55 para o Brasil) + DDD + número, só
números, sem espaço, traço ou parênteses.

## Como ativar o login de cliente (email e senha)

O site tem um botão "Entrar" no topo com um formulário de login e de
criação de conta. Pra ele funcionar de verdade (senhas guardadas com
segurança), ele usa o **Firebase Authentication**, um serviço gratuito
do Google — vocês não precisam programar nada além de copiar e colar
umas chaves.

1. Acesse https://console.firebase.google.com e entre com uma conta
   Google (pode ser uma nova, só pra isso).
2. Clique em **Adicionar projeto**, dê um nome (ex: `ponto-e-fio`) e
   siga os passos padrão de criação.
3. Dentro do projeto, clique no ícone **`</>`** (Web) pra registrar um
   app. Dê um nome e clique em **Registrar app**.
4. O Firebase vai mostrar um bloco de código com valores como `apiKey`,
   `authDomain`, etc. Copie esses valores e cole no arquivo
   `js/firebase-config.js`, no lugar de cada `"SUBSTITUA_AQUI"`.
5. No menu lateral do Firebase, vá em **Authentication** → aba
   **Sign-in method** → clique em **Email/senha** → ative a primeira
   opção → **Salvar**.
6. Salve o arquivo e recarregue o site (com o Live Server). O botão
   "Entrar" já deve funcionar — teste criando uma conta de teste.

Enquanto as chaves não forem preenchidas, o botão "Entrar" aparece mas
dá erro ao tentar entrar ou cadastrar — é só sinal de que falta esse
passo.

O plano gratuito do Firebase cobre bem mais contas do que uma loja
pequena costuma precisar, então não deve gerar custo.

**Nota:** hoje o login serve pra cliente criar uma conta e entrar —
ainda não existe carrinho de compras nem histórico de pedidos vinculado
à conta. Se um dia vocês quiserem isso (ex: "meus pedidos"), dá pra
evoluir o site guardando os pedidos no banco de dados do Firebase
também. Por enquanto, a encomenda continua indo por WhatsApp, como já
estava.

## Como colocar o site no ar (grátis)

A forma mais simples é o **GitHub Pages**:

1. Crie uma conta gratuita em https://github.com
2. Crie um repositório novo e suba os arquivos desta pasta (o próprio
   VS Code tem um botão de "Publish to GitHub" na aba de Source Control).
3. Nas configurações do repositório, vá em **Settings → Pages** e
   ative o GitHub Pages apontando para a pasta principal.
4. Em poucos minutos o site fica disponível num link como
   `https://seu-usuario.github.io/nome-do-repositorio`.

Outra opção igualmente fácil é arrastar a pasta para
https://app.netlify.com/drop — sem precisar de conta no GitHub.

## Estrutura dos arquivos

```
crochet-shop/
├── index.html        → estrutura da página
├── css/style.css      → toda a aparência (cores, fontes, layout)
├── js/products.js     → lista de produtos (o que você mais vai editar)
├── js/script.js        → lógica do site (não precisa mexer aqui)
└── images/             → fotos dos produtos
```
