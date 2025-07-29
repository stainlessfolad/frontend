FROM node:alpine AS react
WORKDIR /app
# Get required packages
COPY package*.json ./
# Install dependencies
RUN npm install
# Building the app
COPY . .
CMD [ "npm", "run", "build" ]
