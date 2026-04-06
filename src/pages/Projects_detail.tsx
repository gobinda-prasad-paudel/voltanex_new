import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { projects } from "../lib/data";
import { ArrowLeft, CheckCircle, Clock, User } from "lucide-react";

const ProjectPage: React.FC = () => {
  const { p_id } = useParams<{ p_id: string }>();

  const project = projects.find((p) => p.id == p_id);

  console.log(project)

  if (!project) {
    return (
      <div className="pt-24 text-center">
        {/* <Header /> */}
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-sans antialiased">
      {/* <Header /> */}

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">

          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT */}
            <div className="lg:col-span-2">

              {/* Image */}
              <div className="relative h-[300px] md:h-[400px] w-full mb-6 rounded-lg overflow-hidden">
                {/* <img
                  src={"https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg"}
                  alt={"Project"}
                  className="w-full h-full object-cover"
                /> */}
                <img
                  src={project.image || "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded">
                  {project.status}
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {project.title}
              </h1>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="border border-blue-600 text-blue-600 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-lg mb-6">{project.description}</p>

                {project.fullDescription
                  .trim()
                  .split("\n\n")
                  .map((para, i) => (
                    <p key={i} className="mb-4">
                      {para}
                    </p>
                  ))}
              </div>

              {/* Challenges & Results */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Challenges */}
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-600" />
                    Challenges
                  </h3>
                  <ul className="space-y-2">
                    {project.challenges.map((c, i) => (
                      <li key={i}>• {c}</li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
                    Results
                  </h3>
                  <ul className="space-y-2">
                    {project.results.map((r, i) => (
                      <li key={i}>• {r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div>
              <div className="bg-white shadow-md p-6 rounded-lg sticky top-24">

                {/* Lead */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Project Lead
                  </h3>
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-blue-600 mr-2" />
                    {project.teamLead}
                  </div>
                </div>

                {/* Status */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Status</h3>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded">
                    {project.status}
                  </span>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="border border-blue-600 text-blue-600 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="space-y-3">
                  <Link
                    to="/#contact"
                    className="block text-center bg-blue-600 text-white py-2 rounded"
                  >
                    Contact About This Project
                  </Link>

                  <Link
                    to="/#donate"
                    className="block text-center border border-blue-600 text-blue-600 py-2 rounded"
                  >
                    Support This Research
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectPage;