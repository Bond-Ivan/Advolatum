import { ReactElement } from "react";
import Info from "./Info/Info";
import Season from "./Season/Season";
import Actual from "./Actual/Actual";
import Contacts from "../../Contacts/Contacts";

function Main(): ReactElement {
    return (
        <main>
            <Info />
            <Season />
            <Actual />
            <Contacts />
        </main>
    )
}

export default Main;