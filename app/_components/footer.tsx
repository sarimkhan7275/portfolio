import { Button } from "@/components/ui/button"
import { TvIcon, Linkedin, Github, Mail } from "lucide-react"
import { GITHUB, LINKEDIN } from "../_utils/data"

export const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-8 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 animate-fade-in-up">
              <p className="text-gray-400">© {new Date().getFullYear()} Sarim Khan. All rights reserved.</p>
            </div>
            <div className="flex space-x-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-white/10 transform hover:scale-110 transition-all duration-300"
                  asChild
                >
                  <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                    <Github/>
                  </a>
                </Button>
              <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-white/10 transform hover:scale-110 transition-all duration-300"
                  asChild
                >
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                    <Linkedin/>
                  </a>
                </Button>
              <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-white/10 transform hover:scale-110 transition-all duration-300"
                  asChild
                >
                  <a href={"mailto:sarimkhan7275@gmail.com"} target="_blank" rel="noopener noreferrer">
                    <Mail/>
                  </a>
                </Button>
            </div>
          </div>
        </div>
      </footer>
    )
}

