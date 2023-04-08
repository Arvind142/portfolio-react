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

const Introduction = () => {
    return (
        <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <span style={{ fontSize: "50px", textAlign:'center'}}>
                  Hey! 👋
                  <br />
                  I'm Arvind Choudhary 
              </span>
            </Animator>
          </ScrollPage>
    )
}

export default Introduction;