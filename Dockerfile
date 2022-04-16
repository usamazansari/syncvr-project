FROM node:16.14.2-alpine as base

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build_ui
RUN npm run build_api

# FROM nginx:1.17.10-alpine as ui
# COPY configs/nginx.conf /etc/nginx/nginx.conf
# COPY --from=base /usr/syncvr/dist/apps/web-frontend /usr/share/nginx/html

FROM node:16.14.2-alpine as api
COPY --from=base /usr/src/app/dist/apps ./
CMD ["node", "api/main.js"]

# FROM node:16.9-alpine as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install --only=production

# COPY . .
# COPY --from=base /usr/src/app/dist/apps/api/ ./dist

# CMD ["node", "./main.js"]


# FROM base as ui
# WORKDIR /usr/syncvr

# FROM nginx:latest as ui
# COPY configs/nginx.conf /etc/nginx/nginx.conf
# COPY --from=base /usr/syncvr/dist/apps/web-frontend /usr/share/nginx/html

# FROM base as api
# WORKDIR /usr/syncvr
# COPY --from=base /usr/syncvr/dist/apps/api /usr/syncvr
# COPY --from=base /usr/syncvr/database.sqlite /usr/syncvr/
# RUN ["node", "main.js"]
