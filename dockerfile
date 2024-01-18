# Use the official lightweight Node image
FROM node:14-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application files
COPY . .

# Expose the port on which the app will run
EXPOSE 3000

# Start the application
CMD ["npm", "start"]