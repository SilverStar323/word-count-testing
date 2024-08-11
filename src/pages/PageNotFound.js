import { Link } from "react-router-dom";
import NotFoundImage from "../assets/page-not-found.jpg";

export const PageNotFound = () => {
  return (
    <main>
      <section className="pnf">
        <div className="oops">
          <p data-testid="pnfText">Ooops - Page Not Found!</p>
          <img src={NotFoundImage} alt="Page Not Found" />
          <Link to="/">
            <button data-testid="homeBtn">Go Back To Word Counter</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
