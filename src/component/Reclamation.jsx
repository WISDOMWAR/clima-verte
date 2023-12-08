export default function Reclamation () {
    return (
        <div className={"reclamation_container"}>
            <div className={"introduction"}>
                <h1 className={"reclamation_title"}>Reclamation</h1>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="258" height="12" viewBox="0 0 258 12" fill="none">
                        <path d="M0 12L6.57923 0H258L253.301 12H0Z" fill="#257251"/>
                    </svg>
                </div>
            </div>
            <form className={"reclamation_form"}>
                <div className={"name"}>
                    <label htmlFor="inputName" className={"labelname"}>Name:</label>
                    <input type="text" className="inputName" name="inputName" />
                </div>
                <div className={"LastName "}>
                    <label htmlFor="inputLastName" className={"labelLastname"}>Last Name:</label>
                    <input type="text" className="inputLastName" name="inputLastName" />
                </div>
                <div className={"email"}>
                    <label htmlFor="inputEmail" className={"labelemail"}>Email:</label>
                    <input type="email" className="inputEmail" name="inputEmail" />
                </div>
                <div className={"message"}>
                    <label htmlFor="inputMessage" className={"labelmessage"}>Message:</label>
                    <textarea id="inputMessage" name="inputMessage"></textarea>
                    <img className={"img"} src={"/Attach.png"} alt="Attachment" />
                    <button type="submit" className={"btnSend"}>send</button>
                </div>
            </form>
            <div>
                <img className={"AI_Image"} src={"/AI_Image 1.png"}/>
            </div>
        </div>
    )
}
