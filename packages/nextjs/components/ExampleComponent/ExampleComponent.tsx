import { classes } from "./ExampleComponent.styles";
import { ExampleComponetProps } from "./ExampleComponent.types";

export const ExampleComponent = ({
  exampleEnum,
  message,
}: ExampleComponetProps) => {
  return (
    <div className={classes.exampleContainer}>
      {message} {exampleEnum}
    </div>
  );
};
