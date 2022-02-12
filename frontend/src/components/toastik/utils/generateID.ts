export const uniqueId = (string: string) =>
  `${string}_${String(Math.random()).slice(3)}`;
