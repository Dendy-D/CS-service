FROM node:alpine

# Install bash
RUN apk update && apk add --no-cache bash postgresql-client

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN chmod +x entrypoint.sh

CMD ["bash", "/app/entrypoint.sh"]

EXPOSE 5000