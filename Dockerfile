FROM node:18-alpine as builder

WORKDIR /usr/src/app/client

COPY ./client/package*.json ./

RUN npm install

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app/client

RUN npm run build

FROM nginx:alpine as prod

RUN rm -rf /etc/nginx/conf.d/default.conf

RUN rm -rf /var/www/html

COPY --from=builder /usr/src/app/client/build /var/www/html/

COPY --from=builder /usr/src/app/nginx/.env.nginx /var/www/html/

COPY --from=builder /usr/src/app/nginx/env-create.sh /var/www/html/

COPY --from=builder /usr/src/app/nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /usr/src/app/nginx/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /var/www/html/

RUN apk add --no-cache bash

RUN chmod +x env-create.sh

CMD ["/bin/bash", "-c", "/var/www/html/env-create.sh && nginx -g \"daemon off;\""]
