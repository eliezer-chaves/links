
function pageLoader() {

  // Pupilas seguem o mouse
  const pupils = document.querySelectorAll(".eye .pupil");
  window.addEventListener("mousemove", (e) => {
    pupils.forEach((pupil) => {
      const eye = pupil.parentElement;
      const eyeRect = eye.getBoundingClientRect();
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;

      const deltaX = e.pageX - eyeCenterX;
      const deltaY = e.pageY - eyeCenterY;

      const distance = Math.min(
        Math.sqrt(deltaX * deltaX + deltaY * deltaY),
        eyeRect.width / 4
      );

      const angle = Math.atan2(deltaY, deltaX);
      const x = distance * Math.cos(angle);
      const y = distance * Math.sin(angle);

      pupil.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  // Ativar tooltips
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll("[data-bs-toggle='tooltip']")
  );
  tooltipTriggerList.map((tooltipTriggerEl) => {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}