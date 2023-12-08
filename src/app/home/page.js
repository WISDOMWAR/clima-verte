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
                        Climate change refers to long-term alterations in the Earth's climate
                        patterns, encompassing shifts in temperature, precipitation, and
                        other atmospheric conditions.<br />
                        Human activities, notably the burning of fossil fuels and deforestation,
                        have significantly contributed to the increase in greenhouse gas
                        concentrations, such as carbon dioxide, in the atmosphere.
                    </p>

                </div>
            </div>
            <Reclamation/>
        </div>
    )
}