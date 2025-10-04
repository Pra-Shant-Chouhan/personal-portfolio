import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download, Eye, ExternalLink, Mail, FileText } from "lucide-react";

export function CtaButtons() {
    return (
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Resume Dropdown Button */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="flex items-center justify-center gap-2 px-6 py-2 md:px-7 md:py-3 h-fit rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 text-sm sm:text-base uppercase">
                        <FileText className="w-4 h-4 md:w-5 md:h-5" />
                        <span>Resume</span>

                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[200px] bg-popover/95 backdrop-blur-lg border rounded-xl shadow-xl">
                    <DropdownMenuItem asChild>
                        <a
                            href="/resume/Prashant_Chouhan_Resume.pdf"
                            download
                            className="flex items-center gap-3 cursor-pointer"
                        >
                            <Download className="w-4 h-4 text-primary" />
                            <span>Download Resume</span>
                        </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <a
                            href="/resume/Prashant_Chouhan_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 cursor-pointer"
                        >
                            <Eye className="w-4 h-4 text-primary" />
                            <span>View Resume</span>
                            <ExternalLink className="w-3 h-3 text-muted-foreground ml-auto" />
                        </a>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Get in Touch Button */}
            <Button
                variant="outline"
                asChild
                className="group flex items-center justify-center gap-2 px-6 py-2 md:px-7 md:py-3 h-auto rounded-xl border-2 border-accent/20 bg-background/40 hover:bg-accent/10 hover:border-accent/30 text-foreground font-medium backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg hover:text-foreground/80 text-sm sm:text-base uppercase"
            >
                <a href="mailto:pchouhan122@gmail.com">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>
                        Get in Touch
                    </span>
                </a>
            </Button>
        </div>
    );
}