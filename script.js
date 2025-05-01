function initCarousel(container) {
  const images = container.querySelectorAll('.carousel-image');
  const dots = container.querySelectorAll('.dot');
  const prevBtn = container.querySelector('.carousel-btn.prev');
  const nextBtn = container.querySelector('.carousel-btn.next');
  let currentIndex = 0;

  function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    images[index].classList.add('active');
    dots[index].classList.add('active');
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
      });
    });
  }
}

// Initialize carousel after HTMX content swap
document.addEventListener('htmx:afterSwap', function() {
  const projectContainer = document.querySelector('.project-container');
  if(projectContainer) {
    initCarousel(projectContainer);
  }
});
