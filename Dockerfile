FROM node:8.9.1-slim

ADD sources.list /etc/apt/sources.list

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY ./package.json /usr/src/app/
RUN npm i -s

# Bundle app source
COPY . /usr/src/app

ENV HOST_POINT=http://faucet.coinxp.io
ENV ETH_POINT=http://54.183.145.201:8545

# RUN npm run build

CMD [ "npm", "start" ]