import { SkillType } from "../types/SkillType";
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

export default function Skills(props: SkillType) {
  const TestingFramework=props.hardSkills?.["Testing Framework"];
  const vcs=props.hardSkills?.["VCS/SCM"];
  const buildtool=props.hardSkills?.["software project management"];
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    
      <span>
      <div className="row" id="skill">
        <nav className="">
          <span className="h2">Skill</span>
        </nav>
        <div className="col">
          <p>
            <img
              src="portfolio_images/skill.png"
              width="200"
              height="200"
              className="img-fluid"
              alt="skill"
            />
          </p>
        </div>
        <div className="col">
          <br />
          <b>
            
            <u>
              <i> Soft Skills</i>
            </u>
          </b>
          <ul>
            {props.softSkills?.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
          <br />
          <b>
            
            <u>
              <i>Hard Skills</i>
            </u>
          </b>
          <ul>
            <li>
              <b>
                <u>Programming Language:</u>
              </b>
              <ul>
                {props.hardSkills?.programmingLanguages?.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </li>
            <li>
              <b>
                <u>Testing Framework:</u>
              </b>
              <ul>
                {TestingFramework?.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </li>
            <li>
              <b>Automation</b>
              <ul>
                <li>
                  <i>Browser</i>
                  <ul>
                    {props.hardSkills?.Automation?.Browser?.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <i>Window</i>
                  <ul>
                    {props.hardSkills?.Automation?.Windows?.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <i>API</i>
                  <ul>
                    {props.hardSkills?.Automation?.API?.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <b>
                <u>SCM/VCS:</u>
              </b>
              <ul>
                {vcs?.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </li>

            <li>
              <b>
                <u>CICD:</u>
              </b>
              <ul>
                {props.hardSkills?.CICD?.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </li>

            <li>
              <b>
                <u>Project Management:</u>
              </b>
              <ul>
                {buildtool?.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </li>

            <li>
              <b>
                <u>Containerization:</u>
              </b>
              <ul>
                {props.hardSkills?.Containerization?.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </li>

            <li>
              <b>
                <u> BDD</u>
              </b>
              <ul>
                {props.hardSkills?.BDD?.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      </span>
  );
}
