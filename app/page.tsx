"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  MapPin,
  Calendar,
  Code,
  Sparkles,
  Zap,
  Rocket,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Hero } from "./_components/hero"
import { About } from "./_components/about"
import { Experience } from "./_components/experience"
import { Skills } from "./_components/skills"
import { Project } from "./_components/project"
import { Contact } from "./_components/contact"
import { Footer } from "./_components/footer"
import { Navbar } from "./_components/navbar"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Mouse Follower */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 opacity-20 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: "scale(1)",
        }}
      ></div>

      {/* Navigation */}

      <Navbar isLoaded={isLoaded}/>
      <Hero isLoaded={isLoaded} />
      <About/>
      <Experience/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}
