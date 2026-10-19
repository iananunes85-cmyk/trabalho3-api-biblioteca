
FROM node:22-bookworm-slim

WORKDIR /app

RUN apt-get update \
    && apt-get install -y --no-install-recommends python3 make g++ \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
COPY prisma ./prisma
COPY prisma.config.ts ./

RUN npm ci
RUN npx prisma generate

COPY . .

RUN mkdir -p /app/data \
    && chmod +x /app/scripts/iniciar.sh \
    && chown -R node:node /app

ENV NODE_ENV=production
ENV PORT=3000
ENV DATABASE_URL="file:/app/data/biblioteca.db"

EXPOSE 3000

USER node

CMD ["sh", "/app/scripts/iniciar.sh"]
