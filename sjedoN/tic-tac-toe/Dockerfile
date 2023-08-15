FROM node:19-alpine as builder

WORKDIR /tt
COPY package.json .
RUN npm install

COPY . .
EXPOSE 4000
CMD ["npm","start"]