import { useEffect } from "react";

const CursorDot = () => {
  useEffect(() => {
    const dot = document.querySelector(".cursor-dot");

    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const onMouseOver = (e) => {
      if (
        e.target.closest(
          "a, button, .wave-link, .footer-wave-link, .project-action, .project-image-wrapper"
        )
      ) {
        dot.classList.add("cursor-grow");
      }
    };

    const onMouseOut = () => {
      dot.classList.remove("cursor-grow");
    };

    const animate = () => {
      x += (targetX - x) * 0.2; // smooth trailing
      y += (targetY - y) * 0.2;

      dot.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return <div className="cursor-dot" />;
};

export default CursorDot;
