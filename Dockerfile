FROM node:11

RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin$PATH

ADD package.json yarn.lock /app/
RUN yarn --pure-lockfile

COPY . /app/

CMD ["./run.sh"]

EXPOSE 9000
