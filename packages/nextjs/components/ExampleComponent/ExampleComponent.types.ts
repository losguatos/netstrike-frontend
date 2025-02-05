// This file is used to define the types of the ExampleComponent component

// ExampleEnum is an enum that defines the possible values of the exampleEnum prop
// Please use PascalCase for the enum name
enum ExampleEnum {
  ExampleEnumOne = "example1",
  ExampleEnumTwo = "example2",
}

// ExampleComponetProps is an interface that defines the props of the ExampleComponent component
// Use PascalCase and the followin pattern: ComponentNameProps
export interface ExampleComponetProps {
  message: string;
  exampleEnum: ExampleEnum;
}
