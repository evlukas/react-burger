import React, { useEffect } from "react";

const ScrollToBottom = ({ containerRef }) => {
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  });

  return null;
};

export default ScrollToBottom;
