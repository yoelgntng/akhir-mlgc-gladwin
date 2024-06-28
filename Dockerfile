FROM node:20.11.1-bullseye
WORKDIR /app
COPY . .
ENV PORT=3000
ENV MODEL_URL=https://storage.googleapis.com/kankerapp/model.json
RUN npm install
CMD ["npm", "start"]