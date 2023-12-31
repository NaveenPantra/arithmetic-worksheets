import classes from "./AppFooter.module.css";

const AppFooter = () => {
  return (
    <footer className={classes.footer}>
      <h6 className={classes.heading}>
        Update the config by clicking on top-right button
      </h6>
      <aside>
        By&nbsp;
        <a
          href="https://naveenpantra.com"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Naveen Pantra
        </a>
      </aside>
    </footer>
  );
};

export default AppFooter;
