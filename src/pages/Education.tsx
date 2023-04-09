
import { ReactEventHandler } from "react";
import CompanyExperience from "../component/CompanyExperiences";
import { Career_data } from "../data/Career_data";
import { EducationType } from "../types/EducationType";
import InstitutePosition from "../component/InstitutePoisition";
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
  } from "react-scroll-motion";
  

export default function Education(props:EducationType) {

  return (
    
    <span>
    <div className="row" id="education">
                <nav className="">
                <span className="h2">Education</span>
                </nav>
                <div className="col">
                    <p>
                        <img src="portfolio_images/education.png" width="200" height="200" className="img-fluid" alt="experience" />
                    </p>
                </div>
                <div className="col">
                    <br /> <u><i><b>Education</b></i></u>
                    <ul>
                        {
                            props.educationEntry?.map(e=><InstitutePosition key={e.instituteName+''+e.startYear+''+e.endYear}
                                course={e.course} endYear={e.endYear} startYear={e.startYear} percentage={e.percentage} instituteName={e.instituteName}/>)
                        }
                    </ul>
                </div>
            </div>
    </span>
  );
}
