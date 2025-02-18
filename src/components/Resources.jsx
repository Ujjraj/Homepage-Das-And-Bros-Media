import React from "react";

const Resources = () => {
    const blogPosts = [
        {
          category: "Marketing",
          title: "Maximizing Your Marketing ROI",
          description: "Learn strategies to improve your marketing return on investment effectively.",
          author: "John Doe",
          date: "11 Jan 2022",
          readTime: "5 min read",
        },
        {
          category: "Cybersecurity",
          title: "Protecting Your Digital Assets",
          description: "Essential tips for safeguarding your online presence and data.",
          author: "Jane Smith",
          date: "12 Feb 2022",
          readTime: "6 min read",
        },
        {
          category: "AI",
          title: "Harnessing AI for Marketing",
          description: "Discover how AI can transform your marketing strategies and execution.",
          author: "Alex Brown",
          date: "15 Mar 2022",
          readTime: "4 min read",
        },
      ];
    
      return (
        <section className="py-12 bg-white text-center">
          <h2 className="text-lg font-semibold text-gray-500">Blog</h2>
          <h1 className="text-4xl font-bold mt-2">Insights and Resources</h1>
          <p className="text-gray-600 mt-4 mb-8">Explore our latest articles and insights on marketing.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="h-40 bg-gray-300 flex items-center justify-center rounded-lg mb-4">
                  <span className="text-gray-500">Image Placeholder</span>
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
          <button className="mt-8 px-6 py-2 border border-black rounded-lg hover:bg-gray-100">
            View all
          </button>
        </section>
      );
};

export default Resources;
