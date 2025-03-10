import { useEffect, useState } from "react";

export default function Modal({ showModal, onClose }: { showModal: boolean; onClose: () => void }): JSX.Element | null {
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
        companyName: "",
        instagramHandle: "",
        editDescription: "",
        postProductionBudget: "",
        referenceLink: "",
        rawFilesLink: "",

    });

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!showModal) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        setIsSending(true);
        try {

            const response = await fetch("https://getform.io/f/bejrvlma ", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            });


            if (response.ok) {
                alert("Email sent!");
            } else {
                alert("Failed to send email.");
            }
            setIsSending(false);
        } catch (error) {
            console.error("Error:", error);
            setIsSending(false);
        }
    };


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-[800px] p-6 relative">

                <div className="flex justify-between items-center border-b pb-3 text-black">
                    <h1 className="text-2xl font-medium">Fill in Form</h1>
                    <button onClick={onClose} aria-label="Close" className="text-black hover:opacity-70">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="py-4 space-y-4">
                    <div>
                        <label className="block text-black font-medium">Name of company/videographer</label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-black font-medium">Instagram handle</label>
                        <input
                            type="text"
                            name="instagramHandle"
                            value={formData.instagramHandle}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-black font-medium">Describe the type of edit you want</label>
                        <textarea
                            name="editDescription"
                            value={formData.editDescription}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-black font-medium">What is your Post Production Budget?</label>
                        <input
                            type="text"
                            name="postProductionBudget"
                            value={formData.postProductionBudget}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-black font-medium">Send a video reference link</label>
                        <input
                            type="url"
                            name="referenceLink"
                            value={formData.referenceLink}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-black font-medium">Send a Wetransfer or Google Drive link of your raw files</label>
                        <input
                            type="url"
                            name="rawFilesLink"
                            value={formData.rawFilesLink}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded"
                            required
                        />
                    </div>

                    {/* Footer with Buttons */}
                    <div className="flex justify-end gap-3 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded bg-gray-300 text-black hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded bg-[#00ff26] text-black font-semibold hover:bg-green-500"
                        >
                            {
                                isSending && <p>Sending...</p>
                            }
                            {
                                !isSending && <p>Submit</p>
                            }

                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
