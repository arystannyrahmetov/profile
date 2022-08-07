FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

ENV NODE_ENV development

EXPOSE 3000

CMD ["npm", "start"]

