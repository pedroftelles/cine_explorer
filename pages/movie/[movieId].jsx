import styles from "../../styles/Movie.module.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const moviesUrl = "https://api.themoviedb.org/3/movie/";
const apiKey = "api_key=c01dedae3d0c9883243fcbb88c1ff894";

export async function getStaticPaths() {
  const res = await fetch(`${moviesUrl}popular?${apiKey}`);
  const data = await res.json();

  const paths = data.results.map((movie) => {
    return {
      params: { movieId: movie.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.movieId;

  const res = await fetch(`${moviesUrl}${id}?${apiKey}`);

  const data = await res.json();

  return {
    props: { movie: data },
  };
}

export default function Movie({ movie }) {
  return (
    <div className={styles.movie_container}>
      <div className={styles.card}>
        <Image
          className={styles.img}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={635}
          height={800}
          alt={movie.title}
        />
        <div>
          <h1 className={styles.title}>{movie.title}</h1>
        </div>
        <div className={styles.info}>
          <p><span>Duração: </span>Duração: {movie.runtime} minutos</p>
          <p>
            <FaStar />
            {movie.vote_average}
          </p>
          <p><span>Descrição:</span> {movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
