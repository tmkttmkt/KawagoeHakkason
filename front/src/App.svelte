<script lang="ts">
  import { Route, Router } from "svelte-routing";

  import Post from "./post.svelte";
  import ViewPosts from "./view_posts.svelte";
</script>

<Router>
    <Route path="./post.svelte">
      <Post/>
    </Route>
    <Route path="./view_posts.svelte">
      <ViewPosts/>
    </Route>
</Router>