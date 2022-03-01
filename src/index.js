import { StrictMode } from "react/cjs/react.production.min";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import Test from "./Components/Test";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache()
});


const rootElement = document.getElementById("root");
ReactDOM.render(
    <ApolloProvider client={client} >
      <App client={client} />
    </ApolloProvider>,
  rootElement
);
