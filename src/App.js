import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { AddPostForm } from './features/posts/AddPostForm'
import { EditPostForm } from './features/posts/EditPostForm'
import { PostList } from './features/posts/PostList'
import { SinglePostsPage } from './features/posts/SinglePostsPage'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <AddPostForm/>
                <PostList/>
              </>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostsPage}/>
          <Route exact path="/posts/:postId/edit" component={EditPostForm}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
