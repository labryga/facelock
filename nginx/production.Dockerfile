FROM nginx:1.15-alpine

RUN apk add shadow
RUN groupadd -g 4321 atoris
RUN mkdir /staticfiles
RUN chown -R :atoris /staticfiles
COPY ../staticfiles/staticfiles/
COPY ./conf.d/ /etc/nginx/conf.d/
