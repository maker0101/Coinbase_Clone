export const transformSparkline = (asset) =>
  asset.sparkline.map((price, i) => ({
    price: Number(price),
    time: String(i),
  }));
