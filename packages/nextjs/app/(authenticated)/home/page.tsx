import { classes } from "./page.styles";

const Home = () => {
  return (
    <div className={classes.container}>
      <div className="px-5">
        <h1 className="text-center">
          <span className={classes.title}>Netstrike Home</span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
