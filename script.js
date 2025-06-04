window.onload = () => {
  document.querySelectorAll(".hero-header span").forEach((el, i) =>
    setTimeout(() => {
      el.style.cssText += "opacity:1; filter:blur(0); transform:translateY(0);";
    }, i * 120)
  );

  Array.from(document.querySelectorAll(".animation-class")).forEach((el, i) =>
    setTimeout(() => {
      el.style.cssText +=
        "opacity:1; filter:blur(0); transform:translateX(0) translateZ(0) translateY(0); ";
    }, i * 250)
  );
};
