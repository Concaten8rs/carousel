#  Dockerfile for Node Express Backend api (development)

FROM node:12.16-alpine

# ARG NODE_ENV=development

# Create App Directory
RUN mkdir -p /src/app
WORKDIR /src/app

# What source code do you want to copy, and where to put it?
COPY . /src/app

# Install Dependencies
RUN npm ci

# Copy app source code
COPY . .

# Exports
EXPOSE 3000

CMD ["npm","run","start"]