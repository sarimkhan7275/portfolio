import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@radix-ui/react-separator"
import { Download, Sparkles, Mail, Linkedin, Github } from "lucide-react"
import { Element } from "react-scroll"
import { GITHUB, LINKEDIN } from "../_utils/data"

export const Contact = () => {
  function handleDownloadResume() {
        const link = document.createElement("a");
        link.href = "/resume.pdf"; 
        link.download = "Sarim_Khan_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        window.open(
            "https://drive.google.com/file/d/1gzb-7qOwG-GcntfOe5OnjsYEsXD3Bk8z/view?usp=sharing",
            "_blank",
            "noopener,noreferrer"
        );
    }

    return (
      <section id="contact" className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <Element name="contact" >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get In{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-gray-600">I'm always open to discussing new opportunities and interesting projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in-left hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50/30">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-purple-500" />
                  <span>Let's Connect</span>
                </CardTitle>
                <CardDescription>
                  Feel free to reach out for collaborations, opportunities, or just to say hello!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { icon: Mail, text: "sarimkhan7275@gmal.com", href: "mailto:sarimkhan7275@gmal.com" },
                  { icon: Linkedin, text: "linkedin.com/in/sarimkhan", href: LINKEDIN },
                  { icon: Github, text: "github.com/sarimkhan", href: GITHUB },
                ].map(({ icon: Icon, text, href }, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 animate-fade-in-up hover:bg-purple-50/50 p-3 rounded-lg transition-all duration-300 group cursor-pointer"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <Icon className="h-5 w-5 text-gray-600 group-hover:text-purple-600 group-hover:scale-110 transition-all duration-300" />
                    <a href={href} target="_blank" className="text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                      {text}
                    </a>
                  </div>
                ))}
                <Separator className="my-4" />
                <div className="flex space-x-4">
                  <Button
                    onClick={handleDownloadResume}
                    variant="outline"
                    className="flex-1 bg-transparent hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 group"
                  >
                    <Download className="h-4 w-4 group-hover:animate-bounce" />
                    <span>Resume</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-right hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-pink-50/30">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-pink-500" />
                  <span>Quick Message</span>
                </CardTitle>
                <CardDescription>Send me a quick message and I'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-300 resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: "500ms" }}
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        </Element>
      </section>
    )
}