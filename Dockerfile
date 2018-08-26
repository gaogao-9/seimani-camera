# alpineはいいぞ
FROM node:10-alpine

# 依存のコピー
COPY package.json .
COPY src/ src/

# ビルドした後devDependenciesを抹殺
RUN npm install && npm run build && npm run migrate && npm prune --production
CMD npm start
