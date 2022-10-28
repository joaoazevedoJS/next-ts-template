type ReactDotNotation<ComponentType, SubComponentTypes> = ComponentType & {
  [Property in keyof SubComponentTypes]: SubComponentTypes[Property];
};
