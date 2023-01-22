#here we're specifying the version of node
#we can use the :latest tag as well.
FROM node:16-slim

#here we're defining the working directory
WORKDIR /server

#copying our dependencies to the container
COPY package.json /server

#installing all the dependencies that we copied 
RUN npm install

ENV NODE_ENV develepment
ENV PORT 8000
ENV DB_HOST localhost
ENV DB_NAME Syndicat-Application-db
ENV DB_USER root
ENV DB_PASS =
ENV MONGO_URI mongodb+srv://Anas:chemaia1@cluster0.2sonzsu.mongodb.net/Syndicat-Application-db?retryWrites=true&w=majority
ENV JWT_SECRET 123456789
ENV # 15 minutes
ENV JWT_EXPIRE 15m
ENV # BASE_URL http://localhost:8000/
ENV EMAIL_HOST smtp.gmail.com
ENV EMAIL_PORT 587
ENV EMAIL_USER nafeaanass15@gmail.com
ENV EMAIL_PASS ljzlylgearbzvrhp
ENV EMAIL_SECURE true
#copying all the files inside the container
COPY . .

#exposing the port so we can access it further
EXPOSE 8000

#starting the server
CMD ["node", "server.js"]