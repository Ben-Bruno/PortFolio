// cspell:disable
import React from "react";
import ProjectCard from "../components/ProjectCard";

const Ia_MLComponent = () => {
    const projects = [
        {
            id: 1,
            title: "Application Mobile de Prédiction de Pluviométrie",
            subtitle: "DARIS SARL · Stage · Juin 2023 - Sept 2023 · 4 mois",
            description:
                "Application d’aide à la décision permettant de prédire la pluviométrie et d’identifier les périodes optimales de culture du maïs.",
            details: [
                "Collecte et nettoyage de données météorologiques",
                "Analyse exploratoire et prétraitement",
                "Conception de modèles de Machine Learning",
                "Évaluation des performances (RMSE, MAE)",
                "Visualisation et recommandations agricoles"
            ],
            technologies: [
                "Python",
                "Flutter",
                "FastAPI",
                "Pandas",
                "NumPy",
                "Scikit-learn",
                "Matplotlib",
                "Seaborn"
            ],
            images: ["img.png", "img.png", "img.png"],
            impact:
                "Amélioration de la planification agricole et aide à la prise de décision pour les producteurs.",
            githubLink: "https://github.com/username/project-ia"
        }
    ];

    const project = projects[0];

    return (
        <div className="page-container ia-page container-fluid">

            {/* TITRE */}
            <h1 className="page-title text-center text-orange mb-5">
                <i className="fas fa-brain"></i> Intelligence Artificielle & Machine Learning
            </h1>

            <div className="row justify-content-center g-4 mb-5">

                {/* DIV 1 */}
                <div className="col-md-4 animate-card">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title text-orange">Présentation</h4>
                            <p className="card-text">{project.description}</p>
                            <p className="text-muted">{project.subtitle}</p>
                        </div>
                    </div>
                </div>

                {/* DIV 2 */}
                <div className="col-md-4 animate-card delay-1">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title text-orange">Méthodologie</h4>
                            <ul>
                                {project.details.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* DIV 3 */}
                <div className="col-md-4 animate-card delay-2">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title text-orange">Technologies & Impact</h4>
                            <div className="mb-2">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="badge bg-dark me-1 mb-1">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <p className="mt-3">{project.impact}</p>
                        </div>
                    </div>
                </div>

            </div>


            {/* GALERIE */}
            <div className="project-gallery mb-5">
                <h3 className="mb-4">
                    <i className="fas fa-images"></i> Galerie du projet
                </h3>
                <div className="row g-3">
                    {project.images.map((img, index) => (
                        <div className="col-md-4" key={index}>
                            <img
                                src={`/assets/images/${img}`}
                                className="img-fluid rounded shadow-sm"
                                alt={`Screenshot ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* CODE SOURCE */}
            <div className="code-source-section text-center">
                <h3 className="mb-3">
                    <i className="fab fa-github"></i> Code Source
                </h3>
                <a
                    href={project.githubLink}
                    className="btn btn-dark me-2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-github"></i> GitHub
                </a>
                <button className="btn btn-outline-secondary me-2">
                    <i className="fas fa-book"></i> Documentation
                </button>
                <button className="btn btn-outline-secondary">
                    <i className="fas fa-download"></i> Rapport
                </button>
            </div>
        </div>
    );
};

export default Ia_MLComponent;
