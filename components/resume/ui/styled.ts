import React from "react";

// very small "styled-components-like" helper (no deps)
type El = keyof JSX.IntrinsicElements;

function hash(s: string) {
  let h = 0; for (let i=0;i<s.length;i++) h = (h<<5) - h + s.charCodeAt(i) | 0;
  return "s" + Math.abs(h).toString(36);
}

function inject(css: string, className: string) {
  if (typeof document === "undefined") return;
  const id = `sc-${className}`;
  if (document.getElementById(id)) return;
  const tag = document.createElement("style");
  tag.id = id;
  tag.innerHTML = `.${className}{${css}}`;
  document.head.appendChild(tag);
}

export function styled<T extends El>(el: T) {
  return (strings: TemplateStringsArray, ...expr: any[]) => {
    const raw = strings.map((s, i) => s + (expr[i] ?? "")).join("");
    const className = hash(raw);
    inject(raw, className);
    return function Styled(
      props: JSX.IntrinsicElements[T] & { as?: El; className?: string }
    ) {
      const Comp: any = props.as || el;
      const cn = props.className ? `${className} ${props.className}` : className;
      const { as: _as, className: _c, ...rest } = props as any;
      return React.createElement(Comp, { className: cn, ...rest });
    };
  };
}
