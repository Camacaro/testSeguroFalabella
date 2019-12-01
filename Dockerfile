FROM node:10

# Create app directory
WORKDIR /usr/src/testentrevista

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "node", "dist/index.js" ]