import React from "react";

interface RSectionProps {
  heading?: string | null;
  children: React.ReactNode | string;
}

export default function RSection({ heading, children }: RSectionProps) {
  return (
    <section className="r-section">
      {heading && <div className="r-section-heading">{heading}</div>}
      <div className="r-section-content">{children}</div>
    </section>
  );
}
