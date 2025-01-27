import { useEffect, useState } from "react";
import scrollIcon from "../../images/icons8-scroll-up-50.png"; // Import image

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > window.innerHeight * 0.2); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px", 
            zIndex: "1000",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img
            src={scrollIcon}
            alt="Scroll to top"
            style={{
              width: "50px",
              height: "50px",
              transition: "transform 0.2s ease-in-out",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
