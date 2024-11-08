import { useEffect, useState } from "react";
import NavBar from '../components/NavBar'

function Actors() {

  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/actors')
    .then(r => r.json())
    .then(data => setActors(data))
  })

  const actorsList = actors.map(actor => (
    <article key={actor.id}>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies?.length > 0 && actor.movies.map(movie => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </article>
  ))

  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorsList}
      </main>
    </>
  );
};

export default Actors;
