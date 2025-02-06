# Use official Node.js runtime as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching dependencies)
COPY package*.json ./

# Install dependencies (including @nestjs/swagger with compatibility fix)
RUN npm install --legacy-peer-deps

# Copy all project files into the container
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the port that the app runs on
EXPOSE 8080

# Start the application
CMD ["npm", "run", "start"]
