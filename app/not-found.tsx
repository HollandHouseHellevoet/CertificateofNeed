import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-source-sans), system-ui, sans-serif",
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.20em",
          textTransform: "uppercase" as const,
          color: "var(--orange)",
          border: "1px solid rgba(207, 86, 4, 0.45)",
          padding: "4px 12px",
          marginBottom: "28px",
          display: "inline-block",
        }}
      >
        404 — Page Not Found
      </p>
      <h1
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontWeight: 700,
          fontSize: "2.5rem",
          color: "var(--cream)",
          lineHeight: 1.1,
          marginBottom: "16px",
        }}
      >
        This page doesn&apos;t exist
      </h1>
      <p
        style={{
          fontFamily: "var(--font-source-sans), system-ui, sans-serif",
          fontSize: "1rem",
          color: "rgba(248,245,239,0.60)",
          lineHeight: 1.65,
          maxWidth: "480px",
          marginBottom: "32px",
        }}
      >
        The page you&apos;re looking for may have been moved or doesn&apos;t exist.
        Return to the homepage to explore Certificate of Need law intelligence
        across 29 U.S. jurisdictions.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "var(--orange)",
          color: "#fff",
          padding: "12px 24px",
          borderRadius: "2px",
          fontFamily: "var(--font-source-sans), system-ui, sans-serif",
          fontWeight: 700,
          fontSize: "12.5px",
          letterSpacing: "0.10em",
          textTransform: "uppercase" as const,
          textDecoration: "none",
        }}
      >
        Return to Homepage
      </Link>
    </main>
  );
}
