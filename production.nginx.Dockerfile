FROM nginx:1.15-alpine

RUN apk add shadow
RUN groupadd -g 5432 topos
RUN mkdir /staticfiles
RUN chown -R :topos /staticfiles
COPY ./staticfiles/production/ /staticfiles/production/
COPY ./staticfiles/img/ /staticfiles/img/
COPY ./nginx/conf.d/ /etc/nginx/conf.d/
