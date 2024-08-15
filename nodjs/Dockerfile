FROM node:16-alpine

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY src /app/src

ARG PORT

ENV PORT=${PORT}

EXPOSE 4000

CMD ["node", "/app/src/index.js"]
