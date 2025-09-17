import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "GitBuddy",
    description:
      "AI-powered tool to write, refactor, and push code directly to GitHub with intelligent code suggestions and automated workflows.",
    image: "/ai-coding-assistant-interface-with-github-integrat.jpg",
    technologies: ["React.js", "Node.js", "Express", "Lyzr AI", "GitHub OAuth"],
    liveUrl: "https://github.com/Rohan1030/GitBuddy",
    githubUrl: "https://github.com/Rohan1030/GitBuddy",
    featured: true,
  },
  {
    title: "Cosmo Travel",
    description:
      "Responsive travel exploration website with beautiful UI, interactive maps, and seamless booking experience.",
    image: "/modern-travel-website-with-destinations-and-bookin.jpg",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://cosmo-travel-hub.netlify.app/",
    githubUrl: "https://github.com/Rohan1030/AI-Cosmo-travel-",
    featured: true,
  },
  {
    title: "Dr. AI",
    description:
      "AI health assistant built for hackathon that provides medical insights and health recommendations using advanced AI models.",
    image: "/healthcare-ai-assistant-interface-with-medical-das.jpg",
    technologies: ["React", "Supabase", "OpenAI", "Healthcare APIs"],
    liveUrl: "https://github.com/Rohan1030/ai-symptom-navigator-guide",
    githubUrl: "https://github.com/Rohan1030/ai-symptom-navigator-guide",
    featured: true,
  },
  {
    title: "Rock Paper Scissor Game",
    description:
      "Interactive game with smooth animations and score tracking, built to practice JavaScript fundamentals.",
    image: "/rock-paper-scissors-game-interface-with-score-trac.jpg",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "http://rock-paper-gamee.netlify.app",
    githubUrl: "https://github.com/Rohan1030/Rock-Paper-scissor",
    featured: false,
  },
  {
    title: "YouTube Clone",
    description: "Full-featured YouTube clone with video streaming, search functionality, and responsive design.",
    image: "/youtube-clone-interface-with-video-grid-and-player.jpg",
    technologies: ["React.js", "YouTube API", "Tailwind CSS"],
    liveUrl: "http://youtuberohan.netlify.app",
    githubUrl: "https://github.com/Rohan1030/Youtube-clone-",
    featured: false,
  },
  {
    title: "Amazon Clone",
    description: "E-commerce platform replica with shopping cart, product catalog, and checkout functionality.",
    image: "/amazon-clone-e-commerce-interface-with-products-an.jpg",
    technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://github.com/Rohan1030/Amazon-Clone",
    githubUrl: "https://github.com/Rohan1030/Amazon-Clone",
    featured: false,
  },
]

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my recent work, featuring AI-powered applications, responsive web designs, and full-stack
            solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="group border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-[family-name:var(--font-heading)] text-foreground">
                    {project.title}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Featured
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-foreground mb-4">
            Other Projects
          </h3>
          <p className="text-muted-foreground">Additional projects showcasing various skills and technologies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-32 object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-[family-name:var(--font-heading)] text-foreground">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
