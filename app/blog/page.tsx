import Link from "next/link";
import { Post } from "./[slug]/page";

export default async function Blog() {
  const postsResponse = await fetch("http://127.0.0.1:3000/api/content");
  const posts: Post[] = await postsResponse.json();

  return (
    <div>
      <h1>Welcome to our Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
