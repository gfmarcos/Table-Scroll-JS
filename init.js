window.addEventListener('scroll', () => {
  const content = document.querySelector('#content');
  const thead = document.querySelector('#thead');
  const label = document.querySelector('#label');
  const contentPos = content.offsetTop;

  let pageScroll = window.pageYOffset;
  let i = pageScroll - contentPos;

  if (pageScroll >= contentPos) {
    thead.style.cssText = `transform: translateY(${i}px);`;
    label.classList.add('label--in');
    content.style.cssText= 'padding-top: 0;'
  } else {
    i = 0;
    thead.style.cssText = `transform: translateY(0px);`;
    label.classList.remove('label--in');
    content.style.cssText= 'padding-top: 50px;'
  }
});
