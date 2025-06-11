import { useState, useEffect } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { IconButton } from "@mui/material";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <IconButton
      onClick={scrollToTop}
      sx={{
        position: "fixed",
        right: { xs: "10px", sm: "20px" },
        bottom: { xs: "10px", sm: "20px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: "40px", sm: "50px" },
        height: { xs: "40px", sm: "50px" },
        backgroundColor: "rgba(4, 0, 255, 0.3)",
        border: "2px solid black",
        visibility: isVisible ? "visible" : "hidden",
        opacity: isVisible ? 1 : 0,
        transition: "visibility 0.3s ease, opacity 0.3s ease",
        zIndex: 3,
        "&:hover": {
          backgroundColor: "rgba(0, 72, 255, 0.6)",
        },
      }}
    >
      <KeyboardDoubleArrowUpIcon fontSize="small" sx={{color: 'white'}} />
    </IconButton>
  );
};

export default ScrollToTop;