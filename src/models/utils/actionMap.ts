export type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
      ? {
          url: Key;
        }
      : {
          url: Key;
          args: M[Key];
        };
  };