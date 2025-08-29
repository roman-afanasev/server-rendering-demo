import {Post} from "@/app/Post";

export default async function SSGPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'force-cache',
  });
  const posts = await res.json();

  return (
    <div>
      <h1>Static Site Generation (SSG)</h1>
      <p>Data fetch at build time</p>
      <ul>
        {posts.slice(0, 5).map((post: Post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
