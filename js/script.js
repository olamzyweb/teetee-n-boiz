// script.js for Teetee n Boiz Catering Website

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for all internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Booking form validation and location access
    const bookingForm = document.getElementById("booking-form");
    if (bookingForm) {
      bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        // Attempt to get geolocation
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            alert(`Your location has been captured:\nLatitude: ${lat}\nLongitude: ${lng}\n\nNow submitting your form.`);
  
            // You can send this info to a backend or display it in a field
            bookingForm.submit();
          }, () => {
            alert("Location access denied. Please allow location to submit.");
          });
        } else {
          alert("Geolocation is not supported by your browser.");
        }
      });
    }

    const track = document.querySelector('.gallery-track');
    const prevButton = document.querySelector('.gallery-prev');
    const nextButton = document.querySelector('.gallery-next');
    const cardWidth = 320; // card width + gap

    // Scroll to the next set of cards
    nextButton.addEventListener('click', () => {
      track.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    });

    // Scroll to the previous set of cards
    prevButton.addEventListener('click', () => {
      track.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    });

    // Update button visibility based on scroll position
    track.addEventListener('scroll', () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      prevButton.style.opacity = track.scrollLeft > 0 ? '1' : '0.5';
      nextButton.style.opacity = track.scrollLeft < maxScroll ? '1' : '0.5';
    });

    // Initialize button visibility
    prevButton.style.opacity = '0.5';
  });
  