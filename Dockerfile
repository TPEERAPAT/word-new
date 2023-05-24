# Dependency
FROM node:alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --ignore-scripts --prefer-offline

# Builder
FROM node:alpine AS builder

WORKDIR /app

COPY . .

# RUN echo "http://127.0.0.1:5201" > .env

COPY --from=deps /app/node_modules ./node_modules

RUN yarn build

# Runner
FROM node:alpine AS runner

WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/next.config.js ./

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]