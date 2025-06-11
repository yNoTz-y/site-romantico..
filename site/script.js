function toggleLetter() {
  const letter = document.getElementById("love-letter");
  letter.classList.toggle("hidden");
}

const phrases = [
  "Cada sorriso seu vale mil mundos.",
  "Te ver feliz é meu maior presente.",
  "Essa foto é uma lembrança do quanto te amo.",
  "Amo viver tudo isso com você.",
  "Nosso amor em cada detalhe.",
  "Você é o meu melhor momento.",
  "O amor da minha vida está aqui ♥",
];

document.getElementById("photoUpload").addEventListener("change", function (event) {
  const files = event.target.files;
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  Array.from(files).forEach((file) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const div = document.createElement("div");
      const img = document.createElement("img");
      img.src = e.target.result;

      const phrase = document.createElement("p");
      phrase.className = "phrase";
      phrase.textContent = phrases[Math.floor(Math.random() * phrases.length)];

      div.appendChild(img);
      div.appendChild(phrase);
      gallery.appendChild(div);
    };
    reader.readAsDataURL(file);
  });
});

// Corações animados
const canvas = document.getElementById("hearts-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = Array.from({ length: 50 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 10 + 5,
  speed: Math.random() * 1 + 0.5,
}));

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart) => {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255, 105, 180, 0.7)";
    ctx.moveTo(heart.x, heart.y);
    ctx.arc(heart.x - 3, heart.y, heart.size, 0, Math.PI * 2);
    ctx.arc(heart.x + 3, heart.y, heart.size, 0, Math.PI * 2);
    ctx.lineTo(heart.x, heart.y + heart.size * 2.5);
    ctx.fill();

    heart.y -= heart.speed;
    if (heart.y < -10) {
      heart.y = canvas.height + 10;
    }
  });
  requestAnimationFrame(drawHearts);
}
drawHearts();

// Cartas interativas
const cartas = [
  "Carta 1: Desde que você entrou na minha vida, tudo ficou mais bonito. Eu te amo mais a cada dia.",
  "Carta 2: Em cada momento difícil, você é minha força. Em cada sorriso, minha alegria.",
  "Carta 3: Obrigado por ser você. Completa, maravilhosa, o amor da minha vida.",
];

function showLetter(index) {
  const box = document.getElementById("letter-box");
  box.classList.remove("hidden");
  box.innerText = cartas[index];
}

function drawFlowers() {
  const canvas = document.getElementById("flowers-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const petals = Array.from({ length: 30 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 15 + 10,
    speed: Math.random() * 0.5 + 0.2,
    swing: Math.random() * 2,
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach((p) => {
      ctx.beginPath();
      ctx.fillStyle = "rgba(255,182,193,0.6)";
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      p.y += p.speed;
      p.x += Math.sin(p.y * 0.01) * p.swing;

      if (p.y > canvas.height) p.y = -10;
      if (p.x > canvas.width) p.x = 0;
    });
    requestAnimationFrame(animate);
  }

  animate();
}

function startSurprise() {
  drawFlowers(); // 🌸 Flores animadas
  document.getElementById("bg-music").src = "musicas/for-the-first-time.mp3"; // muda a música
  const box = document.getElementById("surprise-box");
  box.classList.remove("hidden");

  box.innerHTML = `
    <div style="padding: 20px; animation: fadeIn 2s;">
      <h3>🌸 Poema pra Você 🌸</h3>
      <p style="font-style: italic;">
        Você é a poesia que meu coração escreve em silêncio.<br/>
        Cada batida dele, uma declaração de amor por você.<br/>
        Em cada estrela, eu vejo seu olhar. Em cada flor, seu sorriso.<br/>
        Obrigado por ser meu mundo. 🌍❤️
      </p>
      <button onclick="startMiniGame()">💘 Iniciar Mini Jogo do Amor</button>
    </div>
  `;
}
