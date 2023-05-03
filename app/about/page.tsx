import { Metadata } from "next";

// Forces next.js to use static site generation for this static page
// This should already happen automatically
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "NextSpace - About",
  description: "About NextSpace",
};

export default function AboutPage() {
  return (
    <div>
      <h1>About us</h1>
      <p>We are a social media company that wants to bring people together!</p>
    </div>
  );
}
