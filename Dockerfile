FROM node:6

EXPOSE 3000

RUN mkdir -p /usr/src/app 

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build:dev

CMD [ "npm", "run" ]
