export function disableAnimations() {
  const style = document.createElement("style");

  style.appendChild(
    document.createTextNode(`
    *,*::before,*::after {
      animation-delay: 0s !important;
      animation-duration: 0s !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  `),
  );
  document.head.appendChild(style);

  return () => {
    (() => {
      window.getComputedStyle(document.body);
    })();

    setTimeout(() => {
      document.head.removeChild(style);
    }, 1);
  };
}
