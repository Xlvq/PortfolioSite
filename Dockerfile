
FROM node:20 AS build
WORKDIR /app
COPY server ./server
COPY client ./client
RUN npm --prefix server ci \
 && npm --prefix client ci \
 && npm --prefix client run build \
 && cp -r client/dist server/public


FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/server .
RUN npm ci --omit=dev
EXPOSE 4000
CMD ["node","index.js"]
