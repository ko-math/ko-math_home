const detailsList = document.querySelectorAll('.dialog');

detailsList.forEach(dia => {
  const content = dia.querySelector('.content');
  dia.addEventListener('toggle', () => {
    if (dia.open) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = '0px';
    }
  });
});
