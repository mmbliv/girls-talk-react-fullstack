import React, { useEffect, useState } from "react";
import { Form } from "./component/form/Form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Posts } from "./component/post/Posts";
import { Nav } from "./component/nav/Nav";
import { useDispatch } from "react-redux";
import { getPosts } from "./action/post";

import { useSelector } from "react-redux";
export const App = () => {
  const [currentID, setCurrentID] = useState();
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Posts
            setCurrentID={setCurrentID}
            currentID={currentID}
            posts={posts}
          />
        </Route>
        <Route exact path="/creat">
          <Form
            setCurrentID={setCurrentID}
            currentID={currentID}
            posts={posts}
          />
        </Route>
      </Switch>
    </Router>
  );
};
