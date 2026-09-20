(function () {
  const nav = document.getElementById('primary-nav');
  const toggle = document.getElementById('menu-toggle');
  if (nav && toggle) {
    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close menu' : 'Menu';
    });
  }

  const yearNodes = document.querySelectorAll('[data-year]');
  yearNodes.forEach(n => n.textContent = new Date().getFullYear());

  const form = document.getElementById('consultation-form');
  const status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      status.hidden = false;
      status.textContent = 'Thank you. Your consultation request is ready for submission. This static prototype validates the required fields locally; connect this form to a Cloudflare Worker, Pages Function, or form provider for production delivery.';
      status.setAttribute('role', 'status');
      form.reset();
      status.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest' });
    });
  }
})();
