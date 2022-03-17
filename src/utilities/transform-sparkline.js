export const transformSparkline = (asset) => {
  const newSparkline = [];
  let i = 0;
  asset.sparkline.forEach((price) => {
    i += 1;
    newSparkline.push({
      price: Number(price),
      time: String(i),
    });
  });
  return newSparkline;
};
