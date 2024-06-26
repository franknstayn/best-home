FROM node:21-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN apk update
RUN apk add tzdata
RUN apk --no-cache add curl

ENV TZ=Asia/Singapore
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN date

RUN npm ci --only=production --no-optional

COPY . .

HEALTHCHECK CMD curl --fail http://localhost/api/healthcheck || exit 1

CMD [ "node","app.js" ]