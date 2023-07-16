import Image from "next/image"
import Link from "next/link"

import styles from "../styles/CardMovie.module.css"

import {FaStar} from "react-icons/fa"

export default function CardMovie ({movie}) {
  const releaseDate = movie.release_date
  return (
    <div className={styles.card}>
      <Image className={styles.img} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={350} height={450} alt={movie.title} />
      <Link className={styles.title} href={`/movie/${movie.id}`}><h3>{movie.title}</h3></Link>
      <div className={styles.info}>
        <p>Data de lançamento: {releaseDate.split('-').reverse().join('-')}</p>
        <p><FaStar />{movie.vote_average}</p>
      </div>
    </div>
  )
}
