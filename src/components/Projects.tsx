import CreateProject from "./CreateProject";
import type { Project } from "../interface/Card";

function Projects() {

    const projects: Project[] = [
        {
            url: "/ecommerce2.jpg",
            title: "Simple-React-Ecommerce",
            github: "https://github.com/omersalihotaci/simple-react-ecommerce",
        },
        {
            url: "/portfolio.jpg",
            title: "My Portfolio",
            github: "https://github.com/omersalihotaci",
        },
    ];
    return (
        <div className="mt-20 mb-20">
            <h1 className="text-center font-bold text-2xl">My Projects</h1>
            <div className="">
                <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-4">
                    <CreateProject project={projects[0]} />
                    <CreateProject project={projects[1]} />
                </div>
                {/* <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-4">
                    <CreateProject />
                    <CreateProject />
                </div> */}
            </div>
            <h3 className="mt-10 text-xl">More coming soon...</h3>
        </div>
    );
}

export default Projects;
