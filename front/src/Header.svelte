<script lang="js">
  import { Route, Router } from "svelte-routing";
  import Post from "./posts.svelte";
  import ViewPosts from "./view_posts.svelte";
  import Home from "./Home.svelte";
</script>

<Router>
  <Route path="/post">
    <Post />
  </Route>
  <Route path="/">
    <Home />
  </Route>
    <Route path="/view_posts">
      <ViewPosts />
    </Route>
</Router>