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
    
    
    
<span>
<div className="row" id="experience">
                <nav className="">
                <span className="h2">Experience</span>
                </nav>
                <div className="col">
                    <p>
                        <img src="portfolio_images/experience.png" width="200" height="200" className="img-fluid" alt="experience" />
                    </p>
                </div>
                <div className="col">
                    <br /><i><u><b>Career</b></u></i>
                    <ul>
                        {
                          Career_data.experiences?.map(e=><CompanyExperience  key={e.company} company={e.company} positions={e.positions} startDate={e.startdate} endDate={e.enddate}/>)
                        }
                    </ul>
                </div>
            </div>
</span>
  );
}
