"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-foreground mb-4 text-balance transition-transform duration-300 hover:scale-105 cursor-default"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Hi, I'm{" "}
              <span className={`text-primary transition-all duration-300 ${isHovered ? "text-shadow-lg" : ""}`}>
                Rohan Kumar Sharma
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6 transition-colors duration-300 hover:text-foreground cursor-default">
              Full Stack Developer | AI-Driven Web Development Enthusiast
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty transition-colors duration-300 hover:text-foreground cursor-default">
              Building responsive applications and integrating AI into workflows with modern web technologies.
              Passionate about creating innovative solutions that bridge the gap between traditional development and
              artificial intelligence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 group"
            >
              View My Projects
              <ArrowDown className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
            </Button>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="transition-all duration-300 hover:scale-110 hover:shadow-md hover:border-primary/50 bg-transparent"
              >
                <a
                  href="https://github.com/rohan1030"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="transition-all duration-300 hover:scale-110 hover:shadow-md hover:border-primary/50 bg-transparent"
              >
                <a
                  href="https://www.linkedin.com/in/rohan-kumar-sharma-a70567201/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="transition-all duration-300 hover:scale-110 hover:shadow-md hover:border-primary/50 bg-transparent"
              >
                <a href="mailto:rohan@example.com" aria-label="Email Contact">
                  <Mail className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
                </a>
              </Button>
            </div>
          </div>

          <div
            className="animate-bounce hover:animate-pulse transition-all duration-300 cursor-pointer"
            onClick={scrollToProjects}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto hover:text-primary transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
