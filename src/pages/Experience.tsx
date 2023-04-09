import { ReactEventHandler } from "react";
import CompanyExperience from "../component/CompanyExperiences";
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
  Move,
  StickyIn,
  MoveIn,
  FadeOut,
} from "react-scroll-motion";

export default function Experience() {

  return (
    
    
    <ScrollPage>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
<span>
<div className="row g-0 d-flex p-2 justify-content-evenly" id="experience">
                <nav className="d-flex p-2 justify-content-start border">
                    <span className="mb-0 h3">Experience</span>
                </nav>
                <div className="col-sm-6 col-md-6 d-flex p-2 justify-content-evenly">
                    <p>
                        <img src="portfolio_images/experience.png" width="200" height="200" className="img-fluid" alt="experience" />
                    </p>
                </div>
                <div className="col-6 col-md-6">
                    <br /><i><u><b>Career</b></u></i>
                    <ul>
                        {
                          Career_data.experiences?.map(e=><CompanyExperience  key={e.company} company={e.company} positions={e.positions} startDate={e.startdate} endDate={e.enddate}/>)
                        }
                    </ul>
                </div>
            </div>
</span>
    </Animator>
    </ScrollPage>
  );
}
