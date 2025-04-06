
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