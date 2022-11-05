type HttpPathBuilder<Type> = {
  [Property in keyof Type]: string;
};
