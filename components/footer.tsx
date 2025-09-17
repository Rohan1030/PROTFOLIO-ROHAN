"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-primary">
              Rohan Kumar Sharma
            </h3>
            <p className="text-muted-foreground text-pretty">
              Full Stack Developer passionate about creating innovative web solutions and integrating AI into modern
              applications.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/rohan1030"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/rohan-kumar-sharma-a70567201/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:rohan@example.com" aria-label="Email Contact">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-foreground">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                About Me
              </button>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Skills
              </button>
              <button
                onClick={() => document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Certifications
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-foreground">
              Get In Touch
            </h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <Mail className="h-4 w-4 inline mr-2" />
                rohan.sharma.tech09@gmail.com.com
              </p>
              <p className="text-muted-foreground">Based in India</p>
              <p className="text-muted-foreground text-sm">Open to remote opportunities and collaborations</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">© {currentYear} Rohan Kumar Sharma. All rights reserved.</p>
            <p className="text-muted-foreground text-sm flex items-center">
              Built with <Heart className="h-4 w-4 mx-1 text-red-500" /> 
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
