FROM python:3.5-alpine

WORKDIR /facelock

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apk update \
	&& apk add --virtual build-deps gcc python3-dev musl-dev \
	&& apk add shadow \
	&& apk add postgresql-dev && pip install psycopg2

RUN groupadd -g 4321 atoris
RUN chown -R root:atoris /facelock

COPY requirements_development.txt .
RUN pip install -r requirements_development.txt
RUN apk del build-deps
