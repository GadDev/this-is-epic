import { useState, useEffect } from "react";

export default function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    // clear observer : Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
