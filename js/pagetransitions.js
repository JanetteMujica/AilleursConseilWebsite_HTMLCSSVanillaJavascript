window.onload = () => {
  const anchors = document.querySelectorAll('.ptrans');
  // console.log(anchors);
  const transitionEl = document.querySelector('.transition');

  setTimeout(() => {
    transitionEl.classList.remove('is-active');
  }, 500);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = e.target.href;

      transitionEl.classList.add('is-active');

      setInterval(() => {
        window.location.href = target;
      }, 500);
    });
  }
};
