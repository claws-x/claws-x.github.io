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
  
  // Matrix characters (0, 1, Traditional Mongolian Script)
  const chars = '01ᠠᠡᠢᠣᠤᠥᠦᠨᠭᠭᠠᠭᠠᠷᠭᠡᠭᠡᠷᠭᠢᠭᠢᠷᠭᠣᠭᠣᠷᠭᠤᠭᠤᠷᠭᠦᠭᠦᠷᠬᠠᠬᠡᠬᠢᠬᠣᠬᠤᠬᠦᠭᠠᠭᠡᠭᠢᠭᠣᠭᠤᠭᠦᠭᠠᠭᠠᠷᠭᠡᠭᠡᠷᠭᠢᠭᠢᠷᠭᠣᠭᠣᠷᠭᠤᠭᠤᠷᠭᠦᠭᠦᠷᠨᠠᠨᠡᠨᠢᠨᠣᠨᠤᠨᠦᠪᠠᠪᠡᠪᠢᠪᠣᠪᠤᠪᠦᠫᠠᠫᠡᠫᠢᠫᠣᠫᠤᠫᠦᠲᠠᠲᠡᠲᠢᠲᠣᠲᠤᠲᠦᠴᠠᠴᠡᠴᠢᠴᠣᠴᠤᠴᠦᠶᠠᠶᠡᠶᠢᠶᠣᠶᠤᠶᠦᠷᠠᠷᠡᠷᠢᠷᠣᠷᠤᠷᠦᠯᠠᠯᠡᠯᠢᠯᠣᠯᠤᠯᠦᠰᠠᠰᠡᠰᠢᠰᠣᠰᠤᠰᠦᠱᠠᠱᠡᠱᠢᠱᠣᠱᠤᠱᠦᠸᠠᠸᠡᠸᠢᠸᠣᠸᠤᠸᠦᠹᠠᠹᠡᠹᠢᠹᠣᠹᠤᠹᠦᠺᠠᠺᠡᠺᠢᠺᠣᠺᠤᠺᠦᠻᠠᠻᠡᠻᠢᠻᠣᠻᠤᠻᠦᠼᠠᠼᠡᠼᠢᠼᠣᠼᠤᠼᠦᠽᠠᠽᠡᠽᠢᠽᠣᠽᠤᠽᠦᠾᠠᠾᠡᠾᠢᠾᠣᠾᠤᠾᠦᠿᠠᠿᠡᠿᠢᠿᠣᠿᠤᠿᠦ';
  const charArray = chars.split('');
  
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  
  // Drops array
  const drops = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
  }
  
  // Draw function
  function draw() {
    // Semi-transparent black for trail effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Matrix green color
    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px monospace';
    
    // Draw characters
    for (let i = 0; i < drops.length; i++) {
      const char = charArray[Math.floor(Math.random() * charArray.length)];
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);
      
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
