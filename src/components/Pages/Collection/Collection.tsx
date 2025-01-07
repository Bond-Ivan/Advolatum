import { ReactElement } from "react";
import Contacts from "../../Contacts/Contacts";
import CollectionList from "./CollectionList/CollectionList";

function Collection(): ReactElement {
    return (
        <main>
            <CollectionList />
            <Contacts />
        </main>
    )
}

export default Collection;