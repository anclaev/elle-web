ARG node_version=18.16.0

# Stage 1: Установка зависимостей
FROM node:${node_version} AS deps

LABEL maintainer="anclaev<iahugo@yandex.ru>"
LABEL description="Elle Web"

WORKDIR /web-client

COPY package.json ./

RUN yarn install --silent

# Stage 2: Сборка проекта
FROM node:${node_version} AS builder

WORKDIR /web-client

COPY . .
COPY --from=deps /web-client/node_modules ./node_modules

RUN yarn build

#Stage 3: Публикация проекта
FROM nginx:1.23.1-alpine

EXPOSE 80

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /web-client/build /usr/share/nginx/html