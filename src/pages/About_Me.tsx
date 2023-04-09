import { Career_data } from "../data/Career_data";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Fade,
  batch,
  Sticky,
  MoveOut,
  ZoomIn,
  FadeIn,
  FadeOut,
  Move,
  StickyIn,
  MoveIn,
  StickyOut,
} from "react-scroll-motion";

export default function About_Me() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  const yoe = () => {
    let today = new Date();
    let olday = new Date(Career_data.startDate);
    let yrs = today.getFullYear() - olday.getFullYear();
    let months = today.getMonth() - olday.getMonth();
    if (months < 0) {
      yrs--;
    }
    months = months < 0 ? 12 + months : months;
    // console.log('yrs', yrs, 'months', months)
    return " " + yrs + "." + months;
  };

  return (

    
    <ScrollPage>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <span>
        
      <div className="row" id="about">
        <nav className="justify-content-start">
          <span className="h2">About Me</span>
        </nav>
        <div className="col">
          <p>
            <img
              src="portfolio_images/about.png"
              width="200"
              height="200"
              className="img-fluid"
              alt="about"
            />
          </p>
        </div>
        <div className="col">
          <div>
            <strong>
              {Career_data.title} with
              <span id="noOfYearsOfExperience">{yoe()}</span> years of
              experience.
            </strong>
          </div>
          <br />
          <div>
            {Career_data.summary}
          </div>
        </div>
      </div>
      </span>
      </Animator>
    </ScrollPage>
  );
}
