import React from "react";

type HeadingProps = {
  children: React.ReactNode;
};

export default function Heading({ children }: HeadingProps) {
  return <h2 className="text-slate-300 text-2xl mb-1">{children}</h2>;
}
