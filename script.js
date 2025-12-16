// Contoh tracking klik (bisa dipakai untuk FB / TikTok Pixel)
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('CTA Clicked');
  });
});
