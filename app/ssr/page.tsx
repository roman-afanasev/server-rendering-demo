import {Post} from "@/app/Post";

export const dynamic = 'force-dynamic'; // Принудительный SSR

export default async function SSRPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });
  const posts = await res.json();

  return (
    <div>
      <h1>Server-Side Rendering (SSR)</h1>
      <p>Data fetch on each request</p>
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
