import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Footer() {
  const location = useLocation();
  const currentPath = window.location.pathname;
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    if (currentPath == "/layouts/aboutus") {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [location]);

  return (
    <footer
      style={{
        backgroundImage: `url(})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: showFooter ? "flex" : "none",
      }}
    >
      <div className="flex flex-row justify-between items-center w-full text-white">
        Hello world
      </div>

    </footer>
  );
}
