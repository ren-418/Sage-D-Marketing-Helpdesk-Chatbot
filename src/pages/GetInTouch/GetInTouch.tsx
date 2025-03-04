import { useState } from "react";

import arrowIcon from '../../assets/icons/arrow-right-top.svg'

const GetInTouch = () => {

    interface FormData {
        name: any;
        company: any;
        email: any;
        phone: any;
        services: any[];
        socialMedia: any;
        heardAbout: any[];
        projectDetails: any;
    }

    const [formData, setFormData] = useState<FormData>({
        name: "",
        company: "",
        email: "",
        phone: "",
        services: [],
        socialMedia: "",
        heardAbout: [],
        projectDetails: "",
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleServiceSelection = (service: any) => {
        setFormData((prev: any) => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter((s: any) => s !== service)
                : [...prev.services, service],
        }));
    };

    const handleSourceSelection = (source: any) => {
        setFormData((prev: any) => ({
            ...prev,
            heardAbout: prev.heardAbout.includes(source)
                ? prev.heardAbout.filter((s: any) => s !== source)
                : [...prev.heardAbout, source],
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formEndpoint = "https://formsubmit.co/Danmushwana@sagedmarkting.co.za";
    
        fetch(formEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (response.ok) {
                alert("Message sent successfully!");
                
            } else {
                alert("Error sending message. Please try again.");
            }
        })
        .catch(error => console.error("Error:", error));
    };
    return (
        <section className="flex flex-col gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full bg-cover bg-center mt-48">
            <div className="relative pl-5 md:text-xl text-sm">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#00ff26] mr-2"></span>
                Get in touch
            </div>
            <h1 className="text-black md:text-6xl text-4xl font-medium">Let’s make something <br className="hidden md:block" /> great together!</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                <div className="flex flex-col">
                    <label className="text-black font-medium">Hi there! My name is</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name *" className="border-b border-gray-400 p-2 outline-none" required />
                </div>
                <div className="flex flex-col">
                    <label className="text-black font-medium">and I work at</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company name *" className="border-b border-gray-400 p-2 outline-none" required />
                </div>

                <div className="flex flex-col">
                    <label className="text-black font-medium">My contact details are</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email address *" className="border-b border-gray-400 p-2 outline-none" required />
                </div>
                <div className="flex flex-col">
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone number *" className="border-b border-gray-400 p-2 outline-none mt-6 md:mt-8" required />
                </div>

                <div className="flex flex-col md:col-span-2">
                    <label className="text-black font-medium">I require a project with these services</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {["Instagram reels", "Product video", "Lifestyle"].map((service, index) => (
                            <button type="button" key={index} onClick={() => handleServiceSelection(service)} className={`border px-4 py-2 rounded-full ${formData.services.includes(service) ? "bg-black text-white" : "text-gray-700 hover:bg-black hover:text-white"}`}>
                                {service}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:col-span-2">
                    <label className="text-black font-medium">My social media handles are</label>
                    <input type="text" name="socialMedia" value={formData.socialMedia} onChange={handleChange} placeholder="Insert Instagram, Facebook, or other account handles" className="border-b border-gray-400 p-2 outline-none" />
                </div>

                <div className="flex flex-col md:col-span-2">
                    <label className="text-black font-medium">How did you hear about us?</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {["Instagram", "Facebook", "Word of mouth", "Google", "LinkedIn", "Other"].map((source, index) => (
                            <button type="button" key={index} onClick={() => handleSourceSelection(source)} className={`border px-4 py-2 rounded-full ${formData.heardAbout.includes(source) ? "bg-black text-white" : "text-gray-700 hover:bg-black hover:text-white"}`}>
                                {source}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:col-span-2">
                    <label className="text-black font-medium">Tell us a bit about your project:</label>
                    <textarea name="projectDetails" value={formData.projectDetails} onChange={handleChange} placeholder="Please give us some insights as to what you are needing *" className="border-b border-gray-400 p-2 outline-none h-24" required></textarea>
                </div>

                <div className="md:col-span-2">
                    <button type="submit" className="bg-[#00ff26] text-[#1D1D1B] flex gap-1 px-6 py-4 cursor-pointer rounded-xl font-semibold ">
                        <p>Let's get started</p>
                        <img src={arrowIcon} alt="icon" width={20} className="font-semibold" />
                    </button>
                </div>
            </form>
            <div className="w-full border-b border-gray md:mt-24 mt-16">
            </div>
        </section>
    );
};

export default GetInTouch;
