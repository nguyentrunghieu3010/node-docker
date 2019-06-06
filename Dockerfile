FROM node:10
WORKDIR /dist
COPY package.json .
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . ./
EXPOSE 8080
CMD [ "npm", "start" ]