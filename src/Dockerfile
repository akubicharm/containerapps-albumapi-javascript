FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
#COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY ["package.json", "npm-shrinkwrap.json*", "./"]
# force use npm new version
RUN npm install --location=global npm@latest
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 8080
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
