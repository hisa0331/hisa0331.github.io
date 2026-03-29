export default function About() {
  return (
    <>
      <div id="node-1" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none', background: '#f0f4f8' }}></div>
      
      <main role="main" id="page1" className="is-visible" style={{ position: 'relative', zIndex: 10 }}>
        <section className="page">
          <h1 className="page-title">About</h1>
          <p>Hisatoshi Naganawa - Portfolio Website</p>
        </section>
      </main>
    </>
  );
}

export default function About() {
    const containerRef = useRef(null);
    const p5InstanceRef = useRef(null);

    useEffect(() => {
        const sketch = (p) => {
            const scl = 30;
            const w = 1800;
            const h = 1500;
            let cols, rows;
            let terrain = [];
            let flying = 0;

            p.setup = () => {
                const canvasContainer = document.getElementById("node-1");
                const canvas = p.createCanvas(
                    canvasContainer.clientWidth,
                    canvasContainer.clientHeight,
                    p.WEBGL,
                );
                canvas.parent("node-1");

                cols = Math.floor(w / scl);
                rows = Math.floor(h / scl);
                terrain = Array.from({ length: cols }, () =>
                    Array(rows).fill(0),
                );
            };

            p.draw = () => {
                flying -= 0.01;
                let yoff = flying;

                for (let y = 0; y < rows; y++) {
                    let xoff = 0;
                    for (let x = 0; x < cols; x++) {
                        terrain[x][y] = p.map(
                            p.noise(xoff, yoff),
                            0,
                            1,
                            -100,
                            100,
                        );
                        xoff += 0.2;
                    }
                    yoff += 0.2;
                }

                const isDarkMode =
                    document.body.classList.contains("night-mode");
                const bgColor = isDarkMode ? 20 : p.color("#f0f4f8");
                const lineColor = isDarkMode
                    ? p.color("#88bbee")
                    : p.color("#6699cc");

                p.background(bgColor);
                p.stroke(lineColor);
                p.noFill();

                p.push();
                p.rotateX(p.PI / 2.5);
                p.rotateZ(0.1);
                p.translate(-w / 2, -h / 2);

                for (let y = 0; y < rows - 1; y++) {
                    p.beginShape(p.TRIANGLE_STRIP);
                    for (let x = 0; x < cols; x++) {
                        p.vertex(x * scl, y * scl, terrain[x][y]);
                        p.vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
                    }
                    p.endShape();
                }
                p.pop();
            };

            p.windowResized = () => {
                const canvasContainer = document.getElementById("node-1");
                if (
                    canvasContainer &&
                    p.windowWidth > 0 &&
                    p.windowHeight > 0
                ) {
                    p.resizeCanvas(
                        canvasContainer.clientWidth,
                        canvasContainer.clientHeight,
                    );
                }
            };
        };

        if (containerRef.current) {
            p5InstanceRef.current = new p5(sketch);
        }

        return () => {
            if (p5InstanceRef.current) {
                p5InstanceRef.current.remove();
            }
        };
    }, []);

    return (
        <>
            <div
                id="node-1"
                role="presentation"
                aria-hidden="true"
                ref={containerRef}
            ></div>

            <main role="main" id="page1" className="is-visible">
                <section className="page">
                    <h1 className="page-title">About</h1>

                    {/* Profile Header */}
                    <div className="profile-header">
                        <div className="profile-image">👨‍🔬</div>
                        <div className="profile-info">
                            <h2>Hisatoshi Naganawa</h2>
                            <p className="profile-title">
                                Research Fellow @ Kobe University
                            </p>
                            <p className="profile-description">
                                Research Fellow at Kobe University's Computing
                                Science Center. Engaged in research on machine
                                learning and computational science.
                            </p>

                            {/* Social Links */}
                            <div className="social-links">
                                <a
                                    href="https://www.linkedin.com/in/hisatoshi-naganawa0331/?locale=ja"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    title="LinkedIn"
                                >
                                    <img
                                        src="/img/linkedin-icon.svg"
                                        alt="LinkedIn"
                                    />
                                </a>
                                <a
                                    href="https://orcid.org/0009-0009-3023-8080"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    title="ORCID"
                                >
                                    <img src="/img/ORCID_iD.svg" alt="ORCID" />
                                </a>
                                <a
                                    href="https://github.com/hisa0331"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    title="GitHub"
                                >
                                    <img
                                        src="/img/github-icon.svg"
                                        alt="GitHub"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Experience Section */}
                    <section className="experience-section">
                        <h3>Experience</h3>
                        <div className="experience-item">
                            <h4>Research Fellow</h4>
                            <p className="period">
                                Kobe University Computing Science Center |
                                Present
                            </p>
                            <p>
                                Conducting research and development in machine
                                learning, writing original research papers, and
                                presenting at international conferences.
                            </p>
                        </div>
                    </section>

                    {/* Education Section */}
                    <section className="experience-section">
                        <h3>Education</h3>
                        <div className="experience-item">
                            <h4>Doctor of Engineering</h4>
                            <p className="period">
                                Kobe University, Graduate School of Engineering
                                | Completed
                            </p>
                            <p>Conducted research in computational science.</p>
                        </div>
                        <div className="experience-item">
                            <h4>Master of Engineering</h4>
                            <p className="period">
                                Kobe University, Graduate School of Engineering
                                | Completed
                            </p>
                            <p>
                                Focused on applied mathematics and computational
                                science.
                            </p>
                        </div>
                    </section>

                    {/* Skills Section */}
                    <section className="experience-section">
                        <h3>Skills</h3>
                        <div className="features">
                            <div className="feature-item">
                                <h4>🔬 Research Development</h4>
                                <p>
                                    Specializing in machine learning and
                                    computational science, conducting academic
                                    research, writing papers, and presenting at
                                    international conferences.
                                </p>
                            </div>
                            <div className="feature-item">
                                <h4>💻 Web Development</h4>
                                <p>
                                    Creating user-centric websites using
                                    HTML/CSS/JavaScript with focus on responsive
                                    design and interactive experiences.
                                </p>
                            </div>
                            <div className="feature-item">
                                <h4>🎨 Design</h4>
                                <p>
                                    From UI design to 3D visualization,
                                    implementing visually sophisticated and
                                    interactive website designs with modern
                                    aesthetics.
                                </p>
                            </div>
                            <div className="feature-item">
                                <h4>📊 Data Analysis</h4>
                                <p>
                                    Supporting decision-making through analysis
                                    and visualization of large-scale data with
                                    statistical insights.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Related Institutions */}
                    <section className="experience-section">
                        <h3>Related Research Institutions</h3>
                        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                            <li style={{ marginBottom: "10px" }}>
                                <span style={{ marginRight: "10px" }}>・</span>
                                <a
                                    href="https://www.maritime.kobe-u.ac.jp/imarc/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: "#6699cc",
                                        textDecoration: "underline",
                                    }}
                                >
                                    International Maritime Research Center
                                    (IMARC)
                                </a>
                            </li>
                            <li style={{ marginBottom: "10px" }}>
                                <span style={{ marginRight: "10px" }}>・</span>
                                <a
                                    href="https://www.picenter.gatech.edu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: "#6699cc",
                                        textDecoration: "underline",
                                    }}
                                >
                                    The Pi Center
                                </a>
                            </li>
                            <li style={{ marginBottom: "10px" }}>
                                <span style={{ marginRight: "10px" }}>・</span>
                                <a
                                    href="https://eng.unimelb.edu.au/industry/transport/research/freight-and-city-logistics"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: "#6699cc",
                                        textDecoration: "underline",
                                    }}
                                >
                                    Freight and City Logistics Research
                                </a>
                            </li>
                            <li>
                                <span style={{ marginRight: "10px" }}>・</span>
                                <a
                                    href="https://www.ehirata.com/home"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: "#6699cc",
                                        textDecoration: "underline",
                                    }}
                                >
                                    E. Hirata Research
                                </a>
                            </li>
                        </ul>
                    </section>
                </section>
            </main>
        </>
    );
}
