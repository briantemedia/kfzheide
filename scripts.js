document.addEventListener('DOMContentLoaded', function() {
  // Cookie-Banner-Funktionalität
  const cookieBanner = document.getElementById('cookie-banner');
  const cookieAcceptButton = document.querySelector('.cookie-banner button');

  cookieAcceptButton.addEventListener('click', function() {
    cookieBanner.style.display = 'none';
    // Zustimmung speichern (optional, hier via localStorage)
    localStorage.setItem('cookiesAccepted', 'true');
  });

  // Prüfen, ob Cookies bereits akzeptiert wurden
  if (localStorage.getItem('cookiesAccepted') === 'true') {
    cookieBanner.style.display = 'none';
  }

  // Terminbuchungsformular (im Bereich "Termin buchen")
  const appointmentForm = document.querySelector('#termin-buchen form');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Hier können weitere Validierungen oder AJAX-Aufrufe erfolgen.
      alert('Vielen Dank! Ihr Terminwunsch wurde gesendet.');
      appointmentForm.reset();
    });
  }

  // Kontaktformular (im Bereich "Kontakt")
  const contactForm = document.querySelector('#kontakt form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Hier können weitere Validierungen oder AJAX-Aufrufe erfolgen.
      alert('Vielen Dank! Ihre Nachricht wurde gesendet.');
      contactForm.reset();
    });
  }
});
