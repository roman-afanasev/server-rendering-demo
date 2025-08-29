import {Post} from "@/app/Post";

const revalidate = 5;

export default async function ISRPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate },
  });
  const posts = await res.json();

  const timestamp = new Date().toISOString();

  return (
    <div>
      <h1>Incremental Static Regeneration (ISR)</h1>
      <p>Data fetch at build time and revalidation every 5 seconds (visible only with "npm run build"). Last updated: {timestamp}</p>
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
