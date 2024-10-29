let carrinho = [];
let total = 0;

function adicionarCarrinho(produto, preco) {
  carrinho.push({ produto, preco });
  total += preco;
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  carrinho.forEach((item, index) => {
    const div = document.createElement('div');
    div.textContent = `${item.produto} - R$ ${item.preco}`;
    cartItems.appendChild(div);
  });

  document.getElementById('total-price').textContent = total.toFixed(2);
}

function finalizarCompra() {
  alert('Compra finalizada! Obrigado por escolher Ervas da Natureza.');
  carrinho = [];
  total = 0;
  atualizarCarrinho();
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
// Referência à autenticação do Firebase
const auth = firebase.auth();

// Função de login
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      document.getElementById('message').innerText = "Login realizado com sucesso!";
      console.log("Usuário logado:", userCredential.user);
    })
    .catch((error) => {
      document.getElementById('message').innerText = "Erro: " + error.message;
      console.error("Erro de login:", error);
    });
});

// Redirecionar para cadastro (futuro)
document.getElementById('register-link').addEventListener('click', () => {
  alert("Página de cadastro em construção!");
});
