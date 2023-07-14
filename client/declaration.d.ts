declare module 'static';
declare module 'static/*';

declare module '*.svg' {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
