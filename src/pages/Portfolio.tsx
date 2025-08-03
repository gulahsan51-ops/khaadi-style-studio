import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink, 
  Moon, 
  Sun,
  Code2,
  Database,
  Globe,
  Settings,
  ChevronDown,
  Star,
  GitFork
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const { toast } = useToast();

  const typewriterTexts = [
    "Backend Services & APIs",
    "Dynamic & Responsive Websites", 
    "Cross-Language Tools & Automations"
  ];

  const skills = [
    { name: "Python", level: 95, icon: Code2 },
    { name: "PHP", level: 90, icon: Code2 },
    { name: "Java", level: 85, icon: Code2 },
    { name: "JavaScript", level: 88, icon: Globe },
    { name: "C++", level: 80, icon: Code2 },
    { name: "C#", level: 75, icon: Code2 },
    { name: "Database Management", level: 92, icon: Database },
    { name: "API Integration", level: 94, icon: Settings }
  ];

  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      tags: ["PHP", "MySQL", "JavaScript"],
      stars: 24,
      forks: 8,
      language: "PHP"
    },
    {
      id: 2,
      name: "Task Management API",
      description: "RESTful API for project and task management",
      tags: ["Python", "FastAPI", "PostgreSQL"],
      stars: 18,
      forks: 5,
      language: "Python"
    },
    {
      id: 3,
      name: "Data Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive charts",
      tags: ["JavaScript", "React", "Node.js"],
      stars: 32,
      forks: 12,
      language: "JavaScript"
    },
    {
      id: 4,
      name: "Automation Scripts",
      description: "Collection of automation tools for various tasks",
      tags: ["Python", "C++", "Shell"],
      stars: 15,
      forks: 7,
      language: "Python"
    }
  ];

  const timeline = [
    { year: "2024", title: "Senior Full Stack Developer", desc: "Leading complex web application projects" },
    { year: "2023", title: "Software Engineer", desc: "Specialized in backend services and API development" },
    { year: "2022", title: "Junior Developer", desc: "Started journey in web development" },
    { year: "2021", title: "Computer Science Graduate", desc: "Completed degree with focus on software engineering" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % typewriterTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="gradient-text text-2xl font-bold">
            Ahsan Zafar
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="hover:bg-muted"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Download className="h-4 w-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-24">
        <div className="container mx-auto text-center">
          <div className="floating">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-4xl font-bold text-white">
              AZ
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Ahsan Zafar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            💡 "Turning Ideas into Code | Building Seamless Digital Experiences"
          </p>
          
          <div className="text-lg md:text-xl text-primary min-h-[2em] mb-8">
            <span className="typewriter">
              {typewriterTexts[currentText]}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="text-lg px-8"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8"
            >
              Contact Me
            </Button>
          </div>

          <div className="mt-12 animate-bounce">
            <ChevronDown className="h-8 w-8 mx-auto text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Developer from Rawalpindi, Pakistan, with expertise in 
                building robust web applications and backend services. My journey in software 
                engineering has been driven by a love for problem-solving and creating digital 
                solutions that make a difference.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With proficiency in multiple programming languages and frameworks, I specialize 
                in creating seamless user experiences backed by powerful, scalable backend systems. 
                I believe in writing clean, efficient code and staying updated with the latest 
                technologies.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Rawalpindi, Pakistan</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>gulahsan51@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Journey Timeline</h3>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                          {item.year}
                        </div>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-muted-foreground text-sm">{item.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <skill.icon className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold">{skill.name}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-6">Core Expertise</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Backend Services & APIs 🖥️", "Dynamic & Responsive Websites 🛠️", "Cross-Language Tools & Automations ⚙️", "Database Management", "API Integration"].map((expertise, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                  {expertise}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-4 w-4" />
                        <span>{project.forks}</span>
                      </div>
                    </div>
                    <span className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      {project.language}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Github className="h-4 w-4 mr-2" />
              View All on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>gulahsan51@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>03009721970</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Rawalpindi, Pakistan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <span>github.com/ahsanzafar</span>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name</label>
                      <Input placeholder="Your name" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="your@email.com" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input placeholder="Project inquiry" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project or inquiry..." 
                      className="min-h-[120px]"
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="gradient-text text-xl font-bold mb-4">Ahsan Zafar</div>
          <p className="text-muted-foreground mb-4">
            Full Stack Developer • Building Digital Excellence
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Phone className="h-5 w-5" />
            </Button>
          </div>
          <div className="mt-6 pt-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © 2024 Ahsan Zafar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;