export default function projects(props) {
    const { projects } = props;

    return (
        <div>
            <div className="container text-center mt-2">
                <div className="row">
                    {projects.map((project, index) => (
                        <>
                            <div
                                key={index}
                                className={
                                    project.static
                                        ? `col-sm-3 mx-0 gx-0 middle ${project.bg} `
                                        : `col-sm-9 mx-0 gx-0 prime ${project.bg}`
                                }
                            >
                                <div
                                    className={`card text-white middle ${project.bg} `}
                                    style={{
                                        height: '10rem',
                                        borderRadius: '0',
                                        border: 'none',
                                    }}
                                >
                                    {project.img && (
                                        <img
                                            src={project.img}
                                            className="card-img"
                                            alt={project.name}
                                            style={{
                                                maxWidth: '100%',
                                                maxHeight: '100%',
                                                filter: 'opacity(80%)',
                                            }}
                                        />
                                    )}

                                    <div className="card-img-overlay middle">
                                        {project.url && (
                                            <a
                                                className="btn btn-outline"
                                                href={`${project.url}`}
                                                target="_blank"
                                            >
                                                <h5
                                                    className="card-title fw-bold "
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    {project.name}
                                                </h5>
                                            </a>
                                        )}

                                        <p className="px-3 fw-bold pt-2">
                                            {project.description}
                                        </p>

                                        {project.git && (
                                            <a
                                                href={`${project.git}`}
                                                target="_blank"
                                            >
                                                <i className="fab fa-github fs-4"></i>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div
                                key={index}
                                className={
                                    project.static
                                        ? `col-sm-9 mx-0 gx-0 prime  ${project.bg}`
                                        : ` col-sm-3 mx-0 gx-0 ${project.bg}`
                                }
                            >
                                <div
                                    className={`card  text-white middle ${project.bg}`}
                                    style={{
                                        height: '10rem',
                                        borderRadius: '0',
                                        border: 'none',
                                    }}
                                >
                                    {project.img2 && (
                                        <img
                                            src={project.img2}
                                            className="card-img"
                                            alt={project.name2}
                                            style={{
                                                maxWidth: '100%',
                                                maxHeight: '100%',
                                                filter: 'opacity(80%)',
                                            }}
                                        />
                                    )}

                                    <div className="card-img-overlay middle">
                                        {project.url2 && (
                                            <a
                                                className="btn btn-outline"
                                                href={`${project.url2}`}
                                                target="_blank"
                                            >
                                                <h5
                                                    className="card-title fw-bold "
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    {project.name2}
                                                </h5>
                                            </a>
                                        )}

                                        <p className="px-3 fw-bold pt-2">
                                            {project.description2}
                                        </p>

                                        {project.git2 && (
                                            <a
                                                href={`${project.git2}`}
                                                target="_blank"
                                            >
                                                <i className="fab fa-github fs-4"></i>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}
