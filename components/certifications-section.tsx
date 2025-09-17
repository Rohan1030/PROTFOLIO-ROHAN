import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    title: "Java Programming",
    issuer: "HackerRank",
    date: "2023",
    description:
      "Comprehensive certification covering Java fundamentals, OOP concepts, and advanced programming techniques.",
    credentialUrl: "https://www.hackerrank.com/certificates/dcab2dcd0719",
    skills: ["Java", "OOP", "Data Structures", "Algorithms"],
  },
  {
    title: "MySQL Bootcamp",
    issuer: "Online Certification",
    date: "2023",
    description:
      "Complete database management course covering SQL queries, database design, and optimization techniques.",
    credentialUrl: "https://verify.letsupgrade.in/certificate/LUEMYSQLAPR1251080",
    skills: ["MySQL", "SQL", "Database Design", "Query Optimization"],
  },
  {
    title: "Computer Networks",
    issuer: "NPTEL",
    date: "2023",
    description: "Comprehensive course on networking fundamentals, protocols, and network architecture principles.",
    credentialUrl: "https://drive.google.com/file/d/1r_-6ulGqHTMBdZqjMrdTCyH7peAUWgkA/view",
    skills: ["Networking", "TCP/IP", "Network Security", "Protocols"],
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] text-foreground mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professional certifications and achievements that validate my technical expertise and commitment to
            continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {cert.date}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-[family-name:var(--font-heading)] text-foreground mt-4">
                  {cert.title}
                </CardTitle>
                <p className="text-sm font-medium text-secondary">{cert.issuer}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{cert.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Button size="sm" variant="outline" asChild className="w-full bg-transparent">
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Credential
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Achievement Section */}
        <div className="mt-16">
          <Card className="max-w-2xl mx-auto border-border bg-gradient-to-r from-secondary/5 to-accent/5">
            <CardContent className="p-8 text-center">
              <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-foreground mb-4">
                Continuous Learning
              </h3>
              <p className="text-muted-foreground text-pretty">
                I'm committed to staying updated with the latest technologies and best practices in web development and
                AI. Currently pursuing additional certifications in cloud computing and advanced AI integration
                techniques.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
