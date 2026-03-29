import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        // Simple validation
        if (
            !formData.name ||
            !formData.email ||
            !formData.subject ||
            !formData.message
        ) {
            setError("All fields are required");
            return;
        }

        // Simple email validation
        if (!formData.email.includes("@")) {
            setError("Please enter a valid email address");
            return;
        }

        // Here you would typically send the form data to a server
        console.log("Form submitted:", formData);
        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 3000);
    };

    return (
        <main role="main" className="is-visible">
            <h1 className="page-title">Contact</h1>
            <p className="page-subtitle">
                何かご質問やご依頼がありましたら、以下のフォームからお気軽にお問い合わせください。
            </p>

            <form className="form" onSubmit={handleSubmit}>
                <div className="form__group">
                    <label className="form__label" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="form__input"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                    />
                </div>

                <div className="form__group">
                    <label className="form__label" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="form__input"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                    />
                </div>

                <div className="form__group">
                    <label className="form__label" htmlFor="subject">
                        Subject
                    </label>
                    <input
                        className="form__input"
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                    />
                </div>

                <div className="form__group">
                    <label className="form__label" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="form__textarea"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                    ></textarea>
                </div>

                {error && (
                    <div
                        style={{
                            color: "#e74c3c",
                            fontSize: "0.9rem",
                            marginBottom: "10px",
                        }}
                    >
                        {error}
                    </div>
                )}

                <button type="submit" className="form__button">
                    Send Message
                </button>

                {submitted && (
                    <div
                        style={{
                            padding: "12px",
                            backgroundColor: "#d4edda",
                            color: "#155724",
                            borderRadius: "4px",
                            textAlign: "center",
                            animation: "slideIn 0.3s ease",
                        }}
                    >
                        Thank you! Your message has been sent successfully.
                    </div>
                )}
            </form>
        </main>
    );
}
