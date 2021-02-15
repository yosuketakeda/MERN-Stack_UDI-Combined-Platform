import { useState, useEffect } from "react";

export default function useScrollPosition(el) {
  const element = el || window;
  const [scrollPos, setScrollPos] = useState(element.pageYOffset);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onScroll = () => {
    setScrollPos(element.pageYOffset);
  };

  useEffect(() => {
    element.addEventListener("scroll", onScroll);
    return () => {
      element.removeEventListener("scroll", onScroll);
    };
  }, [element, onScroll, scrollPos]);

  return scrollPos;
}
