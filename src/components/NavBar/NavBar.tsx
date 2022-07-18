import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { FC } from "react";
import "./style.css"

export const NavBar: FC = () => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>
                    Kr Portal Scrap
                </IonTitle>
            </IonToolbar>
        </IonHeader>
    );
}