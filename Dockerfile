FROM node:20.12.2-buster

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

EXPOSE ${APP_PORT}

CMD ["npm", "start"]