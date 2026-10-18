import React from "react";

export function ArrowUpRightSvg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.25 29.75L29.75 12.25"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="white"
      />
      <path
        d="M12.25 12.25H29.75V29.75"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="white"
      />
    </svg>
  );
}

export default ArrowUpRightSvg;
