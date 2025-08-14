let lastRandom = null;

let r = Math.floor(Math.random() * 10) + 1;

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.backgroundImage = `url('images/wallpaperflare.com_wallpaper (${r}).jpg')`

  document.getElementById('changeBtn').addEventListener('click', () => {
    const wallpapers = "images/wallpaperflare.com_wallpaper";

    let newRandom;
    do {
      newRandom = Math.floor(Math.random() * 10) + 1;
    } while (newRandom === lastRandom);

    lastRandom = newRandom;

    const randomImg = `${wallpapers} (${newRandom}).jpg`;

    document.body.style.backgroundImage = `url('${randomImg}')`
  });
})
