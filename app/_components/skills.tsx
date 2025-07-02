import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Element } from "react-scroll"

export const Skills = () => {
    return (
      <section id="skills" className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <Element name="skills" >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Skills &{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="text-gray-600">Technologies I work with to build amazing applications</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
                icon: "🎨",
                gradient: "from-pink-500 to-rose-500",
              },
              {
                title: "Backend",
                skills: ["Node.js", "Express.js", "Python", "REST APIs", "GraphQL", "MongoDB", "PostgreSQL"],
                icon: "⚙️",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "AI & Tools",
                skills: [
                  "ChatGPT",
                  "Claude",
                  "Cursor",
                  "OpenAI API",
                  "Automation",
                ],
                icon: "🤖",
                gradient: "from-purple-500 to-indigo-500",
              },
              {
                title: "Cloud & DevOps",
                skills: ["AWS", "Vercel", "Git", "GitHub", "CI/CD"],
                icon: "☁️",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                title: "Design & UX",
                skills: ["Figma", "UI/UX Design", "Responsive Design", "Accessibility", "User Research"],
                icon: "🎯",
                gradient: "from-orange-500 to-red-500",
              },
              {
                title: "Other",
                skills: ["Scrum", "Testing", "Code Review", "Documentation", "Mathematics"],
                icon: "📚",
                gradient: "from-violet-500 to-purple-500",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className={`animate-fade-in-up hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50/30 group`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </span>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className={`animate-fade-in-up hover:scale-105 transition-all duration-300 bg-gradient-to-r ${category.gradient} text-white border-none hover:shadow-lg`}
                        style={{ animationDelay: `${index * 200 + skillIndex * 50}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </Element>
      </section>        
    )
}