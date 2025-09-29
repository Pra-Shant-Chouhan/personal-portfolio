"use client"

import * as React from "react"
import { Leaf, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
  { name: "Blogs", href: "/blogs" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("")
  const [hash, setHash] = useState("")
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setActiveLink(pathname)
    
    // Handle hash changes
    const handleHashChange = () => {
      setHash(window.location.hash)
    }

    // Set initial hash
    setHash(window.location.hash)

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('load', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('load', handleHashChange)
    }
  }, [pathname])

  const isActive = (href: string) => {
    // Handle page routes
    if (href.startsWith('/') && !href.startsWith('/#')) {
      if (href === "/") {
        return activeLink === "/" && !hash
      }
      return activeLink.startsWith(href)
    }
    
    // Handle hash links
    if (href.startsWith('#')) {
      return hash === href
    }
    
    return false
  }

  const handleNavClick = (href: string, event: React.MouseEvent) => {
    if (href.startsWith('#')) {
      event.preventDefault()
      setHash(href)
      
      // Scroll to section
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else {
        // If we're not on the home page, navigate to home first then scroll
        if (pathname !== '/') {
          router.push(`/${href}`)
        } else {
          window.location.hash = href
        }
      }
    }
    
    // Close mobile menu after click
    setMobileMenuOpen(false)
  }

  const linkBaseStyles = "relative text-sm font-medium transition-colors duration-200 focus:outline-none cursor-pointer"
  const linkInactiveStyles = "text-foreground/70 hover:text-primary"
  const linkActiveStyles = "text-primary"

  const underlineStyles = "absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="h-4 w-4" />
            </div>
            <span className="text-xl font-bold tracking-tight">Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className={`group ${linkBaseStyles} ${
                  isActive(item.href) ? linkActiveStyles : linkInactiveStyles
                }`}
              >
                {item.name}
                <span 
                  className={`${underlineStyles} ${
                    isActive(item.href) ? "w-full" : "w-0"
                  }`} 
                />
              </a>
            ))}
          </nav>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden border-primary/20 hover:border-primary/40"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/40">
            <nav className="flex flex-col space-y-2 px-4 py-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className={`group relative py-2 text-base font-medium transition-colors duration-200 rounded-md px-3 ${
                    isActive(item.href)
                      ? "text-primary bg-accent/50"
                      : "text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {item.name}
                  <span 
                    className={`absolute bottom-2 left-3 right-3 h-0.5 bg-primary transition-all duration-300 ${
                      isActive(item.href) ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`} 
                  />
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}