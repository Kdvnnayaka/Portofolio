import { useState } from "react";
import { cn } from "../lib/utils";


const skills = [
  // Network & Security
  { name: "Cisco Packet Tracer", level: 90, category: "Network" },
  { name: "Kali Linux", level: 85, category: "Network" },
  { name: "Nmap", level: 90, category: "Network" },
  { name: "Network Design & Subnetting", level: 85, category: "Network" },
  { name: "Firewall Configuration", level: 70, category: "Network" },
  { name: "VPN & NAT Setup", level: 70, category: "Network" },

  // Cloud & Infrastructure
  { name: "Microsoft Azure", level: 80, category: "Cloud" },
  { name: "Amazon Web Services (AWS)", level: 75, category: "Cloud" },
  { name: "Terraform", level: 70, category: "Cloud" },
  { name: "Docker", level: 70, category: "Cloud" },
  { name: "Linux Server Administration", level: 75, category: "Cloud" },

  // Programming & Automation
  { name: "Python", level: 80, category: "Software Dev" },
  { name: "Bash Scripting", level: 70, category: "Software Dev" },
  { name: "JavaScript", level: 65, category: "Software Dev" },
  { name: "C", level: 65, category: "Software Dev" },

  // Machine Learning (Basic)
  { name: "Scikit-learn", level: 80, category: "Machine Learning" },
  { name: "Pandas & NumPy", level: 75, category: "Machine Learning" },
  { name: "Data Preprocessing", level: 70, category: "Machine Learning" }
];

const categories = ["all", "Network", "Cloud", "Software Dev", "Machine Learning"]
export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                 {categories.map((category, key) => (
                    <button 
                      key={key}
                      onClick={() => setActiveCategory(category)} 
                      className={cn(
                        "px-5 py2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category
                         ? "bg-primary text-primary-foreground"
                         : "bg-secondary/70 text-foreground hover:bg-primary/20"
                      )}
                    >
                       {category}
                    </button>
                 ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols02 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill,key) => (
                    <div 
                    key={key} 
                    className="bg-card p-6 rounded-lg shadow-xs card-hover"
                    >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">
                                {skill.name}
                            </h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div 
                                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                                style={{width: skill.level + "%" }}
                            />
                        </div>
                        <div className="text-right mt-1"> 
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    </section>
    );
};

