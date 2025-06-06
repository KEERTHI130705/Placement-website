export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = -70; // adjust if header overlaps
    const y = el.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
