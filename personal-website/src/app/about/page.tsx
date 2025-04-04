import React from "react";
import Navbar from "@/components/Navbar";

export default function About() {
    return (
        <>
            <Navbar/>
            <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 px-6">
                <section className="max-w-4xl mx-auto py-24">
                <h1 className="text-5xl font-bold mb-10 text-center tracking-tight">About Me</h1>

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

                <h1 className="text-5xl font-bold mb-10 text-center tracking-tight"> Experience</h1>
                <h2 className="text-3xl font-bold leading-relaxed">Wayfair – Software Engineer Co-op:</h2>
                <div className="space-y-6 text-lg leading-relaxed ">
                    <p>
                        I worked at Wayfair as a Software Engineer Co-op from July 2024 to December 2024. My main focus was on improving the efficiency of
                        inventory management systems and enhancing the overall tech stack used in Wayfair's retail stores.
                    </p>
                    <p>
                        During my time at Wayfair, I worked on a span of projects that help the business improve its business operations.
                        When I initially started I was overwhelmed by the amount of tools and software my team used. My team was the Physical Retail Operations Tech Team.
                        We had been responsible for all tech in Wayfair's Retails stores and the operations that took place in them.
                        My team had managed 13 different repos many of which had millions of lines of code.
                        Main responsibility of our team was to maintain and mange inventory systems. We had constant meeting with stakeholders
                        to understand their needs and how we could help them. With these insights we would build out new features and tools to help them.
                    </p>

                    <p>
                        I think I had started at the perfect time as the team was in the process of
                        completing additional features of one of the services and was just planning to start the next project.
                        The next project was a serialization service that allows us to uniquely identify each items in the warehouse.
                        This was a large project that was needed as sometimes units of a product had to be treated differently as they had been open-box, returned or damaged.
                        This new service would allow us to track each item and its condition and work in conjunction with the inventory service.
                        The service would interact with the frontend android application that store associates would uses to preform actions to the inventory.

                    </p>

                    <p>
                       For Majority of my co-op develop the serialization service and the android application.
                        I had create the frontend feature application that allowed for the serialization of products,
                        search of existing serialized inventory, edit metadata, delete product and reprint labels.
                        I had also worked on the backend service that would handle the requests from the android application.
                        I had helped to create the API endpoints that would allow the android application to communicate with the backend
                        along with endpoints to other services that we had to fetch data from and update. One of these was the POS system that we used to sell products.
                        Created a client to allow for communication with the POS system and allow for the POS to have record of these products.
                        During this whole process I had to make sure the work I was doing was abstract enough to work for any of our different solutions for our retail stores and be
                        in line with the rest of the team and the architecture of the system.
                    </p>

                    <p>
                        During the rest of my co-op I had worked on a few other projects that were smaller in scale but still important to the team.
                        I had created a way to help business auto price reduce products that were serialized and not selling.
                        I also helped out with building out the deployment pipeline for the serialization service.
                        Wrote Unit, Integration and E2E tests for the service to make sure it was working as expected.
                    </p>

                </div>


                <div className="mt-12 space-y-4 text-lg leading-relaxed">
                    <p>
                        Let’s connect! You can find me on
                        <a href="https://github.com/shaanpatel1213" target="_blank" className="text-blue-600 underline mx-1">
                            GitHub
                        </a>
                        or
                        <a href="https://linkedin.com/in/shaanpatel1213" target="_blank" className="text-blue-600 underline mx-1">
                            LinkedIn
                        </a>
                        — I’d love to chat.
                    </p>
                </div>
            </section>
            </main>
        </>
    );
}