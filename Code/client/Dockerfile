FROM node:16-slim

WORKDIR /client

COPY package.json /client

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]