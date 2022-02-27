import { makeStyles } from "@mui/styles";
import HeroBg from "../public/assets/desktop/HeroBlackBg.png";
import InvestBgImg from "../public/assets/desktop/InvestBgImg.png";

export const useStyles = makeStyles((theme) => ({
  fullHero: {
    position: "relative",
    top: "-0.2vw",
  },
  heroBg: {
    position: "relative",
    zIndex: "-1",
    width: "100%",
    left: "0",
    [theme.breakpoints.down("sm")]: {
      top: "-20vw",
    },
  },
  heroHeading: {
    position: "absolute",
    width: "70.5vw",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#fff",
    top: "8.89vw",
    textAlign: "center",
    fontWeight: "700",
    // fontSize: "5.75rem",
    fontSize: "5.75vw",
    lineHeight: "107.5%",
    [theme.breakpoints.down("sm")]: {
      top: "38.89vw",
      fontSize: "2.5rem",
      width: "90.5vw",
    },
  },
  heroDescription: {
    position: "absolute",
    width: "47vw",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#fff",
    top: "23.89vw",
    textAlign: "center",
    // fontSize: "1.45rem",
    fontSize: "1.48vw",
    lineHeight: "125%",
    [theme.breakpoints.down("sm")]: {
      top: "79.5vw",
      fontSize: "1.05rem",
      width: "75vw",
    },
  },
  heroButtons: {
    position: "absolute",
    left: "49%",
    transform: "translateX(-50%)",
    top: "32.5vw",
    display: "flex",
    justifyContent: "space-around",
    width: "39%",
    [theme.breakpoints.down("sm")]: {
      top: "112.5vw",
    },
  },
  heroBtn: {
    color: "#fff",
    textTransform: "none",
    fontWeight: "400",
    // fontSize: "1.57rem",
    fontSize: "1.57vw",
    fontFamily: "'Euclid Circular A', sans-serif",
    margin: "0 0.6rem 0 1.5rem",
    borderRadius: "100rem",
    padding: "0.56vw 2.1vw",
    border: "2px solid" + theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "transparent",
      border: "2px solid" + theme.palette.primary.main,
    },
    [theme.breakpoints.down("sm")]: {
      padding: "2.3vw 0",
      fontSize: "1.24rem",
      width: "75vw",
      marginBottom: "1.6rem",
    },
  },
  heroBtn_getStarted: {
    fontWeight: "500",
    color: "#000",
    border: "2px solid" + theme.palette.alternate.main,
    backgroundColor: theme.palette.alternate.main,
    "&:hover": {
      color: theme.palette.alternate.main,
      backgroundColor: "transparent",
      border: "2px solid" + theme.palette.alternate.main,
    },
  },

  //   Section 01
  section01Img: {
    position: "relative",
    width: "57%",
    marginLeft: "2vw",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  },
  section01ContentGrid: {
    order: 2,
    [theme.breakpoints.down("md")]: {
      order: 1,
    },
  },
  section01ImgGrid: {
    marginTop: "-3vw",
    paddingBottom: "2vw",
    order: 1,
    [theme.breakpoints.down("md")]: {
      order: 2,
      marginTop: "10vw",
    },
    [theme.breakpoints.down("sm")]: {
      order: 2,
      marginTop: "-10vw",
    },
  },
  sectionContentDiv: {
    position: "relative",
    left: "3.5vw",
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      top: "-30vw",
      width: "84%",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  sectionNumber: {
    marginBottom: "1.65vw",
    fontSize: "1.4rem",
    fontWeight: "700",
    fontFamily: "'Helvetica', sans-serif",
  },
  sectionHeading: {
    position: "relative",
    display: "block",
    fontSize: "3.6vw",
    fontWeight: "500",
    lineHeight: "104%",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.1rem",
    },
  },
  sectionDescription: {
    position: "relative",
    top: "1.8rem",
    display: "block",
    fontSize: "1.325vw",
    fontWeight: "500",
    width: "81%",
    lineHeight: "122.5%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      fontSize: "1.08rem",
    },
  },
  sectionHorizontalLine: {
    position: "relative",
    width: "35%",
    left: "-6.5vw",
    top: "4.5rem",
    border: "none",
    borderBottom: "2px solid #000",
    [theme.breakpoints.down("md")]: {
      top: "3.5rem",
    },
  },
  // Section  02
  section02Img: {
    position: "relative",
    width: "64%",
    marginRight: "2vw",
    [theme.breakpoints.down("md")]: {
      width: "78%",
      marginRight: "0",
      marginBottom: "1rem",
    },
  },
  section02ContentDiv: {
    position: "relative",
    left: "11vw",
    top: "3.5vw",
    width: "80%",
  },
  section02Description: {
    position: "relative",
    top: "1.8rem",
    display: "block",
    fontSize: "1.325vw",
    fontWeight: "500",
    width: "84%",
    lineHeight: "122.5%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      fontSize: "1.08rem",
    },
  },
  section02HorizontalLine: {
    position: "relative",
    width: "35%",
    left: "-10vw",
    top: "4.5rem",
    border: "none",
    borderBottom: "2px solid #000",
    [theme.breakpoints.down("md")]: {
      top: "2.9rem",
      left: "-15vw",
    },
  },
  sectionContributorBtn: {
    position: "relative",
    marginTop: "6.7rem",
    marginLeft: "2.5rem",
    color: "#fff",
    textTransform: "none",
    fontWeight: "400",
    // fontSize: "1.57rem",
    fontSize: "1.57vw",
    fontFamily: "'Euclid Circular A', sans-serif",
    margin: "0 0.6rem 0 1.5rem",
    borderRadius: "100rem",
    padding: "0.5vw 2.1vw",
    border: "2px solid" + theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "#121ac9",
      border: "2px solid #121ac9",
    },
    [theme.breakpoints.down("md")]: {
      top: "-2.5rem",
      padding: "2.3vw 0",
      fontSize: "1.24rem",
      width: "78vw",
      marginBottom: "1.6rem",
      marginLeft: "0",
    },
  },

  // Invest Section
  investSection: {
    position: "relative",
    marginTop: "2.5vw",
    paddingBottom: "0",
    height: "120vh",
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
    },
    [theme.breakpoints.down("xs")]: {
      height: "130vh",
    },
  },
  investSectionHeading: {
    position: "relative",
    top: "5.4vw",
    color: "#fff",
    fontSize: "3.72vw",
    [theme.breakpoints.down("md")]: {
      display: "block",
      width: "95%",
      fontSize: "2.2rem",
      top: "9.4vw",
      lineHeight: "123%",
      marginBottom: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: "2rem",
      width: "90%",
      marginBottom: "0",
    },
  },
  investCards: {
    position: "relative",
    top: "8.3vw",
    marginBottom: "3rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "8.3vw",
      top: "12vw",
    },
  },
  investViewBtn: {
    position: "absolute",
    marginTop: "2rem",
    left: "80%",
    color: "#fff",
    textTransform: "none",
    fontWeight: "400",
    // fontSize: "1.57rem",
    fontSize: "1.57vw",
    fontFamily: "'Euclid Circular A', sans-serif",
    margin: "0 0.6rem 0 1.5rem",
    borderRadius: "100rem",
    padding: "0.5vw 2.1vw",
    border: "2px solid" + theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "#121ac9",
      border: "2px solid #121ac9",
    },
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      left: "50%",
      transform: "translateX(-50%)",
      display: "block",
      marginTop: "0",
      marginLeft: "0",
      marginBottom: "7rem",
      padding: "2.3vw 0",
      fontSize: "1.24rem",
      width: "58vw",
    },
  },

  //Our Vision
  ourVisionImgGrid: {
    order: 1,
    [theme.breakpoints.down("md")]: {
      order: 2,
    },
  },
  ourVisionContentGrid: {
    // marginTop: "-3vw",
    // paddingBottom: "2vw",
    order: 2,
    [theme.breakpoints.down("md")]: {
      order: 1,
      // marginTop: "-10vw",
    },
  },
  ourVisionImg: {
    width: "90%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  ourVisionContentDiv: {
    position: "relative",
    left: "-12.5rem",
    top: "7vw",
    width: "40vw",
    [theme.breakpoints.down("md")]: {
      marginTop: "1.5rem",
      left: "2rem",
      width: "88vw",
      marginBottom: "6rem",
    },
  },

  // Newsletter
  newsletterContentDiv: {
    position: "relative",
    left: "11.6vw",
    width: "72%",
    [theme.breakpoints.down("md")]: {
      marginTop: "1.5rem",
      left: "2rem",
      width: "88vw",
      marginBottom: "2.3rem",
    },
  },
  newsletterHeading: {
    position: "relative",
    display: "block",
    fontSize: "3.35vw",
    fontWeight: "500",
    lineHeight: "107.5%",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.8rem",
    },
  },
  newsletterDescription: {
    position: "relative",
    top: "1.8vw",
    display: "block",
    fontSize: "1.325vw",
    fontWeight: "500",
    width: "78%",
    lineHeight: "122.5%",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      width: "90%",
      marginTop: "0.5rem",
    },
  },
  newsletterTextField: {
    position: "relative",
    top: "2vw",
    width: "20vw",
    [theme.breakpoints.down("md")]: {
      width: "85vw",
      left: "2rem",
      top: "0",
    },
  },
  subscribeBtn: {
    position: "relative",
    display: "block",
    marginTop: "4vw",
    color: "#fff",
    textTransform: "none",
    fontWeight: "400",
    // fontSize: "1.57rem",
    fontSize: "1.15vw",
    fontFamily: "'Euclid Circular A', sans-serif",
    borderRadius: "0.5rem",
    padding: "0.5vw 4.3vw",
    border: "2px solid" + theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "#121ac9",
      border: "2px solid #121ac9",
    },
    [theme.breakpoints.down("md")]: {
      width: "85vw",
      fontSize: "1.24rem",
      padding: "2vw 4.3vw",
      marginTop: "1.7rem",
      left: "50%",
      transform: "translateX(-25%)",
    },
  },
}));
