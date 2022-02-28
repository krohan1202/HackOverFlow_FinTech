import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0 4rem 0 4rem',
  },
  tab: {
    fontFamily: "Circular Std, sans-serif",
    textTransform: "none",
    fontStyle: "normal",
    fontWeight: 450,
    fontSize: "20px",
    lineHeight: "107%",
    textAlign: "center",
    color: "#000000"
  },
  details: {
    backgroundColor: '#141414',
    borderRadius: '0.4rem',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  greenText: {
    color: "#82ed68",
  },
  detailGroup: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: "1rem",
    '& > *': {
      margin: '10px',
    },
  },
  roleBackground: {
    display: 'flex',
    maxWidth: '170px',
    height: '49px',
    width: '170px',
    borderRadius: '54px',
    backgroundColor: 'rgba(211, 255, 208, 1)',
  },
  roleContent: {
    maxWidth: "101px",
    color: "rgba(0, 0, 0, 1)",
    fontSize: "22px",
    lineHeight: "107.00000524520874%",
    letterSpacing: "0%",
    textAlign: "center",
    fontFamily: "Euclid Circular A, sans-serif",
  },
  view: {
    fontFamily: "'Euclid Circular A', sans-serif",
    borderRadius: "100rem",
    fontSize: "1.16vw",
    padding: "0.50vw 2.1vw",
    margin: theme.spacing(3, 0, 2),
    color: '#fff',
  },
  yourLatestSection: {
    position: "relative",
    margin: "2rem 0 1rem",
  },
  yourLatestHeading: {
    position: "relative",
    fontSize: "1.8rem",
    fontWeight: "500",
  },
  viewAll: {
    fontFamily: "'Euclid Circular A', sans-serif",
    borderRadius: "100rem",
    fontSize: "1.16vw",
    padding: "2vh 5vw",
    margin: theme.spacing(3, 0, 4),
    float: 'right',
    color: '#fff',
  }
}))