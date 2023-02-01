import { atom } from "recoil";

export const userState = atom({
  // このstateを参照できる一意のkeyを記載必要
  key: "userState",
  // デフォルト値の設定
  default: { isAdmin: false }
});

// useStateRecoilStateとし更新関数のみ受け取っているコンポーネントは
// ステートの値が更新されても再レンダリングしないという便利さがある！！

// 仕様の仕方はuseStateとほぼ同じ
