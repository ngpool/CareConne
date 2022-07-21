# CareConne

仕様:  
チャット系アプリ  
カリキュラムの攻略方法が載っている  

目的:  
カリキュラム生の横の繋がりを作り、進捗率を上げる。

機能：  

前半戦:  
チャット機能  
CRUD  
部屋でマッチング（1-1部屋,4-2部屋のように今取り掛かっているカリキュラムの部屋）  
チャットに対して言い値ができる  
マイページ（自己紹介、アイコン画像、名前、入社び、年齢、ステータス（進捗））  
  
後半戦:  
レベル機能（投稿した記事に対して「いいね」がつき、その数でレベルが上がる仕組み。）  
→営業もカリキュラム生の出来高が見える化できる。　　
ランキング（月単位で「いいね」の獲得数ランキング。）　　

ルール：  
綺麗に作ろう。　　

言語：  
フロント:React＋Vue,Jquery  
バックエンド:Python(FLSK、django)  
DB:Postgres  
サーバ:ロリポップ!  
チケット:git Redmine  
設計ツール:画面繊維図→Figma,画面仕様図→ルシッドチャート,ER図→スプレットシート  
その他　:Docker,git  

### 前半戦スケジュール
```mermaid
gantt
  title 開発スケジュール
  excludes weekends 2022-08-08 2022-08-09 2022-08-10 2022-08-11 2022-08-12
  section 準備
    準備 :done, prepare, 2022-07-18 00:00:00, 3d
  section 環境開発
    側作成 :done, env, 2022-07-21 00:00:00, 10d
    改修 :env, after design_back2, 10d
  section フロントエンド
    設計1 :active, design_front1, 2022-07-21 00:00:00, 12d
    設計2 :design_front2, 2022-08-15 00:00:00, 3d
    製造 :coding_front, after design_front2, 10d
    単体テスト:ut_front, after coding_front, 10d
  section バックエンド
    設計1 :design_back1, 2022-07-21 00:00:00, 12d
    設計2 :design_back2, 2022-08-15 00:00:00, 3d
    製造 :coding_back, after design_back2, 10d
    単体テスト:ut_back, after coding_back, 10d
  section DB
    設計(DB) :design_db, 2022-07-21 00:00:00, 12d
    製造(DB) :coding_db, 2022-08-15 00:00:00, 5d
  section 結合試験
    結合テスト :it, after ut_back, 14d
    
```


