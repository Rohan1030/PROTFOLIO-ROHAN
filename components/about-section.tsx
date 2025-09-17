import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code, Lightbulb } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate about creating innovative web solutions and exploring the intersection of traditional development
            with artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I'm a B.Tech Computer Science Engineering student at Parul University with a deep passion for full-stack
              development and AI integration. My journey in technology is driven by curiosity and the desire to build
              solutions that make a real impact.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              I specialize in the MERN stack and have extensive experience integrating AI tools like OpenAI, Lyzr, n8n,
              and Crew AI into web applications. I'm particularly interested in AI-assisted coding, startup ecosystems,
              and productivity tools that enhance developer workflows.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or working on
              innovative solutions that bridge the gap between traditional web development and artificial intelligence.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Education</h3>
                    <p className="text-muted-foreground">
                      B.Tech Computer Science Engineering
                      <br />
                      Parul University
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Code className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Specialization</h3>
                    <p className="text-muted-foreground">
                      MERN Stack Development
                      <br />
                      AI Tool Integration
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Interests</h3>
                    <p className="text-muted-foreground">
                      AI-Assisted Coding
                      <br />
                      Startups & Productivity Tools
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
