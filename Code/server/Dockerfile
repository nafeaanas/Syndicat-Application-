#here we're specifying the version of node
#we can use the :latest tag as well.
FROM node:16-slim

#here we're defining the working directory
WORKDIR /backend

#copying our dependencies to the container
COPY package.json /backend

#installing all the dependencies that we copied 
RUN npm install


#copying all the files inside the container
COPY . .

#exposing the port so we can access it further
EXPOSE 8000

#starting the server
CMD ["node", "server.js"]