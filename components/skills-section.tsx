import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: ["Java", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design", "UI/UX"],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Supabase", "MySQL"],
  },
  {
    title: "AI & Tools Integration",
    icon: "🤖",
    skills: ["OpenAI", "Lyzr AI", "n8n", "Crew AI", "v0.dev", "AI Workflows"],
  },
  {
    title: "Development Tools",
    icon: "🛠️",
    skills: ["GitHub", "Figma", "Postman", "Netlify", "Render", "VS Code"],
  },
  {
    title: "Core Concepts",
    icon: "📚",
    skills: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive overview of my technical expertise across various domains of software development and AI
            integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle className="text-xl font-[family-name:var(--font-heading)] text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto border-border bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-foreground mb-4">
                Specialized in AI-Driven Development
              </h3>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                I excel at integrating artificial intelligence tools and workflows into traditional web development,
                creating intelligent applications that enhance user experience and automate complex processes.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge variant="outline" className="bg-background text-primary border-primary">
                  AI-Powered Code Generation
                </Badge>
                <Badge variant="outline" className="bg-background text-primary border-primary">
                  Intelligent Automation
                </Badge>
                <Badge variant="outline" className="bg-background text-primary border-primary">
                  Machine Learning Integration
                </Badge>
                <Badge variant="outline" className="bg-background text-primary border-primary">
                  Workflow Optimization
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
