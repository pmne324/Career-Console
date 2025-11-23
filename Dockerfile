FROM node:alpine3.21

WORKDIR /app

COPY ./career-console/package*.json ./
RUN npm install

#COPY ./career-console .



EXPOSE 3000


CMD [ "npm", "run", "dev" ]