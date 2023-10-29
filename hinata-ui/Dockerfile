FROM node:20.9.0 as node
WORKDIR /app

FROM node as composer
COPY package*.json ./
RUN npm install
ADD . ./
RUN npm run build

FROM node as runner
ENV NODE_ENV production

COPY --from=composer /app/node_modules ./node_modules
COPY --from=composer /app/.next ./.next
COPY --from=composer /app/public ./public
COPY --from=composer /app/package.json ./package.json
COPY --from=composer /app/next.config.js ./

EXPOSE 3000
CMD ["npm", "start"]
