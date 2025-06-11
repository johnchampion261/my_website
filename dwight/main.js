let autoHideTimer;

// Toggle Feedback Form: show and auto-hide after 2 seconds
function showForm() {
  const form = document.getElementById('feedbackForm');
  const showBtn = document.getElementById('showFeedbackBtn');
  const hideBtn = document.getElementById('hideFeedbackBtn');

  if (form && showBtn && hideBtn) {
    form.style.display = 'block';
    showBtn.style.display = 'none';
    hideBtn.style.display = 'inline-block';

    if (autoHideTimer) clearTimeout(autoHideTimer);

    // Auto hide form 2 seconds after showing
    autoHideTimer = setTimeout(() => {
      hideForm();
      alert('Form has been hidden automatically. Thank you for your feedback!');
    }, 2000); // 2000 milliseconds = 2 seconds
  }
}

function hideForm() {
  const form = document.getElementById('feedbackForm');
  const showBtn = document.getElementById('showFeedbackBtn');
  const hideBtn = document.getElementById('hideFeedbackBtn');

  if (form && showBtn && hideBtn) {
    form.style.display = 'none';
    showBtn.style.display = 'inline-block';
    hideBtn.style.display = 'none';

    if (autoHideTimer) clearTimeout(autoHideTimer);
  }
}

// Scroll-to-top button
window.addEventListener('scroll', () => {
  const scrollBtn = document.getElementById('scrollToTop');
  if (scrollBtn) {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Mobile menu toggle (optional)
function toggleMenu() {
  const nav = document.getElementById('mainNav');
  if (nav) {
    nav.classList.toggle('open');
  }
}

// Optional contact form validation
function validateContactForm(event) {
  const name = document.getElementById('name');
  const email = document.getElementById('email');

  if (name && email) {
    if (name.value.trim() === '' || email.value.trim() === '') {
      alert('Please fill in all required fields.');
      event.preventDefault();
    }
  }
}
