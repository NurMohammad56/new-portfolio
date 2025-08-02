"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Menu,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Phone,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

// 1
// 2
// 3
// 4
// 5
// 6
// 7

export default function Portfolio() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const projects = [
    {
      title: "Psykick Club",
      description:
        "Community game platform ARV & TMC with real-time notifications, OAuth login, and automated game features using node-cron.",
      github: "https://github.com/NurMohammad56/Psykick-club",
      live: "https://psykick.vercel.app/",
      stack: "NodeJS, ExpressJS, MongoDB, JWT, WebSocket",
      image: "/psykick.png",
    },
    {
      title: "Diamond Auction",
      description:
        "Real-time bidding system with automated bidding, Stripe Connect integration, and multi-role dashboards.",
      github: "https://github.com/NurMohammad56/Diamond-Auctions",
      live: "https://www.diamondauctionsllc.com/",
      stack: "NodeJS, ExpressJS, MongoDB, Stripe, WebSocket",
      image: "/diamond-auction.png",
    },
    {
      title: "House Security Check",
      description: "Security check APIs with Stripe Connect payments and real-time chat notifications. The main service is home security check.",
      github: "https://github.com/NurMohammad56/Royal-House-Check",
      live: "https://royalhousecheck.com/",
      stack: "NodeJS, ExpressJS, MongoDB, Stripe, WebSocket",
      image: "/house-security.png",
    },
    {
      title: "Table Fresh Backend",
      description: "Farm-to-table marketplace connecting users with fresh foods from local farmers.",
      github: "https://github.com/FSDTeam-SAA/gman54_backend",
      live: "https://tablefresh.org/login",
      stack: "NodeJS, ExpressJS, MongoDB, Payment Gateway",
      image: "/table-fresh.png",
    },
    {
      title: "Bitnaro App Backend",
      description: "Multi-service platform for home services with real-time tracking and admin dashboard.",
      github: "https://github.com/FSDTeam-SAA/bitnaro_backend",
      live: null,
      stack: "NodeJS, ExpressJS, MongoDB, Real-time Tracking",
      image: "/bitnaro.png",
    },
    {
      title: "Washlio App Backend",
      description: "Car wash service with auto-matching and location-based services within 10km radius.",
      github: "https://github.com/FSDTeam-SAA/eylanb_backend",
      live: null,
      stack: "NodeJS, ExpressJS, MongoDB, Location Services",
      image: "/washlio.png",
    },
    {
      title: "Courier Service Backend",
      description: "Complete courier system with multiple roles and comprehensive admin dashboard.",
      github: "https://github.com/NurMohammad56/Courier-service",
      live: null,
      stack: "NodeJS, ExpressJS, MongoDB, Role Management",
      image: "/courier-service.png",
    },
  ]

  const totalGroups = Math.ceil(projects.length / 3)

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % totalGroups)
  }

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + totalGroups) % totalGroups)
  }

  const getCurrentProjects = () => {
    const startIndex = currentProjectIndex * 3
    return projects.slice(startIndex, startIndex + 3)
  }

  const currentProjects = getCurrentProjects()

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
        {/* Left Sidebar */}
        <div className="space-y-8">
          {/* Profile Header */}
          <div className="flex items-start gap-4">
            <Image
              src="/WhatsApp Image 2025-07-29 at 9.21.01 PM.jpeg"
              alt="Nur Mohammad Profile"
              width={60}
              height={60}
              className="rounded-full flex-shrink-0"
            />

            <div>
              <h1 className="text-2xl font-mono">NUR MOHAMMAD</h1>
              <p className="text-gray-400">BACKEND DEVELOPER</p>

              <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                <MapPin className="w-3 h-3" />
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex gap-2 mt-2">
                <Button variant="ghost" size="icon" asChild className="bg-gray-800 hover:bg-gray-700">
                  <Link href="https://github.com/NurMohammad56" target="_blank">
                    <Github className="w-3 h-3" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="bg-gray-800 hover:bg-gray-700">
                  <Link href="https://www.linkedin.com/in/nurmohammad56/" target="_blank">
                    <Linkedin className="w-3 h-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Motivated Backend Developer with experience in building scalable and secure backend systems using NodeJS
              and ExpressJS. Proficient in database design, API development, and cloud integration. Passionate about
              delivering clean, maintainable code.
            </p>
            <Button variant="outline" className="rounded-full bg-gray-900" asChild>
              <Link href="/CV - Nur Mohammad.pdf" target="_blank">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Link>
            </Button>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h3 className="text-lg font-mono text-gray-300">Experience</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="font-semibold text-white">Backend Developer</p>
                <p className="text-gray-400">Scaleup Ads Agency • Mar 2025 - Present</p>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-white">Backend Developer</p>
                <p className="text-gray-400">Arabian Services Company • Apr 2024 - Nov 2024</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-300">
              <Mail className="w-4 h-4" />
              <a href="mailto:nurmohammad0605@gmail.com" className="hover:text-white transition-colors">
                nurmohammad0605@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone className="w-4 h-4" />
              <a
                href="https://wa.me/8801889376903"
                target="_blank"
                className="hover:text-white transition-colors"
                rel="noreferrer"
              >
                +880 1889376903 (WhatsApp)
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-1">
            <div className="text-gray-400 font-bold p- text-sm">
              <div className="flex gap-2 ">
                <Link href="/CV - Nur Mohammad.pdf" target="_blank" className="bg-gray-800 hover:bg-gray-700 p-1 rounded">
                  Resume
                </Link>
                <Link href="mailto:nurmohammad0605@gmail.com" className="bg-gray-800 hover:bg-gray-700 p-1 rounded">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          {/* Menu Button - Only show on mobile */}
          <div className="flex justify-end lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </div>

          {/* Projects Section with 3 Cards */}
          <section>
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-mono">Featured Projects</h2>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" onClick={prevProject} className="h-8 w-8 p-0">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={nextProject} className="h-8 w-8 p-0">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Three Project Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {currentProjects.map((project, index) => (
                <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors">
                  <div className="relative aspect-[3/2] bg-gray-800">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold mb-1">{project.title}</h3>
                    <p className="text-gray-400 text-xs mb-2 leading-relaxed line-clamp-2">{project.description}</p>
                    <p className="text-[10px] text-blue-400 mb-2">{project.stack}</p>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" className="text-xs h-6 px-2" asChild>
                        <Link href={project.github} target="_blank">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Link>
                      </Button>
                      {project.live && (
                        <Button size="sm" variant="ghost" className="text-xs h-6 px-2" asChild>
                          <Link href={project.live} target="_blank">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Live
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Indicators */}
            <div className="flex justify-center gap-1 mt-3">
              {Array.from({ length: totalGroups }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${index === currentProjectIndex ? "bg-blue-500" : "bg-gray-600"
                    }`}
                />
              ))}
            </div>

            {/* Project Counter */}
            <div className="text-center mt-2 text-gray-400 text-xs">
              {currentProjectIndex + 1} of {totalGroups} groups • {projects.length} total projects
            </div>
          </section>

          {/* Stack Section */}
          <section className="bg-gray-900 rounded-xl p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-mono">Tech Stack</h2>
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="text-sm font-semibold mb-2">Languages & Frameworks</h3>
                <div className="flex flex-wrap gap-1">
                  {["TypeScript", "JavaScript", "NodeJS", "ExpressJS"].map((tech) => (
                    <span key={tech} className="bg-white/20 px-2 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2">Databases & Tools</h3>
                <div className="flex flex-wrap gap-1">
                  {["MongoDB", "MySQL", "Docker", "Redis", "JWT", "OAuth", "Stripe", "WebSocket"].map((tool) => (
                    <span key={tool} className="bg-white/20 px-2 py-1 rounded-full text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Education Section - Moved before contact */}
          <section className="bg-gray-900 rounded-xl p-5">
            <h2 className="text-lg font-mono mb-3">Education</h2>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="font-semibold text-white">B.Sc. in Computer Science & Engineering</p>
                <p className="text-gray-400">Northern University Bangladesh • 2023-2026 (Present)</p>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-white">Diploma in Engineering</p>
                <p className="text-gray-400">Moulvibazar Polytechnic Institute • 2017-2022</p>
              </div>
            </div>
          </section>

          {/* Contact and Experience Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Contact Section */}
            <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-5">
              <h2 className="text-lg font-mono mb-3">Let&apos;s Connect</h2>
              <p className="text-gray-300 text-sm mb-3">Ready to discuss your next backend project?</p>
              <div className="space-y-2">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 w-full text-sm h-8">
                  <Link href="mailto:nurmohammad0605@gmail.com">
                    <Mail className="w-3 h-3 mr-2" />
                    Send Email
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full bg-transparent text-sm h-8">
                  <Link href="https://wa.me/8801889376903" target="_blank">
                    <Phone className="w-3 h-3 mr-2" />
                    WhatsApp
                  </Link>
                </Button>
              </div>
            </section>

            {/* Projects Completed Section */}
            <section className="bg-gray-900 rounded-xl p-5">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-3xl font-bold mb-1">12+</h3>
              <p className="text-gray-400 text-sm mb-1">Projects Completed</p>
              <p className="text-xs text-gray-500">Scalable backend solutions</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}