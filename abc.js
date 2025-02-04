let currentIndex = 0;
const stories = document.querySelectorAll('.story');
const storyContainer = document.getElementById('story-container');

function showImage(index) {
    currentIndex = index;
    const imageSrc = stories[currentIndex].querySelector('img').src;
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    
    popupImage.src = imageSrc;
    popup.style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function nextImage() {
    if (currentIndex < stories.length - 1) {
        currentIndex++;
        storyContainer.scrollLeft += stories[currentIndex].offsetWidth + 20; // 20 is the gap
    }
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        storyContainer.scrollLeft -= stories[currentIndex].offsetWidth + 20; // 20 is the gap
    }
}

function nextPopupImage() {
    if (currentIndex < stories.length - 1) {
        currentIndex++;
        showImage(currentIndex);
    }
}

function prevPopupImage() {
    if (currentIndex > 0) {
        currentIndex--;
        showImage(currentIndex);
    }
}
