FROM node:alpine

COPY package*.json app.js ./app/

WORKDIR /app

RUN npm install
EXPOSE 3000
CMD ["node","app.js"]
