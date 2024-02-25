# Use an official node runtime as the base image
FROM node:12

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
ADD package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
ADD . .

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run your app
CMD [ "npm", "start" ]

# Production environment
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]