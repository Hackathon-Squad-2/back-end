FROM node:16-alpine

WORKDIR /usr/app

COPY yarn.lock package.json ./

RUN yarn

COPY . ./

RUN npx prisma generate

EXPOSE 3000
