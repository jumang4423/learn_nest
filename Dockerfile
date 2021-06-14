FROM node:12.13.1-alpine 

WORKDIR /todo_nestjs

RUN apk update && \
    apk add git && \
    npm install -g npm && \
    npm install -g @nestjs/cli

ENV HOST 0.0.0.0
EXPOSE 3000