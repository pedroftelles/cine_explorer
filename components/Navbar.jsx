import { useState } from "react";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Navbar.module.css";
import { BiSearchAlt2 } from "react-icons/bi";

export async function Search(context) {
  return {
    props: {
      search: context.query.search || ""
    }
  }
}

export default function Navbar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    router.push(`/Search?q=${search}`)
    setSearch("")
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/logo.png"
          width={30}
          height={30}
          alt="Cine Explorer"
        />
        <Link className={styles.link_items} href="/">
          <h1>
            Cine<span>Explorer</span>
          </h1>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
}
