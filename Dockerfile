FROM node:10

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY ./package.json /usr/src/app/
RUN ["npm", "install"]

# Bundle app source
COPY . /usr/src/app