import Image from "next/image"

import styles from "../styles/CardMovie.module.css"

import {FaStar} from "react-icons/fa"

export default function SearchMovie ({movie}) {
  const releaseDate = movie.release_date
  return (
    <div className={styles.card}>
      <Image className={styles.img} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={350} height={450} alt={movie.title} />
      <h3 className={styles.title_1}>{movie.title}</h3>
      <div className={styles.info}>
        <p>Data de lançamento: {releaseDate.split('-').reverse().join('-')}</p>
        <p><FaStar />{movie.vote_average}</p>
      </div>
    </div>
  )
}
