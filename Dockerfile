# Set the base image to use for subsequent instructions
FROM node:alpine

# Add metadata to an image 
LABEL app="joe-demo-app-node"

# Directive to set environmental variables key to value pair
ENV PATH /app/node_modules/.bin:$PATH 

# Set the working directory for any subsequent ADD, COPY, CMD, ENTRYPOINT, 
# or RUN instructions that follow it in the Dockerfile
WORKDIR /usr/src/app

# Copy files or folders from source to the dest path in the image's filesystem.
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./

# Execute any commands on top of the current image as a new layer and commit the results.
# RUN npm install --production

# Define the network ports that this container will listen on at runtime.
EXPOSE 3000

# Configure the container to be run as an executable.
CMD ["npm", "start"]