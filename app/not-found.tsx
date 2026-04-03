import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.code}>404</div>
        <p className={styles.message}>
          This page does not exist. Return to the intelligence network.
        </p>
        <Link href="/" className={styles.link}>
          Back to Homepage &rarr;
        </Link>
      </main>
      <Footer />
    </>
  );
}
