import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import CardSearch from "../components/CardSearch";

const searchUrl = "https://api.themoviedb.org/3/search/movie";
const apiKey = "api_key=c01dedae3d0c9883243fcbb88c1ff894";

export default function Search() {
  const searchParams = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchUrl}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div>
      <div className={styles.title_container}>
      <h2 className={styles.title}>
        Resultados para: {query}
      </h2>
      </div>
      <div className={styles.movie_container}>
        {movies.length > 0 &&
          movies.map((movie, index) => (
            <CardSearch
              key={index}
              movie={movie}
            />
          ))}
      </div>
    </div>
  );
};
