
document.addEventListener('DOMContentLoaded', () => {
    // Your carousel script goes here

    const carousel = document.querySelector('.carousel');
    const track = document.querySelector('.carousel-track');

    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
      isDown = true;
      carousel.classList.add('dragging');
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
      isDown = false;
      carousel.classList.remove('dragging');
    });

    carousel.addEventListener('mouseup', () => {
      isDown = false;
      carousel.classList.remove('dragging');
    });

    carousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2; // Increase sensitivity
      carousel.scrollLeft = scrollLeft - walk;
    });

    // Optional: also support touch
    carousel.addEventListener('touchstart', (e) => {
      isDown = true;
      startX = e.touches[0].pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('touchend', () => {
      isDown = false;
    });

    carousel.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2;
      carousel.scrollLeft = scrollLeft - walk;
    });

});

document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bg-music');

  // Wait 20 seconds before starting
  setTimeout(() => {
    audio.volume = 0;
    audio.play();

    // Fade in over 5 seconds
    let vol = 0;
    const fadeIn = setInterval(() => {
      if (vol < 1) {
        vol += 0.02;
        audio.volume = Math.min(vol, 1);
      } else {
        clearInterval(fadeIn);
      }
    }, 100); // every 100ms
  }, 20000); // 20 seconds
});



document.getElementById('start-button').addEventListener('click', () => {

  // 🎉 Confetti fountain from button position
  const rect = document.getElementById('start-button').getBoundingClientRect();
  confetti({
    particleCount: 150,
    startVelocity: 45,
    spread: 70,
    origin: {
      x: (rect.left + rect.width / 2) / window.innerWidth,
      y: (rect.top + rect.height / 2) / window.innerHeight
    }
  });

  // Hide the button
  button.style.display = 'none';

  // Show the content
  content.classList.add('show');

  // Start music after 5 seconds
  // This currently fades in over 5 seconds (0.02 increase every 100ms).
  setTimeout(() => {
    audio.volume = 0;
    audio.play().then(() => {
      let vol = 0;
      const fadeIn = setInterval(() => {
        if (vol < 1) {
          vol += 0.05;
          audio.volume = Math.min(vol, 1);
        } else {
          clearInterval(fadeIn);
        }
      }, 250); // every XXms // 50 == 2s fade-in
    }).catch(err => {
      console.warn("Autoplay might be blocked until user interacts.");
    });
  }, 100); // 2 second delay before music starts
});


