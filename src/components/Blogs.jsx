import React from "react";
import MarketingImage from "../assets/Blog_Online-Presence.jpg";
import StrategyImage from "../assets/Blog_Marketing-Automation.avif";
import InsightsImage from "../assets/Blog_Cybersecurity.avif";

const Blogs = () => {
  const blogPosts = [
    {
      category: "Marketing",
      title: "Maximizing Your Online Presence",
      description: "Learn how to enhance your brand visibility effectively.",
      author: "John Doe",
      date: "11 Jan 2022",
      readTime: "5 min read",
      image: MarketingImage,
    },
    {
      category: "Strategy",
      title: "The Future of Marketing Automation",
      description: "Discover how automation can streamline your marketing efforts.",
      author: "Jane Smith",
      date: "15 Feb 2022",
      readTime: "7 min read",
      image: StrategyImage,
    },
    {
      category: "Insights",
      title: "Navigating Cybersecurity Challenges",
      description: "Understand the importance of cybersecurity in today's digital landscape.",
      author: "Alex Johnson",
      date: "20 Mar 2022",
      readTime: "6 min read",
      image: InsightsImage,
    },
  ];

  return (
    <section id="blog" className="py-12 bg-white text-center">
      <h2 className="text-lg font-semibold text-gray-500">Blog</h2>
      <h1 className="text-4xl font-bold mt-2">Insights and Innovations</h1>
      <p className="text-gray-600 mt-4 mb-8">Explore the latest trends in digital marketing.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="h-40 w-full flex items-center justify-center rounded-lg mb-4 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="object-cover w-full h-full" 
              />
            </div>
            <p className="text-sm text-gray-500">{post.category}</p>
            <h3 className="text-xl font-semibold mt-2">{post.title}</h3>
            <p className="text-gray-600 mt-2">{post.description}</p>
            <div className="mt-4 flex items-center space-x-2 text-gray-500 text-sm">
              <span className="font-semibold">{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 border border-black rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200">
          View all
        </button>
      </div>
    </section>
  );
};

export default Blogs;
