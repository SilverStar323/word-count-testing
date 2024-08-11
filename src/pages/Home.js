import { Header, Counter } from "../components";

export const Home = () => {
  
  return (
    <main>
      <Header
        title={"Word Counter"}
        subTitle={"Free online Character and word count tool."}></Header>
      <Counter />
    </main>
  )
}
