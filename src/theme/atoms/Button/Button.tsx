import { classes } from "./button.st.css";

function Button({ className, ...props }: JSX.IntrinsicElements["button"]) {
  return <button {...props} className={classes.root} />;
}

export default Button;
