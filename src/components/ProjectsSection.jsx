import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Designing and Route Network Topology using Cisco Packet Tracer",
        description: "Planned and configured a three-story building network with VLANs, DHCP, and a dedicated server to ensure reliable and efficient data flow",
        image: "/projects/Network.png",
        tags: ["Cisco Packet tracer", "Routing", "DHCP"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Weather Prediction using LightGBM",
        description: "Developed a research model using LightGBM to analyze and predict weather patterns, comparing its performance against other machine learning algorithms",
        image: "/projects/WeatherPrediction.png",
        tags: ["Machine Learning", "Jupyter", "AI"],
        demoUrl: "#",
        githubUrl: "https://github.com/Kdvnnayaka/weather_prediction_using_LightGBM",
    },
    {
        id: 3,
        title: "HeartCare",
        description: "Created heart disease prediction system using the Random Forest algorithm to assist early risk detection based on user health data",
        image: "/projects/HeartDiseasePrediction.png",
        tags: ["Machine Learning", "Jupyter", "CSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/Kdvnnayaka/Network_Design-_Routing",
    },
];

export const ProjectSection = () => {
    return <section id="projects" className="py-23 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
               {" "} 
               Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
               Here is a collection of academic projects demonstrating applied knowledge and practical experience
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div 
                     key={key} 
                     className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) =>(
                                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>  
                                ))}
                            </div>
                        <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a 
                                 href={project.demoUrl} 
                                 target="_blank"
                                 className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                >
                                    <ExternalLink size={20}/>
                                </a>
                                <a 
                                 href={project.githubUrl}
                                 target="_blank"
                                 className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                >
                                    <Github  size={20}/>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Kdvnnayaka" target="_blank"> 
                    Check My Github <ArrowRight />
                </a>

            </div>
        </div>
    </section>
}
