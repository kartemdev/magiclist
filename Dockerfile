FROM node:18-alpine as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine as prod

RUN rm -rf /etc/nginx/conf.d/default.conf

RUN rm -rf /var/www/html

COPY --from=builder /usr/src/app/nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /usr/src/app/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app/build /var/www/html/

ENTRYPOINT ["nginx", "-g", "daemon off;"]
