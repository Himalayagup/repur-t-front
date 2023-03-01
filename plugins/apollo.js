// import { ApolloClient, InMemoryCache } from '@apollo/client/core';
// import { split, HttpLink, ApolloLink } from '@apollo/client/link/core';
// import { WebSocketLink } from '@apollo/client/link/ws';
// import { getMainDefinition } from '@apollo/client/utilities';
// import { setContext } from '@apollo/client/link/context';
// import { WebSocketLink } from '@apollo/client/link/ws';

// export default async function (context) {
//   const wsLink = new WebSocketLink({
//   uri: 'ws://localhost:3000/graphql',
//   options: {
//     reconnect: true,
//     lazy: true,
//   },
// });

//   const httpLink = new HttpLink({
//     uri: 'http://localhost:3000/graphql',
//     credentials: 'include',
//   });

//   const wsLink = new WebSocketLink(wsClient);

//   const authLink = setContext((_, { headers }) => {
//     // Optionally include any authentication token
//     return {
//       headers: {
//         ...headers,
//       },
//     };
//   });

//   const link = ApolloLink.from([
//     split(
//       ({ query }) => {
//         const { kind, operation } = getMainDefinition(query);
//         return kind === 'OperationDefinition' && operation === 'subscription';
//       },
//       wsLink,
//       authLink.concat(httpLink),
//     ),
//   ]);

//   const apolloClient = new ApolloClient({
//     link,
//     cache: new InMemoryCache(),
//   });

//   context.app.apolloProvider = apolloClient;
// }
