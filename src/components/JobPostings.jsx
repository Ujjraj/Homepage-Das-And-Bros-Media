import React, { useState } from "react";

const jobListings = [
  {
    id: 1,
    title: "Growth Marketing Specialist",
    description: "Join our team to drive growth through innovative marketing strategies.",
  },
  {
    id: 2,
    title: "Cybersecurity Analyst",
    description: "Protect our digital assets and ensure the security of our systems.",
  },
  {
    id: 3,
    title: "AI Developer",
    description: "Develop AI-driven solutions to enhance our services.",
  },
];

const JobPostings = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [resume, setResume] = useState("");

  const handleApply = (job) => {
    setSelectedJob(job);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle resume submission logic here
    console.log("Resume submitted for:", selectedJob.title, "Resume:", resume);
    setSelectedJob(null);
    setResume("");
  };

  return (
    <div className="p-10 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Job Openings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobListings.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600 mt-2">{job.description}</p>
            <button
              onClick={() => handleApply(job)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Apply
            </button>
          </div>
        ))}
      </div>

      {selectedJob && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Apply for {selectedJob.title}</h3>
          <form onSubmit={handleSubmit} className="mt-4">
            <label className="block mb-2">Upload your resume:</label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setResume(e.target.files[0])}
              className="border rounded-lg p-2 w-full"
              required
            />
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default JobPostings; 