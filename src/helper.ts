export const smallRandomDelay = () => {
  return new Promise((resolve) =>
    setTimeout(resolve, (Math.random() / 100) * 1000),
  );
};
