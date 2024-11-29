# Use the official Node.js image as the image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container ( meta data )
COPY package*.json ./

# get dependencies with npm install 
RUN npm install

COPY . /app


EXPOSE 3001




# Start the application 
CMD ["node", "todo.js"]
