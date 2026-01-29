import { useEffect } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";

MouseFollower.registerGSAP(gsap);

const CursorDot = () => {
  useEffect(() => {
    const cursor = new MouseFollower({
      container: document.body,

      speed: 0.6,
      ease: "expo.out",

      skewing: 0,
      skewingText: 0,

      stateDetection: {
        "-grow": "a, button, .wave-link, .footer-wave-link, .project-action, .project-image-wrapper, .illustration-feature figure, .illustration-split figure, .illustration-characters figure",
      },
    });

    return () => cursor.destroy();
  }, []);

  return null;
};

export default CursorDot;
