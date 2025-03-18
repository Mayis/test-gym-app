import React, { ReactNode } from "react";

const Marquee = ({ children, className }: { children: ReactNode; className?: string }) => {
  return React.createElement("marquee", { className }, children);
};

export default Marquee;
