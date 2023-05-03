import React from "react";

// Revalidate the data after 300 seconds
export const revalidate = 300;

interface Post {
  title: string;
  content: string;
  slug: string;
}

// Access the dynamic route from params
interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
  // Call the API endpoint. Full absolute endpoint required
  const postsResponse: Response = await fetch(
    "http://localhost:3000/api/content",
    { cache: "default" } // Contorl caching at the fetch level here
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
