import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

export default function Projects() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white text-gray-900 p-6">
                <section className="max-w-4xl mx-auto py-10">
                    <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardContent className="p-4">
                                <h3 className="text-xl font-bold">TrekAI</h3>
                                <p className="mt-2 text-sm text-gray-700">
                                    iOS app to track and analyze travel paths using Firebase, Neo4j, and AI recommendations. Real-time sync, historical overlays, and map rendering.
                                </p>
                            </CardContent>
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