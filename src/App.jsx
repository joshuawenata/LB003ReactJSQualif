import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Search from './pages/search/search';
import List from './pages/list/list'
import Favourite from './pages/favourite/favourite'
import Detail from './pages/detail/detail'
import Find from './pages/find/find'

export default function App(){
  const client = new ApolloClient({
    uri: 'https://api.disneyapi.dev/graphql',
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client} >

    <Router>
      <Routes>
        <Route path="/" element={<Search/>}></Route>
        <Route path="/list" element={<List/>}></Route>
        <Route path="/favourite" element={<Favourite/>}></Route>
        <Route path="/detail" element={<Detail/>}></Route>
        <Route path="/find" element={<Find/>}></Route>
      </Routes>
    </Router>
  </ApolloProvider>
}