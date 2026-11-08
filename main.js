window.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => {
    document.body.classList.remove('container');
    document.body.classList.add('garden-ready');
  });
});