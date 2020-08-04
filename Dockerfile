FROM node:14.7.0

WORKDIR /app
COPY index.js /app/index.js

CMD ["node", "index.js"]
