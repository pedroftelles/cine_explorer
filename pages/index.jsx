import styles from "../styles/Home.module.css";

import CardMovie from "../components/CardMovie";


export async function getStaticProps() {
  const moviesUrl = "https://api.themoviedb.org/3/movie/";
  const apiKey = "api_key=c01dedae3d0c9883243fcbb88c1ff894";

  const res = await fetch(`${moviesUrl}popular?${apiKey}`);
  const data = await res.json();

  return {
    props: {
      movies: data.results,
    },
  };
}

export default function Home({ movies }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Filmes populares
        </h1>
      </div>
      <div className={styles.movie_container}>
        {movies.map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
