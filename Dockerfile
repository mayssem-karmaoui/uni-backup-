#Setting up a foundation for your container
#Tells Docker to start from an existing image of Nodejsv14
FROM node:14

#Creates and sets the working directory inside the container
#Any commands following this will be executed within this directory
WORKDIR /app

#copy package file from local to /app of container
COPY package.json .

#install dependencies
RUN npm install

#copy all app files from local to /app of container
COPY . .

#The container will listen on port 3000 for incoming connections
#my app will be accessible through port 3000 on the container
EXPOSE 3000

#Specifies the command that will run when the container starts
#Will keep my container running
CMD ["npm", "start"]