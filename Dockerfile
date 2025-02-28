FROM node:14

WORKDIR "/app"

COPY package*.json ./

RUN npm install

COPY . .

RUN npx tsc

EXPOSE ${PORT}

CMD ["node", "dist/index.js"]