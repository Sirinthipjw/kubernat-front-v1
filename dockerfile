FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install --production
CMD npm run dev
EXPOSE 3000