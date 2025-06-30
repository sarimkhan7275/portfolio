import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export const About = () => {
    return (
        <section id="about" className="py-16 px-4 bg-white/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 animate-fade-in-up">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                About{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                Full-stack developer with 2 years of experience building innovative AI-powered applications
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 animate-fade-in-left">
                <p className="text-gray-700 leading-relaxed text-lg">
                    I'm a passionate full-stack developer with 2 years of experience in building cutting-edge web
                    applications. Currently working at <span className="font-semibold text-purple-600">AIReel.ai</span>,
                    where I focus on developing AI-powered video generation platforms.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                    Previously, I contributed to innovative SaaS solutions at{" "}
                    <span className="font-semibold text-pink-600">Personate.ai</span>. I'm passionate about AI, automation,
                    and video generation platforms.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                    <p className="text-gray-700 font-medium">
                    <span className="text-purple-600">🎓 Education:</span> BSc in Mathematics, currently pursuing MCA
                    (Distance Learning, completing 2026)
                    </p>
                </div>
                </div>

                <Card className="animate-fade-in-right hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50/30 border-purple-100">
                <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                    <Sparkles className="h-5 w-5 text-purple-500" />
                    <span>Key Highlights</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {[
                    "Built AIReel app end-to-end (AI Reels + UGC Ad Generator)",
                    "Worked on SaaS video applications at Personate.ai",
                    "Uses modern AI tools like ChatGPT, Claude, and Cursor for rapid development",
                    "Strong foundation in Mathematics with ongoing MCA studies",
                    ].map((highlight, index) => (
                    <div
                        key={index}
                        className="flex items-start space-x-3 animate-fade-in-up group hover:bg-purple-50/50 p-2 rounded-lg transition-all duration-300"
                        style={{ animationDelay: `${index * 200}ms` }}
                    >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                        <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {highlight}
                        </p>
                    </div>
                    ))}
                </CardContent>
                </Card>
            </div>
            </div>
        </section>
    )
}