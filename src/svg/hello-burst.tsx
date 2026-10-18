import React from "react";

export function HelloBurstSvg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.00098 20.001C2.00098 17.001 5.00098 11.001 2.00098 2.00098M9.50098 23.501C13.8343 19.3343 22.701 9.20098 23.501 2.00098M12.501 30.501C15.1676 30.501 22.301 29.101 29.501 23.501"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#FD853A"
      />
    </svg>
  );
}

export default HelloBurstSvg;
