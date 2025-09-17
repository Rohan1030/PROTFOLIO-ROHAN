import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Code, MapPin } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "rohan@example.com",
    href: "mailto:rohan@example.com",
    description: "Best way to reach me for professional inquiries",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/rohankumarsharma",
    href: "https://www.linkedin.com/in/rohan-kumar-sharma-a70567201/",
    description: "Connect with me professionally",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/rohankumarsharma",
    href: "https://github.com/rohan1030",
    description: "Check out my code and contributions",
  },
  {
    icon: Code,
    label: "LeetCode",
    value: "leetcode.com/rohankumarsharma",
    href: "https://leetcode.com/rohan1030",
    description: "View my coding practice and solutions",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and
            innovation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card
                  key={index}
                  className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-[family-name:var(--font-heading)] text-foreground">
                          {method.label}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4 font-mono text-sm">{method.value}</p>
                    <Button asChild className="w-full">
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <IconComponent className="h-4 w-4 mr-2" />
                        Connect
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Call to Action */}
          <Card className="border-border bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-foreground font-medium">Based in India</span>
              </div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-foreground mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
                Whether you're looking for a full-stack developer, need AI integration expertise, or want to collaborate
                on an innovative project, I'd love to hear from you. Let's build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="mailto:rohan.sharma.tech09@gmail.com">
                    <Mail className="h-5 w-5 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/rohan-kumar-sharma-a70567201/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
