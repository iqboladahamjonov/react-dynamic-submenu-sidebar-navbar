import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null); //useRef refrains from rerendering?
  const [columns, setColumns] = useState("col-2");
  //everytime the location changes, re-render it using useEffect
  useEffect(() => {
    //when i call useeffect, this is when want to get ref container to apply inlince css
    const submenu = container.current; //this gives me the node
    const { center, bottom } = location;
    //now we can apply styling to that node
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    setColumns("col-2");
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]); //[location] is called dependency array
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
