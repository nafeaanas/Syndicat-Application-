FROM node:16-slim

WORKDIR /frontend

COPY package.json /frontend

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]