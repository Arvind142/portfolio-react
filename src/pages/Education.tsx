
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
  } from "react-scroll-motion";
  

export default function Education(props:EducationType) {

  return (
    
    <ScrollPage>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
    <div className="row g-0 d-flex p-2 justify-content-evenly" id="education">
                <nav className="d-flex p-2 justify-content-start border">
                    <span className="mb-0 h3">Education</span>
                </nav>
                <div className="col-sm-6 col-md-6 d-flex p-2 justify-content-evenly">
                    <p>
                        <img src="portfolio_images/education.png" width="200" height="200" className="img-fluid" alt="experience" />
                    </p>
                </div>
                <div className="col-6 col-md-6">
                    <br /> <u><i><b>Education</b></i></u>
                    <ul>
                        {
                            props.educationEntry?.map(e=><InstitutePosition key={e.instituteName+''+e.startYear+''+e.endYear}
                                course={e.course} endYear={e.endYear} startYear={e.startYear} percentage={e.percentage} instituteName={e.instituteName}/>)
                        }
                    </ul>
                </div>
            </div>
            </Animator>
            </ScrollPage>
  );
}
