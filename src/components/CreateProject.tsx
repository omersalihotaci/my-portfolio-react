import { useState, useEffect, useRef } from "react";
import type { Project } from "../interface/Card";
interface ProjectCard {
    project: Project;
}

function CreateProject(props: ProjectCard) {
    const{url, title, github} = props.project;
    const [isMobile, setIsMobile] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!isMobile) return;

        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (!cardRef.current) return;
            const target = event.target;
            if (target instanceof Node && !cardRef.current.contains(target)) {
                setIsVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [isMobile]);
    return (
        <div
            ref={cardRef}
            style={{backgroundImage:`url(${url})`}}
            className={` mt-10 group relative w-90 h-60  bg-cover bg-center bg-no-repeat rounded-lg shadow-lg overflow-hidden cursor-pointer`}
            onClick={isMobile ? () => setIsVisible(!isVisible) : undefined}
        >
            {isMobile && isVisible && (
                <div className="absolute inset-0 bg-gray-400 bg-opacity-70 flex flex-col items-center justify-center transition-opacity duration-300 z-10 ">
                    <div className="p-4 text-white text-center">
                        <h3 className="text-xl font-bold mb-2">
                            {title}
                        </h3>
                    </div>
                    <a
                        href={github}
                        className="px-4 py-2 bg-indigo-500 md:bg-indigo-400 rounded hover:bg-indigo-500 transition-colors"
                    >
                        View on GitHub
                    </a>
                </div>
            )}

            {!isMobile && (
                <div className="absolute inset-0 bg-gray-400 bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-4 text-white text-center">
                        <h3 className="text-xl font-bold mb-2">
                            {title}
                        </h3>
                    </div>
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-indigo-400 rounded hover:bg-indigo-500 transition-colors"
                    >
                        View on GitHub
                    </a>
                </div>
            )}
        </div>
    );
}

export default CreateProject;
