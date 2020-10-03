import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red, blue, green } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    outerbox:
    {
        border:'1px solid red',
        backgroundColor:'white',
        
    }
});

const AutoRotatingCarouselModal = ({ handleOpen, isMobile }) => {
    const classes=useStyles();
    return (
      <div className={classes.outerbox}>
        {/* <Button onClick={() => setHandleOpen({ open: true })}>Open carousel</Button> */}
        <AutoRotatingCarousel
          open={handleOpen.open}
          mobile={isMobile}
        >
          <Slide
            media={
              <img src="/images/2.png" />
            }
            mediaBackgroundStyle={{ backgroundColor: red[400] }}
            style={{ backgroundColor: red[600] }}
            title="This is a very cool feature"
            subtitle="Just using this will blow your mind."
          />
          <Slide
            media={
              <img src="/images/2.png" />
            }
            mediaBackgroundStyle={{ backgroundColor: blue[400] }}
            style={{ backgroundColor: blue[600] }}
            title="Ever wanted to be popular?"
            subtitle="Well just mix two colors and your are good to go!"
          />
          <Slide
            media={
              <img src="/images/2.png" />
            }
            mediaBackgroundStyle={{ backgroundColor: green[400] }}
            style={{ backgroundColor: green[600] }}
            title="May the force be with you"
            subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
          />
        </AutoRotatingCarousel>
      </div>
    );
  };

const Part1 = () => {

  const [handleOpen, setHandleOpen] = useState({ open: true });
  const matches = useMediaQuery("(max-width:400px)");
  return (
    <>
      <AutoRotatingCarouselModal
        isMobile={matches}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
      />
    </>
  );
};

export default Part1;