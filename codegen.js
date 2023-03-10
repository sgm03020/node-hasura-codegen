// https://the-guild.dev/graphql/codegen/docs/config-reference/require-field
module.exports = {
  overwrite: true,
  schema: [
    {
      [process.env.HASURA_GRAPHQL_ENDPOINT]: {
        headers: {
          'x-hasura-role': 'admin',
          'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET
        }
      }
    }
  ],
  documents: ['./src/admin/**/*.graphql'],
  generates: {
    './src/admin/admin.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request'
      ],
      config: {
        preResolveTypes: true,
        skipTypename: false,
        enumsAsTypes: true,
        constEnums: true
      }
    },
    'introspection.json': {
      plugins: ['introspection'],
      config: {
        minify: true
      }
    }
  }
}
