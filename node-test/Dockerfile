FROM daocloud.io/library/node:11.6.0-alpine

RUN npm install yarn

RUN mkdir -p /src/app

WORKDIR /app

COPY node-test/package.json /app

RUN yarn

COPY node-test/src /app/src

EXPOSE 3307

CMD ["node","src/app.js"]
