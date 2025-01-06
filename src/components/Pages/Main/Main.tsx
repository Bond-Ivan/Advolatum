import { ReactElement } from "react";
import Info from "./Info/Info";
import Season from "./Season/Season";
import Actual from "./Actual/Actual";
import Contacts from "../../Contacts/Contacts";

function Main(): ReactElement {
    return (
        <main>
            <div>
                <Info />
                <Season />
                <Actual />
                <Contacts />
            </div>
        </main>
    )
}

export default Main;