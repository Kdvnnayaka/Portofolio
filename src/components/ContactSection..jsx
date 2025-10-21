import { Instagram, Linkedin, Mail, MapPin, Phone, PlusCircleIcon } from "lucide-react";

export const ContactSection = () => {
    return( 
    <section 
     id="contact"
     className="py-24 px-4 relative bg-secondary/30"
     >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3 md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary"> Touch</span> 
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
           I’m looking for internship or entry-level opportunities in networking, cybersecurity, or AI. I’m eager to learn, grow, and contribute while gaining real industry experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                
                    <div className="flex items-star space-x-4">
                        <div className="p-3 rounded-full bg-primary/20">
                        <Mail className="h-6 w-6 text-primary"/>{" "}
                        </div>
                        <div>
                            <h4 className="font-medium"> Email</h4>
                            <a href="mailto:plister211@gmail.com" className="text-muted-foreground hover:text-primary">
                                plister211@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-star space-x-4">
                        <div className="p-3 rounded-full bg-primary/20">
                        <Phone className="h-6 w-6 text-primary"/>{" "}
                        </div>
                        <div>
                            <h4 className="font-medium"> Phone</h4>
                            <a href="tel:082114202179" className="text-muted-foreground hover:text-primary">
                                0821 1420 2179
                            </a>
                        </div>
                    </div>
                    <div className="flex items-star space-x-4">
                        <div className="p-3 rounded-full bg-primary/20">
                        <MapPin className="h-6 w-6 text-primary"/>{" "}
                        </div>
                        <div>
                            <h4 className="font-medium"> Location</h4>
                            <a className="text-muted-foreground hover:text-primary">
                                Jakarta, Indonesia
                            </a>
                        </div>
                    </div>
            </div>
           <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6"> Socials</h3>
                
                    <div className="flex items-star space-x-4">
                        <div className="p-3 rounded-full bg-primary/20">
                        <Instagram className="h-6 w-6 text-primary"/>{" "}
                        </div>
                        <div>
                            <h4 className="font-medium"> Instagram</h4>
                            <a href="https://www.instagram.com/davinayaka/" className="text-muted-foreground hover:text-primary">
                                @davinayaka
                            </a>
                        </div>
                    </div>
                    <div className="flex items-star space-x-4">
                        <div className="p-3 rounded-full bg-primary/20">
                        <Linkedin className="h-6 w-6 text-primary"/>{" "}
                        </div>
                        <div>
                            <h4 className="font-medium"> LinkedIn</h4>
                            <a href="https://www.linkedin.com/in/khoiri-davin-nayaka-3b0b57219/"className="text-muted-foreground hover:text-primary">
                                Khoiri Davin Nayaka
                            </a>
                        </div>
                    </div>
                    <div className="flex items-star space-x-4">
                        <div className="p-3 rounded-full bg-primary/20">
                        <PlusCircleIcon className="h-6 w-6 text-primary"/>{" "}
                        </div>
                        <div>
                            <h4 className="font-medium"> LINE ID</h4>
                            <a className="text-muted-foreground hover:text-primary">
                                davin_nayaka
                            </a>
                        </div>
                    </div>
            </div> 
        </div>

      </div>
    </section>
    );
};