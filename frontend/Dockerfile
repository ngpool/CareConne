# ベースイメージ
FROM node:13.10.1-alpine3.11

WORKDIR /app

# 依存関係のインストール
COPY ./app/package*.json ./
RUN npm install

# プロジェクトフォルダをカレントディレクトリ(appフォルダ)にコピー
COPY ./app .

EXPOSE 8080
CMD ["npm", "run", "serve"]