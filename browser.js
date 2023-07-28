function switchImage(event) {
    const imageContainer = document.getElementById('imageContainer');
    const newImageUrl = event.target.getAttribute('data-image');
  
    // Remove the previous image if any
    const existingImage = imageContainer.querySelector('img');
    if (existingImage) {
      existingImage.remove();
    }
  
    // Create a new image element with the selected picture
    const newImage = document.createElement('img');
    newImage.src = newImageUrl;
    newImage.alt = 'Image';
  
    // Append the new image to the container
    imageContainer.appendChild(newImage);
  }
  
  // Add event listeners to the buttons
  const pictureButtons = document.querySelectorAll('.pictureButton');
  pictureButtons.forEach(button => {
    button.addEventListener('click', switchImage);
  });

  const newImage = document.createElement('img');
  newImage.src = imageUrl;
  newImage.alt = 'Image';
  newImage.style.width = '200px';
  newImage.style.cssFloat = 'left';
  newImage.style.float = 'left';
  imageContainer.appendChild(newImage);

  function moveImageToLeft() {
    const imageElement = document.getElementById('image');
    imageElement.style.float = 'left';
  }
