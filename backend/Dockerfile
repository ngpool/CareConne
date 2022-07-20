FROM python:3.7

RUN mkdir /app
ADD requirements.txt /app

ENV PYTHONUNBUFFERED 1
EXPOSE 5000

WORKDIR /app
RUN pip3 install -r requirements.txt