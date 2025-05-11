import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header Section */} 
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gray-700">
            <Image
              src="/profile.JPG?height=400&width=400"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">Hi there, I'm Rahul 👋</h1>
            <p className="text-xl mb-4">I study Computer Science, Mathematics, and Entrepreneurship @ WashU</p>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
              <Badge variant="outline" className="px-3 py-1 border-gray-700 text-gray-300">
                Developer
              </Badge>
              <Badge variant="outline" className="px-3 py-1 border-gray-700 text-gray-300">
                Product Manager
              </Badge>
              <Badge variant="outline" className="px-3 py-1 border-gray-700 text-gray-300">
                Entrepreneur
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
                <Link href="mailto:rahul.chavali1@example.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="about" className="mb-12">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  I'm a passionate student studying Computer Science, Mathematics, and Entrepreneurship, with a focus on building
                  innovative solutions that solve real-world problems. I thrive in roles where I can interact with users and focus on pain points. I specialize in building AI and ML solutions and rapid prototyping products.
                </p>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Interests</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Artificial Intelligence & Machine Learning</li>
                    <li>Product Development</li>
                    <li>Voice Technology</li>
                    <li>Ask me about fantasy football, Kansas City Chiefs, poker, soccer, or anything tech!</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Education</h3>
                  <p>Bachelor of Science in Computer Science & Mathematics</p>
                  <p className="text-gray-400">Washington University in St. Louis, Expected Graduation 2027</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience" className="mt-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">Currently:</h3>
                  <ul className="mt-2 space-y-4">
                    <li className="flex gap-3">
                      <span className="text-green-400">▹</span>
                      <div>
                        <p className="font-medium">President of the McKelvey Fellowship</p>
                        <div className="text-blue-400">
                        <Link href={"https://www.mckelveyfellowship.com/"}>Fellowship Website</Link>
                        </div>
                        <p className="text-gray-400">
                          Leading an organization committed to helping Engineering Students improve their recruiting and career opportunities by leveraging WashU Alum. 
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-green-400">▹</span>
                      <div>
                        <p className="font-medium">Engineering Intern at Deepgram (YC16)</p>
                        <p className="text-gray-400">Building AI experiences and voice applications under the Chief Strategy Officer. </p>
                        <p className="text-gray-400">Series B startup backed by YCombinator, WingVC, Blackrock, Nvidia, etc. </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Previously:</h3>
                  <ul className="mt-2 space-y-4">
                    <li className="flex gap-3">
                      <span className="text-green-400">▹</span>
                      <div>
                        <p className="font-medium">Machine Learning Research Assistant</p>
                        <Link href={"https://github.com/rschavali02/ML-Research--UNET-1D-CNN-Image-Denoiser"} className="text-blue-400">Link to Work</Link>
                        <p className="text-gray-400">Worked in the Computational Imaging Lab @ Washington University in St. Louis. Build CNN models for 1D denoising on hyperspectral images.</p>
                        <p className="text-gray-400">Built CNN models for 1D denoising on hyperspectral images.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-green-400">▹</span>
                      <div>
                        <p className="font-medium">Engineering & Product @ Quture</p>
                        <p className="text-gray-400">
                          Full-Stack Development, Product Management, and GTM strategy for a secondhand fashion marketplace startup.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-green-400">▹</span>
                      <div>
                        <p className="font-medium">Product Development @ WashU GSDC</p>
                        <p className="text-gray-400">
                          Led 6 developers to create an app for WashU's on campus ice cream store. Built full-stack and ideated product iterations. 
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-green-400">▹</span>
                      <div>
                        <p className="font-medium">Computer Science Teaching Assistant</p>
                        <p className="text-gray-400">
                          TA for WashU's introductory data science course. Graded assignments and held office hours. 
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-gray-800 border-gray-700">
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

              <Card className="bg-gray-800 border-gray-700">
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

              <Card className="bg-gray-800 border-gray-700">
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

              <Card className="bg-gray-800 border-gray-700">
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

              <Card className="bg-gray-800 border-gray-700">
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

              <Card className="bg-gray-800 border-gray-700">
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
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  I'm always open to new opportunities, collaborations, or just a friendly chat about technology and
                  innovation.
                </p>

                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <Link href="mailto:rahul.chavali1@example.com" className="text-blue-400 hover:underline">
                      rahul.chavali1@gmail.com
                    </Link>
                  </div>

                  <div className="flex items-center gap-2">
                    <Github className="h-5 w-5 text-gray-400" />
                    <Link
                      href="https://github.com/rschavali02"
                      target="_blank"
                      className="text-blue-400 hover:underline"
                    >
                      github.com/rschavali02
                    </Link>
                  </div>

                  <div className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5 text-gray-400" />
                    <Link
                      href="https://www.linkedin.com/in/rahul-chavali/"
                      target="_blank"
                      className="text-blue-400 hover:underline"
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
        <footer className="text-center text-gray-400 mt-12">
          <p>© {new Date().getFullYear()} Rahul Chavali. All rights reserved.</p>
          <p className="text-sm mt-1">Built with Next.js and Tailwind CSS</p>
        </footer>
      </div>
    </main>
  )
}
