import { useState } from "react";

const useHeader = () => {
  const links = [
    { id: 1, name: "Popular", tag: "/popular" },
    { id: 2, name: "Top Rated", tag: "/toprated" },
    { id: 3, name: "Upcoming", tag: "/upcoming" },
  ];

  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return { links, open, toggleMenu };
};

export default useHeader;
