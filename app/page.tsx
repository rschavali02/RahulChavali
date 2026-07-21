import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function Polaroid({
  src,
  alt,
  caption,
  rotate,
  className,
}: {
  src: string
  alt: string
  caption: string
  rotate: number
  className?: string
}) {
  return (
    <div
      className={`bg-card border border-border shadow-md p-3 pb-6 w-40 sm:w-48 ${className ?? ""}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="relative w-full h-32 sm:h-40 overflow-hidden">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      <p className="text-center text-lg mt-2">{caption}</p>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-foreground rotate-[-2deg]">
            <Image
              src="/profile.JPG?height=400&width=400"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl mb-2">Hi there, I'm Rahul 👋</h1>
            <p className="text-2xl mb-4">I love building things, trying new things, and meeting new people</p>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
              <Badge variant="outline" className="px-3 py-1 text-base border-foreground">
                Builder
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-base border-foreground">
                Product Person
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-base border-foreground">
                Drummer
              </Badge>
            </div>

            <div className="flex gap-3 justify-center md:justify-start">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/rschavali02" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/rahul-chavali/" target="_blank">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="mailto:rahul.chavali1@gmail.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="about" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">About Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg">
                  I'm a builder who loves working on products people actually enjoy using — currently doing that
                  with voice AI and agents. Outside of building, I'm usually chasing a new hobby, watching the
                  Chiefs or Manchester United, playing a card game, or enjoying the outdoors!
                </p>

                <div className="flex flex-wrap justify-center gap-4 py-4">
                  <Polaroid src="/photos/outdoors.jpg" alt="Hiking outdoors" caption="Outdoors" rotate={-6} className="mt-4" />
                  <Polaroid src="/photos/superheroes.jpg" alt="Superhero face paint" caption="Superheroes" rotate={4} />
                  <Polaroid src="/photos/poker.jpg" alt="Poker chips" caption="Poker" rotate={-3} className="mt-6" />
                  <Polaroid src="/photos/board-games.jpg" alt="Playing Catan" caption="Board Games" rotate={5} />
                  <Polaroid src="/photos/chiefs.jpg" alt="KC Chiefs fans" caption="KC Chiefs" rotate={-4} className="mt-4" />
                  <Polaroid src="/photos/drumming.jpg" alt="Drumming on stage" caption="Drumming" rotate={3} />
                  <Polaroid src="/photos/soccer.jpg" alt="Soccer stadium" caption="Soccer" rotate={-5} className="mt-6" />
                </div>

                <div>
                  <h3 className="text-2xl mb-2">I love trying new things!</h3>
                  <p className="mb-2">Here are some recent attempts at getting out of my comfort zone:</p>
                  <ul className="list-disc list-inside space-y-1 text-lg">
                    <li>Learning to surf</li>
                    <li>Went to the driving range (once)</li>
                    <li>Joined a morning workout group</li>
                    <li>Volunteered for trash pickup in the Mission district</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl mb-2">Education</h3>
                  <p className="text-lg">
                    Graduated with a B.S. in Math &amp; Computer Science from Washington University in St. Louis —
                    now finishing up a Master's there too.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <div className="flex gap-3">
                  <span className="text-2xl">▹</span>
                  <div>
                    <p className="font-bold">Associate Product Manager Intern, Agentic Commerce — Salesforce</p>
                    <p>Building agentic shopping experiences on the Agentforce Commerce team.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">▹</span>
                  <div>
                    <p className="font-bold">Voice AI Engineering &amp; Product Associate — Deepgram (YC16)</p>
                    <p>
                      About a year across the company: built new Voice AI + Agent tech on Deepgram Labs, and worked
                      under the Chief Strategy Officer touching Applied Engineering, Product, GTM, Dev Experience,
                      Strategy, and Sales Engineering along the way.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">▹</span>
                  <div>
                    <p className="font-bold">Math &amp; Computer Science — Washington University in St. Louis</p>
                    <p>Graduated undergrad, now finishing a Master's.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>EVA (EMT Virtual Assistant)</CardTitle>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://github.com/koji0701/devfest-2026" target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <CardDescription>XR / Voice AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    An XR voice assistant for EMTs that automates ePCR hospital forms — records patient interactions,
                    diarizes and cleans audio, generates report content, and fills out the form via browser agents
                    before the ambulance even arrives.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">XR</Badge>
                    <Badge variant="secondary">11Labs</Badge>
                    <Badge variant="secondary">Gemini</Badge>
                    <Badge variant="secondary">Browser Use</Badge>
                    <Badge variant="secondary">Google DevFest Hackathon Winner</Badge>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>VocalFlow</CardTitle>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://github.com/RahulC-DG/VoiceCreation" target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <CardDescription>Typescript / Web</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>A voice-first AI assistant that helps users design and build web applications through natural conversation.</p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">20,000 impressions</Badge>
                    <Badge variant="secondary">AI</Badge>
                    <Badge variant="secondary">Typescript</Badge>
                    <Badge variant="secondary">Deepgram</Badge>
                    <Badge variant="secondary">OpenAI</Badge>
                    <Badge variant="secondary">Anthropic</Badge>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>AI Voice Assistant</CardTitle>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://github.com/rschavali02/AI-Voice-Assistant" target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <CardDescription>Python</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>A voice assistant powered by AI that can perform various tasks through voice commands.</p>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2">
                    <Badge variant="secondary">AI</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Speech-to-Text</Badge>
                    <Badge variant="secondary">GroqCloud</Badge>
                    <Badge variant="secondary">Llama3</Badge>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>Semantic Caching Tool</CardTitle>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://github.com/rschavali02/Semantic_Caching_Tool" target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <CardDescription>Python</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>An intelligent caching system that understands the semantic meaning of queries.</p>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Caching</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Redis</Badge>
                    <Badge variant="secondary">OpenAI Embedding Model</Badge>
                    <Badge variant="secondary">Vector Store</Badge>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>ML Research: CNN Image Denoiser</CardTitle>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://github.com/rschavali02/ML-Research--UNET-1D-CNN-Image-Denoiser" target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <CardDescription>Python</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>A deep learning model that removes noise from images using convolutional neural networks.</p>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2">
                    <Badge variant="secondary">CNN</Badge>
                    <Badge variant="secondary">Computer Vision</Badge>
                    <Badge variant="secondary">PyTorch</Badge>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>Chalkboard.ai</CardTitle>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://github.com/rschavali02/Chalkboard.ai_" target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <CardDescription>Python</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>A study tool that transcribes YouTube/personal videos and creates customizable notes for any subject</p>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Llama3</Badge>
                    <Badge variant="secondary">GroqCloud</Badge>
                    <Badge variant="secondary">AssemblyAI</Badge>
                    <Badge variant="secondary">LabLabAI Hackathon Finalist</Badge>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>Thrift3D</CardTitle>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://github.com/RSChavali23/HackWashu24" target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <CardDescription>Python + Javascript</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Thrift3D transforms Clothing into interactive 3D models, enabling thrift stores to offer immersive online and VR shopping experiences.</p>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Flask</Badge>
                    <Badge variant="secondary">Three.JS</Badge>
                    <Badge variant="secondary">Mastercard API</Badge>
                    <Badge variant="secondary">HackWashU Winner</Badge>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>Product Presentation</CardTitle>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://github.com/rschavali02/product-presentation" target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <CardDescription>JavaScript</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>An interactive web-based presentation platform for showcasing product ideas.</p>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-2">
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">UI/UX</Badge>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="contact" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">
                  I'm always open to new opportunities, collaborations, or just a friendly chat about technology and
                  innovation.
                </p>

                <div className="grid gap-2 text-lg">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <Link href="mailto:rahul.chavali1@gmail.com" className="text-accent hover:underline">
                      rahul.chavali1@gmail.com
                    </Link>
                  </div>

                  <div className="flex items-center gap-2">
                    <Github className="h-5 w-5 text-muted-foreground" />
                    <Link
                      href="https://github.com/rschavali02"
                      target="_blank"
                      className="text-accent hover:underline"
                    >
                      github.com/rschavali02
                    </Link>
                  </div>

                  <div className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                    <Link
                      href="https://www.linkedin.com/in/rahul-chavali/"
                      target="_blank"
                      className="text-accent hover:underline"
                    >
                      linkedin.com/in/rahul-chavali
                    </Link>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Send Message</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <footer className="text-center text-muted-foreground mt-12">
          <p>© {new Date().getFullYear()} Rahul Chavali. All rights reserved.</p>
          <p className="text-sm mt-1">Built with Next.js and Tailwind CSS</p>
        </footer>
      </div>
    </main>
  )
}
