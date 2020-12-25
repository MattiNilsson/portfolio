import AboutCard from "./AboutCard";
import clouds from "../../../assets/svg/CloudsWhite.svg"

export default function About(){
    return(
        <section className="about-section">
            <div className="clouds-container">
                <img className="clouds" src={clouds}></img>
                <img className="clouds" src={clouds}></img>
            </div>
            <h1>About</h1>

            <h2>Hobbies</h2>
            <div className="card-holder">
                <AboutCard 
                    headline="Programming"
                    text="My biggest hobbie is programming. Not only frontend development stuff, but also games! I've created a couple of games in Unity using JavaScript and C#!"
                    icon="keyboard"
                />
                <AboutCard 
                    headline="Art"
                    text="Ever since I was a kid have I always loved creating art in any form. As I got older I got into making my art in Photoshop and Illustrator."
                    icon="brush"
                />
                <AboutCard 
                    headline="Music"
                    text="Although I don't really have time anymore I still enjoy making some tracks. I use FL-studio to create music whenever I got time to spare!"
                    icon="audiotrack"
                />
            </div>
            <h2>My Values & Strengths</h2>
            <div className="card-holder" style={{"margin-bottom": "0"}}>
                <AboutCard 
                    headline="Quality over quantity"
                    text="Whenever I am working on something I always want to exceed my own expectations and create something I will be proud of."
                    icon="military_tech"
                />
                <AboutCard 
                    headline="Focus on the end users"
                    text="I always stirve to focus on the user experience. Our main goal should always be the end user!"
                    icon="mood"
                />
                <AboutCard 
                    headline="Never enough"
                    text="I always have this feeling that there is still room for improvement. There is so much I have yet to learn, and that makes me excited!"
                    icon="psychology"
                />
            </div>
            <div id="section-1"></div>
            <div className="clouds-container rotate">
                <img className="clouds" src={clouds}></img>
                <img className="clouds" src={clouds}></img>
            </div>
        </section>
    )
}