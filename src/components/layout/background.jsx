import { makeStyles } from "@mui/styles";
import styles from "assets/jss/layoutStyles";
const useStyles = makeStyles(styles);

function Background({ children }) {
  const classes = useStyles();
  return (
    <div
      className={classes.background}
      style={{
        backgroundImage: `url(/background.jpg)`,
      }}
    >
      {children}
    </div>
  );
}

export default Background;
