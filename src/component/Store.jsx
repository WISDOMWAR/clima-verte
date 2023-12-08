
export default function Store(){
    return(
        <div>
            <div className={"title"}>
                <h1>Store</h1>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="114" height="12" viewBox="0 0 114 12" fill="none">
                    <path d="M0 12L2.9071 0H114L111.924 12H0Z" fill="#257251"/>
                </svg>
            </div>
            <div className={"espace"}></div>
            <div className={"imgs"}>
                <div className={"product-container1"}>
                    <div>
                        <img className={"trottinet"} src={"/trottinet.jpeg"}/>
                        <p className={"prTrottinet"}>CENTAURO 2 ROAD <br /> APPROVED ELECTRIC <br /> SCOOTER 3000 WATTS <br /> LITHIUM</p>
                    </div>
                    <div>
                        <img className={"windgoo"} src={"/windgoo 1.png"}/>
                        <p className={"prwindgoo"}>Windgoo Foldable <br /> Electric Balance Bike <br /> Foldable Electric Bike- <br /> B3 Black</p>
                    </div>
                </div>
                <div className={"product-container2"}>
                    <div>
                        <img className={"scooter"} src={"/scooter-1.png"}/>
                        <p className={"prScooter"}>CITYCOCO 1500W <br /> approved electric  <br /> scooter</p>
                    </div>
                    <div>
                        <img className={"veloElectrique"} src={"/veloElectrique.png"}/>
                        <p className={"prVeloElectrique"}>INJUSA eBike 12" 24v</p>
                    </div>
                </div>
            </div>
            <div className={"btnContainer"}>
                <button className={'btnStore'}><p className={"textbtn"}>Go To Store</p></button>
            </div>

        </div>
    )
}