import Button from "@theme/atoms/Button/Button";
import { classes } from "./header.st.css";

function Header() {
  return (
    <div className={classes.root}>
      <Button>Header button modified</Button>
    </div>
  );
}

export default Header;
