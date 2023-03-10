https://www.codedaily.io/tutorials/Setup-Hasura-with-GraphQL-Code-Generator

<pickup>
https://www.gaji.jp/blog/2021/11/15/8532/


<node>
yarn add express dotenv


<grahph-codegen>
yarn add @types/js-yaml --dev

<graphql>
yarn add graphql @graphql-codegen/cli --dev
# エラーのためgraphql-request@5.1.0に固定
yarn add graphql-request@5.1.0 --dev
yarn add @graphql-codegen/typescript @graphql-codegen/typescript-graphql-request --dev
# 要るか不明
yarn add @graphql-codegen/introspection --dev
yarn add @graphql-codegen/typescript-operations --dev

yarn add typescript ts-node --dev

./node_modules/.bin/tsc --init
./node_modules/.bin/ts-node app.ts

yarn add @types/express @types/node --dev