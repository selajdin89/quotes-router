import { Redirect, Route, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import Layout from "./components/layout/Layout";
import React, { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetails = React.lazy(() => import("./pages/QuoteDetails"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetails />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
