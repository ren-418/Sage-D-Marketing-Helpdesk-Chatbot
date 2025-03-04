import { Link } from "react-router-dom";

const TermsOfService = () => {
    return (
        <section className="flex flex-col gap-5 md:gap-10 lg:px-32 px-5 md:px-10 w-full bg-cover bg-center mt-48">
            <h1 className="text-black md:text-6xl text-4xl font-medium">Terms of Service</h1>
            
            <div className="text-black text-base md:text-xl">
                <p>
                    Please read these Terms of Service  carefully before using  operated website.
                </p>

                <h2 className="font-semibold text-2xl mt-5">Agreement to Terms</h2>
                <p>
                    By accessing or using our website, you agree to comply with these Terms. If you disagree with any part of the terms, then you may not access the website.
                </p>

                <h2 className="font-semibold text-2xl mt-5">Intellectual Property</h2>
                <p>
                    The website and its original content, features, and functionality are owned by Sage-D Marketing Group and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>

                <h2 className="font-semibold text-2xl mt-5">User Content</h2>
                <p>
                    Our website allows you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material (“User Content”). You are responsible for the User Content you post on our website.
                </p>

                <h2 className="font-semibold text-2xl mt-5">Prohibited Uses</h2>
                <p>
                    You are prohibited from:
                </p>
                <ul className="list-disc pl-6">
                    <li>Using our website in any way that breaches any applicable local, national, or international law or regulation.</li>
                    <li>Harassing, abusing, insulting, harming, defaming, slandering, disparaging, intimidating, or discriminating based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability.</li>
                    <li>Submitting false or misleading information.</li>
                    <li>Uploading or transmitting viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the website.</li>
                </ul>

                <h2 className="font-semibold text-2xl mt-5">Limitation of Liability</h2>
                <p>
                    In no event shall Sage-D Marketing Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>

                <h2 className="font-semibold text-2xl mt-5">Termination</h2>
                <p>
                    We may terminate or suspend access to our website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>

                <h2 className="font-semibold text-2xl mt-5">Governing Law</h2>
                <p>
                    These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.
                </p>

                <h2 className="font-semibold text-2xl mt-5">Changes to Terms</h2>
                <p>
                    We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days’ notice before any new terms take effect. What constitutes a material change will be determined at our sole discretion.
                </p>

                <h2 className="font-semibold text-2xl mt-5">Contact Us</h2>
                <p>
                    If you have any questions about these Terms, please <Link to="/layouts/get-in-touch" className="text-[#00ff26]" target="_blank">contact</Link> us.
                </p>
            </div>

            <div className="w-full border-b border-gray md:mt-24 mt-16"></div>
        </section>
    );
}

export default TermsOfService;
