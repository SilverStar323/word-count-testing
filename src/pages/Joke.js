import { Header } from "../components"
import { useFetch } from "../hooks/useFetch"

export const Joke = () => {
  const joke = useFetch("https://api.chucknorris.io/jokes/random");

  return (
    <main>
      <Header
        title="ChuckNorris Jokes"
        subTitle="Free JSON API for hand curated Chuck Norris facts."
      />
      <section className="joke">
        <p>
          <span data-testid="joke">{joke}</span>
          <span> - api.cucknorris.io</span>
        </p>
      </section>
    </main>
  )
}
