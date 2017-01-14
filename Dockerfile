# Builds a Docker to deliver dist/
FROM nginx:latest
RUN npm install -g node-sass
COPY dist/ /usr/share/nginx/html