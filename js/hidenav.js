let prevScrollpos = window.pageYOffset;
console.log(prevScrollpos);
const navbar = document.querySelector('#navbar');

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos);

  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = '18px';
  } else {
    navbar.style.top = '-100px';
  }

  prevScrollpos = currentScrollPos;
};
