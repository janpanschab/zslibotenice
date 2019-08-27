FROM mhart/alpine-node:10 as base
WORKDIR /usr/src
COPY package.json yarn.lock /usr/src/
RUN yarn install
COPY . .
ARG RELAY_ENDPOINT
ARG GRAPHQL_TOKEN
ENV RELAY_ENDPOINT ${RELAY_ENDPOINT}
ENV GRAPHQL_TOKEN ${GRAPHQL_TOKEN}
RUN yarn build && yarn --production

FROM mhart/alpine-node:base-10
WORKDIR /usr/src
ENV NODE_ENV="production"
COPY --from=base /usr/src .
EXPOSE 3000
CMD ["node", "./server.js"]