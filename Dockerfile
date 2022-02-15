# build stage
FROM node:lts-alpine as build-stage

WORKDIR /usr/app

COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install
COPY . .
RUN yarn components:generate

ARG VUE_APP_API
ENV VUE_APP_API=$VUE_APP_API

ARG VUE_APP_I18N_LOCALE
ENV VUE_APP_I18N_LOCALE=$VUE_APP_I18N_LOCALE

ARG VUE_APP_I18N_FALLBACK_LOCALE
ENV VUE_APP_I18N_FALLBACK_LOCALE=$VUE_APP_I18N_FALLBACK_LOCALE

RUN yarn build

# production stage
FROM httpd:2.4 as production-stage

COPY ./docker/httpd.conf /usr/local/apache2/conf/httpd.conf

RUN echo "$AUTH" > /usr/local/apache2/.htpasswd

COPY --from=build-stage /usr/app/dist /usr/local/apache2/htdocs

EXPOSE 80
