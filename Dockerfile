FROM --platform=linux/amd64 node:18-alpine as BUILD_IMAGE

WORKDIR /app/zis-erp

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM --platform=linux/amd64 node:18-alpine as PROD_IMAGEdocke

WORKDIR /app/zis-erp

COPY  --from=BUILD_IMAGE /app/zis-erp/dist /app/zis-erp/dist
EXPOSE 8088

COPY package.json .
COPY vite.config.js .
RUN npm install

EXPOSE 8088
CMD ["npm", "run", "preview"]