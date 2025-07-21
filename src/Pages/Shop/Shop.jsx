import React, { useEffect } from "react";

export default function Shop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // Empty dependency array ensures this runs only once on mount
  return (
    <div>
      <img
        className="w-full "
        src="https://cdn.pixabay.com/photo/2017/10/26/17/51/under-construction-2891888_1280.jpg"
        alt="Shop"
      ></img>
    </div>
  );
}
