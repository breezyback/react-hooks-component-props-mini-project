function About({ image, about }) {
    const src = "https://via.placeholder.com/215";
    return (
        <aside>
            <img src={ image ? image : src} alt={"blog logo"} />
            <p>{ about }</p>
        </aside>
    );
}

export default About;