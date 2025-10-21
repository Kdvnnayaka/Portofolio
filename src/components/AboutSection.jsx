import { Cloud, Code, CodeIcon, Network } from "lucide-react"

export const AboutSection = () => {
   return <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
           About <span className="text-primary"> Me</span>
         </h2>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
               <h3 className="text-2xl font-semibold"> Computer Science Graduate specializing in Network Technology and Security </h3>
               <p className="text-muted-foreground">
                 I’m passionate about building reliable networks, securing systems from modern threats, and exploring how AI can improve performance and automation. My experience includes system design, cloud technologies, and machine learning projects focused on creating scalable and efficient solutions.
               </p>
               <p className="text-muted-foreground">
                  I value collaboration, clear documentation, and continuous learning to ensure every project is both innovative and dependable.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"> 
                  <a href="#contact" className="cosmic-button">
                     Get In Touch
                  </a>
                   <a href="" className="px-6 py-2 rounded-full border border primary text-primary hover-bg-primary/10 transition-colors duration-300">
                     Download CV
                  </a>
               </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
               <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                     <div className="p-3 rounded-full bg-primary/10">
                        <Network className="h-6 w-6 text-primary"/>
                         </div>
                         <div className="text-left">
                           <h4 className="font-semibold text-lg">Network Technology</h4>
                           <p>
                              Building secure and efficient network systems that keep data connected and reliable
                           </p>
                     </div>
                  </div>
               </div>
               <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                     <div className="p-3 rounded-full bg-primary/10">
                        <Cloud className="h-6 w-6 text-primary"/>
                         </div>
                         <div className="text-left">
                           <h4 className="font-semibold text-lg">Network Technology</h4>
                           <p>
                              Designing flexible and scalable cloud solutions to support modern applications
                           </p>
                     </div>
                  </div>
               </div>
               <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                     <div className="p-3 rounded-full bg-primary/10">
                        <Code className="h-6 w-6 text-primary"/>
                         </div>
                         <div className="text-left">
                           <h4 className="font-semibold text-lg">Machine Learning</h4>
                           <p>
                              Developing smart systems that use data to make accurate predictions and insights.
                           </p>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>
   </section>
}