# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:latest as build-stage
WORKDIR /app

COPY . .

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build

# Out dist should be at /app/dist

# NGINX
FROM nginx:latest

COPY --from=build-stage /app/dist /usr/share/nginx/html