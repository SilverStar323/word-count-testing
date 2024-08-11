import { Link } from "react-router-dom";
import NotFoundImage from "../assets/page-not-found.jpg";
import { Header } from "../components";

export const PageNotFound = () => {
  return (
    <main>
      <section className="pnf">
        <div className="oops">
          <p>Ooops - Page Not Found!</p>
          <img src={NotFoundImage} alt="" />
          <Link to="/">
            <button>Go Back To Word Counter</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
