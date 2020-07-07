FROM node:12.14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build:prod

ENV PORT="3012"

ENV DB="mongo"

EXPOSE 3012
CMD [ "npm", "run", "server:prod" ]