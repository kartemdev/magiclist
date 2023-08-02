declare module 'app';

declare module 'hooks';

declare module 'assets';

declare module 'components';

declare module '*.svg' {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
