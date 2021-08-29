import React from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {Tags} from 'views/Tags';
import {Tag} from 'views/Tag';
import {Statistics} from 'views/Statistics';
import {Record} from 'views/Record';
import {NoMatch} from 'views/NoMatch';
import {Money} from 'views/Money';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/tags" component={Tags}>
        </Route>
        <Route exact path="/tags/:id" component={Tag}>
        </Route>
        <Route exact path="/money" component={Money}>
        </Route>
        <Route exact path="/statistics" component={Statistics}>
        </Route>
        <Route exact path="/statistics/:recordId" component={Record}>
        </Route>
        <Route exact path="/money/:recordId/edit" component={Money}>
        </Route>
        <Redirect exact from="/" to="/money"/>
        <Route path="*" component={NoMatch}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
