function onClickNext() {
  console.log('clicked');
  const listImages = document.querySelectorAll('.img-item');
  const currentImage = document.querySelector('.img-item.active');
  const mainImg = document.querySelector('.main-img');
  const currentIndex = Array.from(listImages).indexOf(currentImage);
  if (currentIndex === listImages.length - 1) {
    listImages[0].classList.add('active');
    mainImg.src = listImages[0].src;
    currentImage.classList.remove('active');
  }
  else {
    listImages[currentIndex + 1].classList.add('active');
    mainImg.src = listImages[currentIndex + 1].src;
    currentImage.classList.remove('active');
  }
}

function onClickPrev() {
  console.log('clicked');
  const listImages = document.querySelectorAll('.img-item');
  const currentImage = document.querySelector('.img-item.active');
  const mainImg = document.querySelector('.main-img');
  const currentIndex = Array.from(listImages).indexOf(currentImage);
  if (currentIndex === 0) {
    listImages[listImages.length - 1].classList.add('active');
    mainImg.src = listImages[listImages.length - 1].src;
    currentImage.classList.remove('active');
  }
  else {
    listImages[currentIndex - 1].classList.add('active');
    mainImg.src = listImages[currentIndex - 1].src;
    currentImage.classList.remove('active');
  }
}

function changeMainImg(index) {
  const mainImg = document.querySelector('.main-img');
  const listImages = document.querySelectorAll('.img-item');
  const currentImage = document.querySelector('.img-item.active');
  currentImage.classList.remove('active');
  listImages[index].classList.add('active');
  mainImg.src = listImages[index].src;
}