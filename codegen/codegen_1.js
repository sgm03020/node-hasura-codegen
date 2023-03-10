module.exports = {
  overwrite: true,
  generates: {
    './src/admin/admin.ts': {
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
    }
  }
}
