FROM node:17-alpine3.12

RUN addgroup -g 499 -S app \
    && adduser -u 499 -S app -G app -h /opt/app -D

WORKDIR /opt/app

COPY package*.json /opt/app/

RUN npm ci --only=production

COPY *.js /opt/app/

USER app
ENV CONFIG_PATH="/opt/app/config.yaml"
EXPOSE 8000

CMD [ "node", "app.js" ]
