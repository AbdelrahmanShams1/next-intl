"use client";

import { useInView } from "react-intersection-observer";

export default function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className={`${className} transition-all duration-700 ease-out
        ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}
      `}
    >
      {children}
    </section>
  );
}
