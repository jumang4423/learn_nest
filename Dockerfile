FROM node:12.13.1-alpine 

WORKDIR /todo_nestjs

COPY . .
RUN apk update
RUN apk add git
RUN yarn global add @nestjs/cli

ENV HOST 0.0.0.0
EXPOSE 3000