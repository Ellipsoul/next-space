import React from "react";

// Revalidate the data after 300 seconds
export const revalidate = 300;

export interface Post {
  title: string;
  content: string;
  slug: string;
}

// Special function to pre-fetch data that does not change often
export async function generateStaticParams() {
  const postsResponse: Response = await fetch(
    "http://127.0.0.1:3000/api/content",
    { cache: "default" } // Contorl caching at the fetch level here
  );
  const posts: Post[] = await postsResponse.json();
  return posts.map((post) => ({ slug: post.slug }));
}

// Access the dynamic route from params
interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
  // Call the API endpoint. Full absolute endpoint required
  // This request is automatically de-duped because of the above identical request
  const postsResponse: Response = await fetch(
    "http://127.0.0.1:3000/api/content",
    { cache: "default" }
  );
  const posts: Post[] = await postsResponse.json();

  // Search for a post by its slug and then display the relevant post
  const post = posts.find((post) => post.slug === params.slug);

  return post ? (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  ) : (
    <h1>Post Not Found</h1>
  );
}
