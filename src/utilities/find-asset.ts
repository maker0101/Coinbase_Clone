interface FindAsset {
  (id: string, assets: any): any;
}

interface Asset {
  id: string;
}

export const findAsset: FindAsset = (id, assets) =>
  assets.find((asset: Asset) => asset.id === id);
