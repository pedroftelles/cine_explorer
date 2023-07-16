import Link from "next/link";
import styles from "../styles/error.module.css"

export default function NotFound() {
  return (
    <>
      <div className={styles.container}>
        <h1>404</h1>
        <p>Parece que esta página não existe! :(</p>
        <Link href="/">Início</Link>
      </div>
    </>
  );
}
