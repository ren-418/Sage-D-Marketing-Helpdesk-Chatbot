    import { Link } from "react-router-dom";

    const Privacy = () => {
        return (
            <section className="flex flex-col gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full bg-cover bg-center mt-48">
                <h1 className="text-black md:text-6xl text-4xl font-medium">Privacy Policy</h1>
                
                <div className="text-black text-base md:text-xl">
                    <p>
                        This Privacy Policy describes how Sage-D Marketing Group ("we," "us," or "our") collects, uses, discloses, and protects the personal information you provide when using our website and services.
                    </p>

                    <h2 className="font-semibold text-2xl mt-5">Information Collection and Use</h2>
                    <p>
                        We may collect personal information such as:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Name</li>
                        <li>Contact information, including email address and phone number</li>
                        <li>Demographic information, such as postcode, preferences, and interests</li>
                        <li>Other information relevant to customer surveys, marketing promotions, and/or offers</li>
                    </ul>
                    <p className="mt-3">
                        We collect this information for the following purposes:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Internal record keeping</li>
                        <li>Enhancing our products and services</li>
                        <li>Sending promotional emails about new services, offers, or other information we think you may find interesting</li>
                        <li>Customizing the website and our services according to your interests</li>
                        <li>Improving your experience with Sage-D Marketing Group</li>
                    </ul>

                    <h2 className="font-semibold text-2xl mt-5">Data Security</h2>
                    <p>
                        We are committed to ensuring that your information is secure. We have implemented suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online, preventing unauthorized access or disclosure.
                    </p>

                    <h2 className="font-semibold text-2xl mt-5">Cookies</h2>
                    <p>
                        Our website uses cookies to analyze browsing preferences and optimize the user experience. A cookie is a small file that asks permission to be placed on your computer’s hard drive. You can choose to accept or decline cookies. If you decline, this may prevent you from taking full advantage of the website and its features.
                    </p>

                    <h2 className="font-semibold text-2xl mt-5">Third-Party Links</h2>
                    <p>
                        Our website may contain links to other websites of interest. However, once you use these links to leave our site, we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide while visiting such sites. These sites are not governed by this privacy policy.
                    </p>

                    <h2 className="font-semibold text-2xl mt-5">Your Consent</h2>
                    <p>
                        By using our website, you consent to our privacy policy.
                    </p>

                    <h2 className="font-semibold text-2xl mt-5">Changes to This Privacy Policy</h2>
                    <p>
                        We reserve the right to update or change our privacy policy at any time. Any modifications will be effective immediately upon posting on the website. Your continued use of the website after any changes constitutes your acceptance of the new policy.
                    </p>

                    <h2 className="font-semibold text-2xl mt-5">Contact Us</h2>
                    <p>
                        If you have any questions or concerns about our privacy policy, please <Link to="/layouts/get-in-touch" className="text-[#00ff26]" target="_blank">contact</Link> us
                    </p>
                
                </div>
                <div className="w-full border-b border-gray md:mt-24 mt-16">
                </div>
            </section>
        )
    }

    export default Privacy;
