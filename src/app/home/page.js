import "./styles.css"
import Reclamation from "@/component/Reclamation";
import Store from "@/component/Store";
export default function Page() {
    return(
        <div className={"container"}>
            <div className={"titlepa"}>
                <div className={"title"}>
                    <h1><span>Think positive</span>
                        <span>about our Climate</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="114" height="12" viewBox="0 0 114 12" fill="none" style={{marginLeft:200}}>
                            <path d="M0 12L2.9071 0H114L111.924 12H0Z" fill="#257251"/>
                        </svg>
                    </h1>

                </div>
                <div className="separator"></div>
                <div className={"description"}>
                    <p>
                        Climate change refers to long-term alterations in the Earth's climate<br />
                        patterns, encompassing shifts in temperature, precipitation, and other <br /> atmospheric conditions.
                        Human activities, notably the burning of <br /> fossil fuels and deforestation,
                        have significantly contributed to the <br />increase in greenhouse gas
                        concentrations, such as carbon dioxide, in<br /> the atmosphere.
                    </p>

                </div>
            </div>
            <Store/>
            <Reclamation/>
            <div className={"descriptionElectrique"}>
                <h1 className={"titleElectrique"}>
                    Electric transportation aims to mitigate the environmental impact of the transportation sector.
                </h1>
                <p className={"pElectrique "}>
                    By opting for electricity as the primary energy source, these vehicles contribute to reducing greenhouse gas emissions, thereby improving air quality and decreasing dependence on fossil fuels. This transition also promotes energy efficiency, drives technological innovation, and aligns with sustainable development goals by advocating for the use of renewable energy sources. Transportation methods, such as cycling or walking, can reduce the costs associated with owning and maintaining a motorized vehicle, while also contributing to better physical health. By favoring transportation modes that use less or no fossil fuels, there is a contribution to reducing dependence on non-renewable energy sources.
                </p>
            </div>


        </div>
    )
}