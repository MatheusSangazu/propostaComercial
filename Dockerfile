FROM node:20-alpine

WORKDIR /app

COPY package.json ./
COPY server.js ./
COPY proposta.html ./

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

EXPOSE 3000

CMD ["node", "server.js"]
