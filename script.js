
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const emailBtn = document.getElementById('emailBtn');
if (emailBtn) {
  emailBtn.addEventListener('click', () => {
    const name = document.querySelector('input[type="text"]').value || 'Website enquiry';
    const email = document.querySelector('input[type="email"]').value || '';
    const service = document.querySelector('select').value;
    const message = document.querySelector('textarea').value || '';
    const subject = encodeURIComponent(`Website enquiry - ${service}`);
    const body = encodeURIComponent(`Name: ${name}
Email: ${email}
Service: ${service}

Message:
${message}`);
    window.location.href = `mailto:unyventure@gmail.com?subject=${subject}&body=${body}`;
  });
}
