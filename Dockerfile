## First compile the project

FROM nginx:1.13.3-alpine

## Remove default nginx website
COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY /dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

