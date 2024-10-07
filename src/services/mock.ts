function sleep(seconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}

const mockErr = false;
export const mock = {
  enable: true,
  fc: async (rt?: any, err = 'Network error mock') => {
    await sleep(1);
    if (mockErr) {
      throw new Error(err);
    }
    return rt;
  },
};
