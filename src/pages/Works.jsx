export default function Works() {
    const worksData = [
        {
            id: 1,
            title: "Machine Learning Optimization",
            period: "2023 - Present",
            description:
                "Research on advanced optimization algorithms in machine learning.",
            technologies: ["Python", "TensorFlow", "PyTorch"],
        },
        {
            id: 2,
            title: "Computational Fluid Dynamics",
            period: "2020 - 2023",
            description:
                "Development of computational methods for fluid dynamics simulation.",
            technologies: ["C++", "OpenFOAM", "MATLAB"],
        },
        {
            id: 3,
            title: "Data Visualization Platform",
            period: "2021 - 2022",
            description:
                "Web-based platform for interactive scientific data visualization.",
            technologies: ["React", "D3.js", "Node.js"],
        },
        {
            id: 4,
            title: "Research Portfolio Website",
            period: "2024",
            description:
                "Interactive portfolio website with 3D visualization using p5.js.",
            technologies: ["React", "p5.js", "Vite"],
        },
    ];

    return (
        <main role="main" className="is-visible">
            <h1 className="page-title">Works</h1>
            <p className="page-subtitle">プロジェクト実績と研究成果</p>

            <ul className="works-list">
                {worksData.map((work) => (
                    <li key={work.id} className="works-list__item">
                        <article className="work-card">
                            <div className="work-card__content">
                                <h3>{work.title}</h3>
                                <div className="work-card__meta">
                                    <div className="work-card__meta-item">
                                        <span className="work-card__meta-label">
                                            Period
                                        </span>
                                        <span className="work-card__meta-value">
                                            {work.period}
                                        </span>
                                    </div>
                                </div>
                                <div className="work-card__description">
                                    <p>{work.description}</p>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "8px",
                                        marginTop: "15px",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    {work.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            style={{
                                                display: "inline-block",
                                                padding: "4px 12px",
                                                backgroundColor: "#6699cc",
                                                color: "#ffffcc",
                                                borderRadius: "4px",
                                                fontSize: "0.85rem",
                                                fontWeight: "500",
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </main>
    );
}
