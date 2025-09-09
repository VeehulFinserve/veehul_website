# Stage 1: Build React app
FROM node:18 as build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
COPY .env.production .env.production

RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf