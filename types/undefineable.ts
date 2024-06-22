export type Undefinable<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K] | undefined
}
