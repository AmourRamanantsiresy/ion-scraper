import { FC, useEffect, useState } from "react";
import { Body } from "../components/Body/Body";
import { Footer } from "../components/Footer/Footer";
import { NavBar } from "../components/NavBar/NavBar";
import { ISecondaryData } from "../components/Interfaces/PrincipalInterface";
import { networkCheck, request } from "../components/functions/request";
import { IonPage } from "@ionic/react";
import { Loading } from "../components/Loading/Loading";
import "./styles.css"
//Initialization page 
const Page: FC = () => {

  const [values, setValues] = useState<ISecondaryData | null>(null);
  const [page, setPage] = useState<number>(1);
  const [status, setStatus] = useState<boolean | null>(null);
  const [statusn, setStatusn] = useState<boolean>(false)

  useEffect(() => {
    networkCheck(setStatus, status);
    if (values === null) {
      request(1, setValues, setPage, setStatusn);
    }
  });

  const change = (page: number) => {
    setStatusn(true);
    request(page, setValues, setPage, setStatusn);
  }

  const req2 = (page: number): void => request(page, setValues, setPage, setStatusn)

  return (
    !status ?
      <IonPage>
        <p className="display-6 text-light check">Please check your connexion</p>
        <Loading />
      </IonPage>
      :
      <IonPage>
        <NavBar />
        {
          values === null || statusn ?
            <Loading /> :
            <Body values={values?.information} />
        }
        <Footer last_index={values?.last_page || 0} change={change} page={page} />
      </IonPage>
  );
};

//<Body values={values?.information} />





export default Page;