FROM node:lts-alpine

COPY package*.json ./

COPY tsconfig.json ./

WORKDIR '/app'

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm","run","dev"]