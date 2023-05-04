import { NextResponse } from "next/server";

const posts = [
  {
    title: "The Art of Minimalism",
    slug: "the-art-of-minimalism",
    content:
      "Minimalism is a lifestyle that promotes simplicity and intentionality. By removing excess, we make room for the things that truly matter in our lives.",
  },
  {
    title: "Exploring the World of Coffee",
    slug: "exploring-the-world-of-coffee",
    content:
      "From the lush mountains of Colombia to the bustling coffee shops in Seattle, we're diving into the rich history, culture, and flavors of coffee around the globe.",
  },
  {
    title: "The Marvels of Modern Architecture",
    slug: "the-marvels-of-modern-architecture",
    content:
      "The world is filled with architectural wonders that push the boundaries of design and engineering. Discover the stories behind these modern marvels and their creators.",
  },
  {
    title: "A Guide to Sustainable Living",
    slug: "a-guide-to-sustainable-living",
    content:
      "Learn practical steps to reduce your environmental impact, conserve resources, and live a more sustainable lifestyle.",
  },
  {
    title: "The Science of Happiness",
    slug: "the-science-of-happiness",
    content:
      "Explore the latest research in positive psychology, neuroscience, and behavioral economics to better understand what makes us happy and how to cultivate well-being in our daily lives.",
  },
  {
    title: "Mastering the Art of Cooking",
    slug: "mastering-the-art-of-cooking",
    content:
      "From basic techniques to advanced culinary skills, join us on a journey to become a confident, creative, and resourceful home chef.",
  },
  {
    title: "The Future of Space Exploration",
    slug: "the-future-of-space-exploration",
    content:
      "As humanity reaches for the stars, what new discoveries, technologies, and challenges await us in the final frontier?",
  },
  {
    title: "The Power of Meditation",
    slug: "the-power-of-meditation",
    content:
      "Meditation has been practiced for millennia to promote relaxation, focus, and self-awareness. Discover the benefits and techniques of this ancient practice.",
  },
  {
    title: "The Rise of Electric Vehicles",
    slug: "the-rise-of-electric-vehicles",
    content:
      "With advances in battery technology and a growing focus on sustainability, electric vehicles are revolutionizing the way we think about transportation.",
  },
  {
    title: "Discovering the World's Hidden Gems",
    slug: "discovering-the-worlds-hidden-gems",
    content:
      "From secluded beaches to charming villages, embark on a journey to explore the lesser-known destinations that are waiting to be discovered.",
  },
  {
    title: "The Art and Science of Photography",
    slug: "the-art-and-science-of-photography",
    content:
      "Capture the world through your lens with tips, techniques, and insights into the creative and technical aspects of photography.",
  },
  {
    title: "The Evolution of Artificial Intelligence",
    slug: "the-evolution-of-artificial-intelligence",
    content:
      "From Turing machines to advanced neural networks, explore the history and future of artificial intelligence as it shapes our world.",
  },
  {
    title: "The Power of Storytelling",
    slug: "the-power-of-storytelling",
    content:
      "Stories have the power to inspire, entertain, and educate. Delve into the art and craft of storytelling, and learn how to create compelling narratives that resonate with your audience.",
  },
  {
    title: "The Wonderful World of Plants",
    slug: "the-wonderful-world-of-plants",
    content:
      "From towering trees to delicate flowers, explore the diversity, beauty, and ecological importance of the plant kingdom.",
  },
  {
    title: "A Journey Through Film History",
    slug: "a-journey-through-film-history",
    content:
      "Discover the milestones, masterpieces, and innovators that have shaped the world of cinema from its earliest days to the present.",
  },
  {
    title: "The Secrets of Time Management",
    slug: "the-secrets-of-time-management",
    content:
      "Maximize your productivity and find balance in your life with proven strategies, tools, and techniques for effective time management.",
  },
  {
    title: "The Magic of Music",
    slug: "the-magic-of-music",
    content:
      "Explore the transformative power of music, from its role in human culture and history to the science behind how it affects our brains and emotions.",
  },
  {
    title: "The Art of Travel",
    slug: "the-art-of-travel",
    content:
      "Travel is more than just seeing new places. Learn how to immerse yourself in the culture, history, and beauty of the destinations you visit for a truly enriching experience.",
  },
  {
    title: "The World of Virtual Reality",
    slug: "the-world-of-virtual-reality",
    content:
      "Step into the immersive world of virtual reality, where cutting-edge technology is revolutionizing gaming, entertainment, and even the way we work and learn.",
  },
  {
    title: "The Ancient Wisdom of Yoga",
    slug: "the-ancient-wisdom-of-yoga",
    content:
      "Discover the origins, philosophy, and practices of yoga, a holistic discipline that unites the mind, body, and spirit for overall well-being.",
  },
  {
    title: "The Language of Color",
    slug: "the-language-of-color",
    content:
      "Delve into the fascinating world of color, from the science behind how we perceive it to the powerful ways it influences our emotions, decision-making, and daily lives.",
  },
  {
    title: "The Future of Work",
    slug: "the-future-of-work",
    content:
      "As technology and automation reshape the workforce, what skills and strategies will be essential for thriving in the rapidly evolving world of work?",
  },
  {
    title: "The Universe Within: The Human Body",
    slug: "the-universe-within-the-human-body",
    content:
      "Embark on a journey through the complex and fascinating world of the human body, as we explore the intricate systems and processes that keep us alive and thriving.",
  },
  {
    title: "The Legacy of Ancient Civilizations",
    slug: "the-legacy-of-ancient-civilizations",
    content:
      "Uncover the rich history, culture, and innovations of ancient civilizations, and learn how their contributions continue to shape our world today.",
  },
  {
    title: "The Beauty of Mathematics",
    slug: "the-beauty-of-mathematics",
    content:
      "Discover the elegance, patterns, and logic behind the world of mathematics, and explore its profound impact on science, art, and human understanding.",
  },
  {
    title: "The Enduring Appeal of Board Games",
    slug: "the-enduring-appeal-of-board-games",
    content:
      "From ancient strategy games to modern classics, board games have captivated players for centuries. Learn about their history, mechanics, and the reasons behind their enduring appeal.",
  },
  {
    title: "The Thrill of Adventure Sports",
    slug: "the-thrill-of-adventure-sports",
    content:
      "Push your limits and experience the adrenaline rush of adventure sports, from rock climbing and skydiving to extreme mountain biking and white-water rafting.",
  },
];

// This can now be accessed from /api/content
export async function GET() {
  return NextResponse.json(posts);
}
