function About() {
    return (
        <div className="flex flex-col md:flex-row  gap-10 md:pt-20">
            <div className="md:w-1/2 ">
                <h1 className="text-center text-2xl font-bold mb-6">
                    About Me
                </h1>
                <p className="mb-4">
                    Hi, I'm Ömer! I'm a 3rd-year Computer Engineering student
                    with a strong curiosity for building and creating things
                    with code.
                </p>
                <p className="mb-4">
                    Currently, I'm exploring web development and learning
                    technologies like React and Tailwind CSS by working on small
                    projects.
                </p>
                <p>
                    I'm passionate about continuously improving my skills and
                    aspiring to become a Full-Stack Developer in the near
                    future.
                </p>
            </div>
            <div className="md:w-1/2     ">
                <h1 className="text-center text-2xl font-bold mb-6">
                    Technologies I'm Interested In
                </h1>

                <div className="flex flex-col sm:flex-row md:space-x-6 space-y-3 ">
                    <ul className="flex-1 space-y-3 list-disc list-inside">
                        <li>TypeScript</li>
                        <li>Spring Boot</li>
                    </ul>

                    <ul className="flex-1 space-y-3 list-disc list-inside">
                        <li>React</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;
