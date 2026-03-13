// Matrix Code Rain Effect
// 黑客帝国代码雨效果

(function() {
  const canvas = document.createElement('canvas');
  canvas.id = 'matrix-bg';
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  
  // Set canvas size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Matrix characters - User Selected Mongolian Script
  // a na ba pa ha ga ma la sa sha ta da cha (no numbers)
  const chars = 'ᠠᠨᠪᠫᠬᠭᠮᠯᠰᠱᠲᠳᠴ';
  const charArray = chars.split('');
  
  const fontSize = 16;
  const columns = Math.ceil(canvas.width / fontSize);
  
  // Drops array - full coverage
  const drops = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -50;
  }
  
  // Draw function
  function draw() {
    // Semi-transparent black for trail effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Matrix green color
    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px monospace';
    
    // Draw characters with 90 degree rotation
    for (let i = 0; i < drops.length; i++) {
      const char = charArray[Math.floor(Math.random() * charArray.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      
      // Save context
      ctx.save();
      
      // Translate to character position
      ctx.translate(x + fontSize / 2, y + fontSize / 2);
      
      // Rotate 90 degrees (clockwise)
      ctx.rotate(Math.PI / 2);
      
      // Draw character centered
      ctx.fillText(char, -fontSize / 2, fontSize / 2);
      
      // Restore context
      ctx.restore();
      
      // Reset drop when it reaches bottom
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      
      // Move drop down
      drops[i]++;
    }
  }
  
  // Animation loop
  setInterval(draw, 33);
  
  // Resize handler
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
})();
