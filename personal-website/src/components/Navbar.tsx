'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="w-full px-6 py-4 border-b bg-white sticky top-0 z-50 shadow-sm">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo/Name */}
                <Link href="/" className="text-xl font-bold">
                    Shaan Patel
                </Link>

                {/* Nav links */}
                <div className="hidden md:flex space-x-6 items-center">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/projects" className="hover:underline">Projects</Link>
                    <Link href="/about" className="hover:underline">About</Link>
                </div>

                {/* Social Buttons */}
                <div className="space-x-2 hidden md:flex">
                    <Link href="https://github.com/shaanpatel1213" target="_blank">
                        <Button variant="default" className="flex items-center gap-2">
                            <Github className="w-4 h-4" /> GitHub
                        </Button>
                    </Link>

                    <Link href="https://linkedin.com/in/shaanpatel1213" target="_blank">
                        <Button variant="default" className="flex items-center gap-2">
                            <Linkedin className="w-4 h-4" /> LinkedIn
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}