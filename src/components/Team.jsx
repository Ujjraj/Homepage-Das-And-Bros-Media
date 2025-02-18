import React from "react";

const Team = () => {
    const teamMembers = [
        { name: "Alice Johnson", role: "Marketing Director", desc: "Alice brings over a decade of experience in digital marketing strategies and brand development." },
        { name: "Bob Smith", role: "Lead Developer", desc: "Bob specializes in creating robust, scalable web applications tailored to client needs." },
        { name: "Catherine Lee", role: "Cybersecurity Expert", desc: "Catherine ensures our client’s data is secure with cutting-edge cybersecurity measures." },
        { name: "David Kim", role: "AI Specialist", desc: "David leverages artificial intelligence to enhance marketing strategies and optimize performance." },
        { name: "Emily Chen", role: "Content Strategist", desc: "Emily crafts compelling content that resonates with audiences and drives engagement." },
        { name: "Frank White", role: "UX Designer", desc: "Frank designs user experiences that are intuitive and enjoyable for our clients’ customers." },
        { name: "Grace Brown", role: "Project Manager", desc: "Grace coordinates projects efficiently, ensuring timely delivery and client satisfaction." },
        { name: "We're Hiring!", role: "Join us", desc: "Explore exciting opportunities to grow your career with our innovative team." },
      ];
    
      return (
        <section className="py-12 text-center">
          <h2 className="text-3xl font-bold">Our Team</h2>
          <p className="text-gray-600">Meet the experts driving our success.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="w-24 h-24 bg-gray-300 mx-auto rounded-full"></div>
                <h3 className="mt-4 font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="text-sm mt-2">{member.desc}</p>
              </div>
            ))}
          </div>
          <button className="mt-6 px-6 py-2 bg-black text-white rounded-lg">Open Positions</button>
        </section>
      );
};

export default Team;
