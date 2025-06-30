import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

export const Experience = () => {
    return (
      <section id="experience" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-gray-600">My professional journey in software development</p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Software Developer",
                company: "AIReel.ai",
                period: "Oct 2024 – Present",
                location: "Remote",
                achievements: [
                  "Built AIReel application end-to-end, an AI-powered platform for generating reels and UGC advertisements",
                  "Developed full-stack features using modern web technologies and AI integration",
                  "Implemented automated video generation workflows and user-friendly interfaces",
                  "Collaborated with AI/ML teams to integrate advanced video processing capabilities",
                ],
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Software Developer",
                company: "Personate.ai",
                period: "2022 – Oct 2024",
                location: "Remote",
                achievements: [
                  "Worked on SaaS video applications with focus on user experience and performance",
                  "Developed and maintained web applications using modern JavaScript frameworks",
                  "Collaborated with cross-functional teams to deliver high-quality software solutions",
                  "Gained experience in video processing and AI-powered content generation",
                ],
                gradient: "from-blue-500 to-cyan-500",
              },
            ].map((job, index) => (
              <Card
                key={index}
                className={`animate-fade-in-up hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50/50 border-l-4 border-l-transparent hover:border-l-purple-500`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${job.gradient} animate-pulse`}></div>
                        <span>{job.title}</span>
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-900">{job.company}</CardDescription>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-600 mt-2 md:mt-0">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start space-x-3 animate-fade-in-up hover:bg-purple-50/30 p-2 rounded-lg transition-all duration-300 group"
                        style={{ animationDelay: `${index * 300 + achievementIndex * 100}ms` }}
                      >
                        <span className="text-purple-400 mt-1 group-hover:scale-125 transition-transform duration-300">
                          •
                        </span>
                        <span className="group-hover:text-gray-900 transition-colors duration-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>        
    )
}