import Attach from "../../public/Attach.png";

export default function Reclamation () {
    return (
        <div className={"reclamation_container"}>
            <h1>Reclamation</h1>
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
                    <img className={"img"} src={Attach} alt="Attachment" />
                    <button type="submit" className={"btnSend"}>send</button>
                </div>
            </form>
        </div>
    )
}
