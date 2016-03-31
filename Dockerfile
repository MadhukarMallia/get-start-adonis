from node

RUN npm install nodemon -g

# RUN nodemon --watch app --harmony_proxies server.js
CMD [ "nodemon", "--watch app", "--harmony_proxies", "server.js" ]
EXPOSE 3333
