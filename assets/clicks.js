let c = localStorage.getItem('clicks') || 0;
document.addEventListener('click', () => {
  c++;
  localStorage.setItem('clicks', c);
  if (c === 15) {
    alert("Challenge relevé ! 15 clics enregistrés 🎉");
  }
});
