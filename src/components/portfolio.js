import React from 'react';
import Grove from "../images/Grove.png";
import MovieP from "../images/movieproject.png";
import noteTaker from "../images/NoteTaker.png";
import fitness from "../images/fitness.png";
import textEditor from "../images/textEditor.png";
import Weather from "../images/weather.png";

console.log("made it to the portfolio.js file")
function Portfolio () {

    let proj = [{
        "name": "Movie Reader Site",
        "deployed": "https://lapshaffer.github.io/MovieReaderProject/",
        "github": "https://github.com/lapshaffer/MovieReaderProject",
        "image": MovieP
    }, {
        "name": "Note Taker",
        "deployed": "https://glacial-hollows-95904.herokuapp.com/",
        "github": "https://github.com/kingcrowz/NoteTaker",
        "image": noteTaker
    }, {
        "name": "Fitness Tracker",
        "deployed": "https://aqueous-reef-37142.herokuapp.com/",
        "github": "https://github.com/kingcrowz/Fitness-Tracker",
        "image": fitness
    }, {
        "name": "Text Editor",
        "deployed": "https://dry-garden-12108.herokuapp.com/",
        "github": "https://github.com/kingcrowz/Text-Editor",
        "image": textEditor
    }, {
        "name": "Weather Dashboard",
        "deployed": "https://kingcrowz.github.io/Weather-Dashboard/",
        "github": "https://github.com/kingcrowz/Weather-Dashboard",
        "image": Weather
    }]

    return (<section id="projSection">
    <h2>Projects</h2>
    <p>click the panel to view the deployed application</p>
    <p>click the world github in the corresponding panel to be directed to it's repository</p>
    <section id="fixed-site" className="search-engine-optimization">
        <li><a href="https://obscure-ocean-20287.herokuapp.com/">Sustainability Reviews<img className='project-img' src={Grove} alt='sustainability reviews'/></a></li>
        <li><a href="https://github.com/lapshaffer/SustainableReviewsProject">Github</a></li>

    </section>
    <div className="row-section">
        {proj.map((project) => (
            <section className="search-engine-optimization" id="search-engine-optimization">
            <li><a href={project.deployed}>{project.name}<img src={project.image} alt={project.name}/></a></li>
            {/* <li></li> */}
            <li><a href={project.github}>Github</a></li>
            <p>
            </p>
        </section>
        ))}
    {/* <section id="online-reputation-management" class="search-engine-optimization">
        <li><a href="https://glacial-hollows-95904.herokuapp.com/">Note Taker</a></li>
        <li><a href="https://github.com/kingcrowz/NoteTaker">Github</a></li>
        <p>
        </p>
    </section> */}
</div>
</section>)
}



export default Portfolio;