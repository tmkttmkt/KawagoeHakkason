<script lang="js">
  import { Route, Router } from "svelte-routing";
  import Post from "./post.svelte";
  import ViewPosts from "./view_posts.svelte";
</script>

<Router>
    <Route path="/post">
      <Post />
    </Route>
    <Route path="/view_posts">
      <ViewPosts />
    </Route>
</Router>