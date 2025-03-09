// Mở lightbox và hiển thị ảnh full size
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imageSrc; // Đặt đường dẫn ảnh vào lightbox
    lightbox.style.display = 'flex'; // Hiển thị lightbox
}

// Đóng lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Ẩn lightbox
}