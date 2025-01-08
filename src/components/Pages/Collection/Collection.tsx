import { ReactElement } from "react";
import Contacts from "../../Contacts/Contacts";
import CollectionList from "./CollectionList/CollectionList";
import CollectionInfo from "./CollectionInfo/CollectionInfo";

function Collection(): ReactElement {
    return (
        <main>
            <CollectionInfo />
            <CollectionList />
            <Contacts />
        </main>
    )
}

export default Collection;