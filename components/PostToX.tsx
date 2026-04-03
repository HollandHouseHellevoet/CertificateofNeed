"use client";

import styles from "./PostToX.module.css";

export default function PostToX() {
  const handleClick = () => {
    const text = encodeURIComponent(
      "Certificate of Need laws regulate physician competition in 35 jurisdictions. See the data: https://con.rojasreport.com via @TheRojasReport"
    );
    window.open(`https://x.com/intent/tweet?text=${text}`, "_blank");
  };

  return (
    <button className={styles.ghost} onClick={handleClick} type="button">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
      Post to X
    </button>
  );
}
