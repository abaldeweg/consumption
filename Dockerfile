ARG VUE_APP_BASE_URL

# build stage
FROM node:lts-alpine as build-stage

WORKDIR /usr/app

COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install
COPY . .

ARG VUE_APP_BASE_URL
ENV VUE_APP_BASE_URL=$VUE_APP_BASE_URL

ARG VUE_APP_INVENTORY
ENV VUE_APP_INVENTORY=$VUE_APP_INVENTORY

ARG VUE_APP_SHARE_MAIL
ENV VUE_APP_SHARE_MAIL=$VUE_APP_SHARE_MAIL

RUN yarn build

# production stage
FROM httpd:2.4 as production-stage

ARG VUE_APP_BASE_URL
ENV VUE_APP_BASE_URL=$VUE_APP_BASE_URL

COPY ./docker/httpd.conf /usr/local/apache2/conf/httpd.conf

ARG AUTH
ENV AUTH=$AUTH

RUN echo $AUTH > /usr/local/apache2/.htpasswd

COPY --from=build-stage /usr/app/dist /usr/local/apache2/htdocs${VUE_APP_BASE_URL}

EXPOSE 80
