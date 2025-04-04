import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white text-gray-900 p-6">
                <section className="max-w-4xl mx-auto text-center py-6">
                    <h1 className="text-5xl font-bold mb-4">Shaan Patel</h1>
                    <p className="text-xl mb-6">
                        Software Engineer | Computer Science & Math @ Northeastern | Ex-Wayfair | Builder of TrekAI
                    </p>
                    <div className="flex justify-center space-x-4 mb-8">
                        <Link href="https://github.com/shaanpatel1213">
                            <Button>GitHub</Button>
                        </Link>
                        <Link href="https://linkedin.com/in/shaanpatel1213">
                            <Button>LinkedIn</Button>
                        </Link>
                        <a href="mailto:patel.shaan@northeastern.edu">
                            <Button>Email Me</Button>
                        </a>
                    </div>
                </section>
                <section className="max-w-4xl mx-auto text-center py-4">
                    <div className="space-y-6 text-lg leading-relaxed">
                        <p>
                            Hey! I’m <span className="font-semibold">Shaan Patel</span> — a Computer Science and Mathematics student at Northeastern University,
                            with a minor in Business Administration. I’m passionate about building software that makes a difference — especially at the
                            intersection of AI, backend systems, and great user experiences.
                        </p>

                        <p>
                            I’ve worked at companies like Wayfair and contributed to Northeastern’s CubeSat projects, while also helping 180+ students as a TA.
                            My side projects include <span className="font-medium">TrekAI</span> — an AI-powered travel journaling app, and <span className="font-medium">Husk Sheets</span> — a collaborative spreadsheet engine.
                        </p>

                        <p>
                            I enjoy architecting scalable backend systems, building thoughtful interfaces, and exploring how technology can solve everyday
                            problems. Outside of code, I love exploring cities, learning about business and design, and occasionally sketching new ideas.
                        </p>
                    </div>
                </section>
                <section className="max-w-4xl mx-auto py-10">
                    <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <Link href="https://github.com/shaanpatel1213/HuskSheets">
                                <CardContent className="p-4">
                                    <h3 className="text-xl font-bold">TrekAI</h3>
                                    <p className="mt-2 text-sm text-gray-700">
                                        iOS app to track and analyze travel paths using Firebase, Neo4j, and AI recommendations. Real-time sync, historical overlays, and map rendering.
                                    </p>
                                </CardContent>
                            </Link>
                        </Card>

                        <Card>
                            <CardContent className="p-4">
                                <h3 className="text-xl font-bold">Husk Sheets</h3>
                                <p className="mt-2 text-sm text-gray-700">
                                    Real-time collaborative spreadsheet using MERN stack. Features include formula parsing, conflict handling, and multi-user support.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-4">
                                <h3 className="text-xl font-bold">RAFT Key-Value Store</h3>
                                <p className="mt-2 text-sm text-gray-700">
                                    Python-based distributed store using RAFT consensus. Handles leader election, fault tolerance, and partition recovery.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>
        </>
    );
}
