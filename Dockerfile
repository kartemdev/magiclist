FROM node:18-alpine as builder

ARG API_HOST

WORKDIR /app/client

COPY ./client/package*.json ./

RUN npm install

WORKDIR /app

COPY . .

WORKDIR /app/client

RUN npm run build -- --env API_HOST=${API_HOST}

FROM nginx:alpine as prod

ARG API_HOST

RUN rm -rf /etc/nginx/conf.d/default.conf

RUN rm -rf /var/www/html

COPY --from=builder /app/client/build /var/www/html/

COPY --from=builder /app/nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/nginx/default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
