function showImage() {
  const birdsLink = document.querySelectorAll('.navigation__item');

  birdsLink.forEach(link => {
    link.addEventListener('mouseenter', e => {
      e.target.lastElementChild.classList.add('images__item_active');
    });

    link.addEventListener('mouseleave', e => {
      e.target.lastElementChild.classList.remove('images__item_active');
    });
  });
}

export default showImage;