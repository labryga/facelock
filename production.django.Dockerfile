FROM python:3.5-alpine

WORKDIR /facelock

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apk update \
	&& apk add --virtual build-deps gcc python3-dev musl-dev \
	&& apk add shadow \
	&& apk add postgresql-dev && pip install psycopg2

RUN groupadd -g 5432 topos
RUN chown -R root:topos /facelock

COPY /facelock/ /facelock/
RUN ls -la /facelock
RUN pip install -r requirements_development.txt
RUN apk del build-deps
