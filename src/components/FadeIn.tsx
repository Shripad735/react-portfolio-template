import React, {
  CSSProperties,
  ElementType,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";

interface Props {
  wrapperTag?: ElementType;
  childTag?: ElementType;
  className?: string;
  childClassName?: string;
  transitionDuration?: number;
  threshold?: number;
  rootMargin?: string;
  onComplete?: () => void;
}

export default function FadeIn({
  children,
  wrapperTag,
  childTag,
  className,
  childClassName,
  transitionDuration = 600,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  onComplete,
}: PropsWithChildren<Props>) {
  const WrapperTag = wrapperTag || "div";
  const ChildTag = childTag || "div";
  const refs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    if (!refs.current.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold, rootMargin }
    );

    refs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    const completeTimer = window.setTimeout(() => {
      if (onComplete) onComplete();
    }, transitionDuration);

    return () => {
      observer.disconnect();
      window.clearTimeout(completeTimer);
    };
  }, [children, onComplete, rootMargin, threshold, transitionDuration]);

  const style: CSSProperties = {
    transitionDuration: `${transitionDuration}ms`,
  };

  return (
    <WrapperTag className={className}>
      {React.Children.map(children, (child, i) => (
        <ChildTag
          className={`fade-in-section ${childClassName || ""}`.trim()}
          style={style}
          ref={(element: HTMLElement | null) => {
            refs.current[i] = element;
          }}
        >
          {child}
        </ChildTag>
      ))}
    </WrapperTag>
  );
}
