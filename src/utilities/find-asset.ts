interface IfindAsset {
  (id: string, assets: any): any;
}

interface IAsset {
  id: string;
}

export const findAsset: IfindAsset = (id, assets) =>
  assets.find((asset: IAsset) => asset.id === id);
