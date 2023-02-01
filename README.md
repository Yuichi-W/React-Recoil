# React-Recoil
# メモ
## 「recoil」インポートする  
 
## インポート記述
```
import { atom } from "recoil";
``` 

## グローバルstateの定義
```
export const userState = atom({
  // このstateを参照できる一意のkeyを記載必要
  key: "userState",
  // デフォルト値の設定
  default: { isAdmin: false }
});
```

## 使用する範囲を<RecoilRootで囲う
```
<RecoilRoot>
  <UserProvider>
    <Router />;
  </UserProvider>
</RecoilRoot>
```
 
## 使い方
①セット関数のみ使用の場合
```
import { useSetRecoilState } from "recoil";
```
②値のみ使用する場合
```
import { useRecoilValue } from "recoil";
```
③値と更新関数共に使用する場合
```
import { useRecoilState } from "recoil";
```

