/* eslint-disable no-undef */
import "./index.css"

const animationBox = document.querySelector('.animation-box');
const dynamicText = document.querySelector('.dynamic-text');

animationBox.addEventListener('mouseenter', () => {
  dynamicText.textContent = '¡Vamos a codear!';
  animationBox.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
});

animationBox.addEventListener('mouseleave', () => {
  dynamicText.textContent = '¡Hazme clic!';
  animationBox.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
});

animationBox.addEventListener('click', () => {
  dynamicText.textContent = '🚀 ¡JavaScript es divertido!';
  createConfetti();
  setTimeout(() => {
    dynamicText.textContent = '¡Hazme clic!';
  }, 1500);
});

function createConfetti() {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeead'];
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.width = '8px';
    confetti.style.height = '8px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.borderRadius = '50%';
    confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
    document.body.append(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}

const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.append(style);
