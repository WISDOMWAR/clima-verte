import "./style.css"
export default function Page() {
    return (
        <div className={"container"}>
            <div className={"header"}>
                <div className={"imgContainer"}>
                    <img src={"/earth.png"} className={"earth"}/>
                </div>
                <div className={"ClimateChange"}>
                    <h1 className={"title"}>Climate change</h1>
                    <p className={"prClimat"}>Climate change refers to long-term alterations in the Earth's climate patterns, encompassing shifts in temperature, precipitation, and other atmospheric conditions. Human activities, notably the burning of fossil fuels and deforestation, have significantly contributed to the increase in greenhouse gas concentrations, such as carbon dioxide,
                        in the atmosphere. These gases trap heat, leading to a warming of the planet and a cascade of effects. The
                        consequences of climate change include rising sea levels, extreme weather events, disruptions to ecosystems, and threats
                        to biodiversity. </p>
                </div>
            </div>
            <div className={"ClimateChangeContainer"}>
                <div>
                    <h1 className={"titleClimate"}>Climate change Problems:</h1>
                </div>
                <div>
                    <p className={"prClimate"}>
                        Climate change poses a range of serious global challenges. Global warming,
                        leading to extreme weather events, disrupts ecosystems and threatens biodiversity.
                        Rising sea levels jeopardize coastal areas and island communities. Variations in
                        precipitation patterns cause floods and droughts, impacting agriculture and food security.
                        Ocean acidification puts marine ecosystems at risk. These changes also have implications for human health,
                        increasing the risks of health issues and population displacement.
                        Addressing these challenges requires global actions, including reducing greenhouse gas emissions
                        and adopting sustainable practices on a worldwide scale.
                    </p>
                </div>
                <div className={"imgs"}>
                    <div className={"img1"}>
                        <img src={"/pr1.png"} className={"pr1"}/>
                    </div>
                    <div className={"img2"}>
                        <img src={"/pr2.png"} className={"pr2"}/>
                    </div>
                </div>
                <div className={"SolutionContainer"}>
                    <h1 className={"titleSolution"}>Solutions:</h1>
                    <p className={"prSolution"}>Addressing climate change requires diverse and coordinated solutions. Transitioning to renewable energies,
                        such as solar and wind power, helps reduce greenhouse gas emissions. Improving energy efficiency,
                        adopting sustainable agricultural practices, and protecting forests also contribute to mitigating impacts.
                        Sustainable water management and promoting public transport and electric vehicles are crucial components. Technological innovation,
                        public education, and effective environmental policies play key roles in fostering lasting change. Simultaneously, adapting to climate change with resilient measures and adaptive infrastructure is essential to confront inevitable challenges. Global collaboration is critical to ensuring the success of
                        these solutions and building a more sustainable future.</p>
                </div>
                <div className={"imgsSolution"}>
                    <img src={"/s1.png"} className={"s1"}/>
                    <img src={"/s2.png"}  className={"s2"}/>
                    <img src={"/s3.png"} className={"s3"}/>
                    <img src={"/s4.png"}  className={"s4"}/>
                    <img src={"/s5.png"}  className={"s5"}/>
                </div>
            </div>
        </div>
    )

}