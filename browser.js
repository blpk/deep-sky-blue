function switchImage(event) {
    const imageContainer = document.getElementById('imageContainer');
    const newImageUrl = event.target.getAttribute('data-image');
      const existingImage = imageContainer.querySelector('img');
    if (existingImage) {
      existingImage.remove();
    }
      const newImage = document.createElement('img');
    newImage.src = newImageUrl;
    newImage.alt = 'Image';
  
    imageContainer.appendChild(newImage);
  }
    const pictureButtons = document.querySelectorAll('.pictureButton');
  pictureButtons.forEach(button => {
    button.addEventListener('click', switchImage);
  });
