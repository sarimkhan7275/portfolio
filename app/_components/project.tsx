import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link";
import { Element } from 'react-scroll';

export const Project = () => {
    return (
      <section id="projects" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <Element name="projects" >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-gray-600">Some of the projects I've worked on</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 animate-fade-in-up bg-gradient-to-br from-white to-gray-50/50 border-2 border-transparent hover:border-purple-200`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <Link href={project.link} target="_blank" >
                <div
                  className={`aspect-video bg-gradient-to-br ${project.gradient} rounded-t-lg flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="rounded-t-lg object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between group-hover:text-purple-600 transition-colors duration-300">
                    <span className="flex items-center space-x-2">
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.borderGradient} animate-pulse`}
                      ></div>
                      <span>{project.title}</span>
                    </span>
                  </CardTitle>
                  <CardDescription className="group-hover:text-gray-700 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {project.details}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className={`animate-fade-in-up hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r ${project.borderGradient} hover:text-white hover:border-transparent`}
                        style={{ animationDelay: `${index * 300 + tagIndex * 100}ms` }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
        </Element>
      </section>  
    )
}




const projects = [
              {
                title: "AIReel App",
                description: "AI-powered video generation platform",
                details:
                  "End-to-end AI application for generating reels and UGC advertisements with automated workflows.",
                tags: ["React", "Next.js", "AI/ML", "Video Processing"],
                gradient: "from-purple-100 to-pink-100",
                borderGradient: "from-purple-500 to-pink-500",
                link : "https://aireel.io/sign-up",
                image : "/aireel.png"
              },
              {
                title: "Personate SaaS",
                description: "Video-focused SaaS application",
                details:
                  "Contributed to a comprehensive SaaS video application with advanced user management and processing capabilities.",
                tags: ["Nextjs", "TailwindCSS", "SaaS", "Video Tech"],
                gradient: "from-blue-100 to-cyan-100",
                borderGradient: "from-blue-500 to-cyan-500",
                link : "https://studio.personate.ai/",
                image : "/app_personate.png"
              },
              {
                title: "Personate Website",
                description: "Modern responsive website",
                details:
                  "Clean, modern portfolio website built with Next.js and Tailwind CSS showcasing my work and experience.",
                tags: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive"],
                gradient: "from-green-100 to-emerald-100",
                borderGradient: "from-green-500 to-emerald-500",
                link : "https://personate.ai/",
                image : "/personate_website.png"
              },
            ]