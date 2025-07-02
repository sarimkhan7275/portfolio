import { Button } from "@/components/ui/button"
import { Code, Download, Rocket, Sparkles, Zap, Github, Linkedin, Mail, } from "lucide-react"
import Image from "next/image"
import { GITHUB, LINKEDIN } from "../_utils/data"
import { Link } from 'react-scroll';

export const Hero = ({isLoaded} : {isLoaded : boolean}) => {
    
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
    <section className="pt-24 pb-16 px-4 relative">
        <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
                className={`space-y-6 transition-all duration-1000 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
            >
                <div className="space-y-2">
                <div className="flex items-center space-x-2 mb-4">
                    <Sparkles className="h-6 w-6 text-purple-500 animate-spin-slow" />
                    <span className="text-purple-600 font-medium animate-pulse">Available for new opportunities</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                    <span className="inline-block animate-fade-in-up">Sarim</span>{" "}
                    <span className="inline-block animate-fade-in-up delay-200 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                    Khan
                    </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl text-gray-600 font-medium animate-fade-in-up delay-300">
                    <span className="inline-flex items-center space-x-2">
                    <Code className="h-8 w-8 text-purple-500 animate-bounce" />
                    <span>Software Developer</span>
                    </span>
                </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg animate-fade-in-up delay-400">
                Building{" "}
                <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    AI-powered web apps
                </span>{" "}
                using modern full-stack technologies. Passionate about creating innovative solutions that bridge the gap
                between artificial intelligence and user experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
                <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    asChild
                >
                    <Link to="projects" smooth={true} duration={500}>
                    <Rocket className="h-4 w-4" />
                    <span>View Projects</span>
                    </Link>
                </Button>
                <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-300 bg-transparent hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 group"
                    
                    onClick={handleDownloadResume}
                >
                    <Download className="h-4 w-4 group-hover:animate-bounce" />
                    <span>Download Resume</span>
                </Button>
                </div>
                <div className="flex space-x-4 pt-4 animate-fade-in-up delay-600">
                {[
                    { icon: Github, href: GITHUB, color: "hover:text-gray-900"},
                    { icon: Linkedin, href: LINKEDIN, color: "hover:text-blue-600"},
                ].map(({ icon: Icon, href, color }, index) => (
                    <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className={`transform hover:scale-110 transition-all duration-300 ${color} hover:bg-white/50 animate-fade-in-up`}
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                    asChild
                    >
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <Icon className="h-5 w-5" />
                    </a>
                    </Button>
                ))}
                </div>
            </div>
            <div
                className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
            >
                <div className="relative group">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 flex items-center justify-center animate-float">
                    <div className="w-72 h-72 rounded-full overflow-hidden pt-[140px] bg-gradient-to-br from-white to-gray-100 flex items-center justify-center shadow-2xl">
                    <Image
                        src="/Sarim-profile.jpg"
                        alt="Sarim Khan"
                        width={280}
                        height={280}
                        className="rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-4 shadow-lg animate-pulse">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                    </div>
                </div>
                {/* Floating Icons */}
                <div className="absolute -top-8 -left-8 animate-float delay-1000">
                    <div className="bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <Zap className="h-6 w-6 text-yellow-500" />
                    </div>
                </div>
                <div className="absolute -bottom-8 -left-8 animate-float delay-2000">
                    <div className="bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <Code className="h-6 w-6 text-blue-500" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    )
}