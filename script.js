let animationId = null;
let isDrawing = false;

document.addEventListener('DOMContentLoaded', function () {
  const speedSlider = document.getElementById('speedSlider');
  const speedValue = document.getElementById('speedValue');

  speedSlider.addEventListener('input', function () {
    speedValue.textContent = this.value;
  });

  drawSpiral();
});

function drawSpiral() {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }

  const canvas = document.getElementById('spiralCanvas');
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;

  ctx.clearRect(0, 0, width, height);

  const colors = ["red", "yellow", "green", "blue", "indigo", "violet"];

  // Starting position and angle
  let x = width / 2;
  let y = height / 2;
  let angle = 0;
  let currentStep = 0;

  // line properties
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  // Animation function
  function animate() {
    if (currentStep < 360) {
      // Get speed from slider
      const speed = parseInt(document.getElementById('speedSlider').value);
      const stepsPerFrame = speed;

      for (let j = 0; j < stepsPerFrame && currentStep < 360; j++) {
        // Set color
        ctx.strokeStyle = colors[currentStep % 6];

        // Calculate distance for this step
        const distance = currentStep * 0.5;

        // Calculate new position
        const radians = angle * Math.PI / 180;
        const newX = x + distance * Math.cos(radians);
        const newY = y + distance * Math.sin(radians);

        // Draw line segment
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(newX, newY);
        ctx.stroke();

        // Update position and angle
        x = newX;
        y = newY;
        angle -= 61; // Right turn (negative for clockwise)

        currentStep++;
      }

      // Continue animation
      animationId = requestAnimationFrame(animate);
    } else {
      isDrawing = false;
      animationId = null;
    }
  }

  isDrawing = true;
  animate();
}