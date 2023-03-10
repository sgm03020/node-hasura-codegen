module.exports = {
  overwrite: true,
  schema: [
    {
      'http://164.70.103.113:8081/v1/graphql': {
        headers: {
          'x-hasura-role': 'admin',
          'x-hasura-admin-secret': 'mysecret'
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
