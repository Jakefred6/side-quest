import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { Outlet } from "react-router-dom";
import Nav from "./layouts/Nav";
import Sidebar from "./layouts/Sidebar";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: '/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    // localStorage.setItem('token', 'test_token');
    // const token = localStorage.getItem('token');
    return (
        <ApolloProvider client={client}>
            {/* <Sidebar /> */}
            <Nav />
            <Outlet />
        </ApolloProvider>
    );
}
export default App;