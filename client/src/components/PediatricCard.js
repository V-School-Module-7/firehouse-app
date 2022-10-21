import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import SearchBar from "./SearchBar";
import styled from "styled-components";
import pedcardstyle from "../pedcardstyle.css"


const ProtocolsWrapper = styled.div``;
const SearchBarProtocols = styled(SearchBar)``;

export default function PediatricCard() {
    let {id} = useParams();
    let newId = id.slice(1)
    console.log("newId", newId)

    const [cardData, setCardData] = useState([])
    

// get one request
// useeffect call for getOne from the _id from useParams
useEffect(() => {
    axios.get(`/pediatric/${newId}`)
      .then((res) => setCardData(res.data))
      .catch(err => console.log(err))
      console.log("triggered")
    }, [newId]);

    console.log("carddata:", cardData)

  

  return (
    <>  
    <ProtocolsWrapper>
        <SearchBarProtocols />
      <div className="card">
        <div className="banner"></div>
      <h1>Vital Signs</h1>
        <div className="card-data">
          <div className="data-title">Heart Rate</div>
          <div>{cardData.vitalSigns?.heartRate}</div>
          <div className="data-title">Blood Pressure</div>
          <div>{cardData.vitalSigns?.bloodPressure}</div>
          <div className="data-title">Respiratory Rate</div>
          <div>{cardData.vitalSigns?.respiratoryRate}</div>
          <div className="data-title">Tidal Volume</div>
          <div>{cardData.vitalSigns?.tidalVolume}</div>
          <div className="data-title">Urine Output</div>
          <div>{cardData.vitalSigns?.urineOutput}</div>
        </div>
      </div>
      <div className="card">
        <div className="banner"></div>
      <h1>Airway Equipment</h1>
        <div className="card-data">
          <div className="data-title">ET Tube Cuffed</div>
          <div>{cardData.airwayEquipment?.ETTubeCuffed}</div>
          <div className="data-title">Insertion Length</div>
          <div>{cardData.airwayEquipment?.cuffedInsertionLength}</div>
          <div className="data-title">ET Tube Uncuffed</div>
          <div>{cardData.airwayEquipment?.ETTubeUncuffed}</div>
          <div className="data-title">Laryngoscope</div>
          <div>{cardData.airwayEquipment?.Laryngoscope}</div>
          <div className="data-title">BVM</div>
          <div>{cardData.airwayEquipment?.BVM}</div>
          <div className="data-title">oxygen Mask</div>
          <div>{cardData.airwayEquipment?.oxygenMask}</div>
          <div className="data-title">NP Airway</div>
          <div>{cardData.airwayEquipment?.NPAirway}</div>
          <div className="data-title">LMA</div>
          <div>{cardData.airwayEquipment?.LMA}</div>
          <div className="data-title">NG/OG</div>
          <div>{cardData.airwayEquipment?.NGOG}</div>
        </div>
      </div>
      <div className="card">
        <div className="banner"></div>
      <h1>Defibrillation</h1>
        <div className="card-data">
          <div className="data-title">Defibrillation 1st Dose</div>
          <div>{cardData.defibrillation?.defib1stDose}</div>
          <div className="data-title">Defibrillation 2nd Dose</div>
          <div>{cardData.defibrillation?.defib2ndDose}</div>
          <div className="data-title">Defibrillation Subsequent Dose</div>
          <div>{cardData.defibrillation?.defibSubDose}</div>
        </div>
      </div>
      <div className="card">
        <div className="banner"></div>
      <h1>Cardioversion</h1>
        <div className="card-data">
          <div className="data-title">Cardioversion 1st Dose</div>
          <div>{cardData.cardioversion?.cardioversion1stDose}</div>
          <div className="data-title">Blood Pressure</div>
          <div>{cardData.cardioversion?.cardioversionSubDose}</div>
          <div className="data-title">Respiratory Rate</div>
          <div>{cardData.cardioversion?.adenosine1stDose}</div>
          <div className="data-title">Amiodarone</div>
          <div>{cardData.cardioversion?.amidarone}</div>
          <div className="data-title">Procainamide</div>
          <div>{cardData.cardioversion?.Procainamide}</div>
          <div className="data-title">calcium Chloride</div>
          <div>{cardData.cardioversion?.calciumChloride}</div>
          <div className="data-title">Magnesium Sulfate</div>
          <div>{cardData.cardioversion?.MagnesiumSulfate}</div>
        </div>
      </div>
      <div className="card">
        <div className="banner"></div>
      <h1>Anaphylaxis</h1>
        <div className="card-data">
          <div className="data-title">Diphenhydramine</div>
          <div>{cardData.Anaphylaxis?.diphenhydramine}</div>
          <div className="data-title">Epinephrine 1:1000 IM/SC</div>
          <div>{cardData.Anaphylaxis?.epinephrineIMSC}</div>
          <div className="data-title">Epinephrine 1:10,000 IV</div>
          <div>{cardData.Anaphylaxis?.epinephrineIV}</div>
        </div>
      </div>
      <div className="card">
        <div className="banner"></div>
      <h1>hypoglycemia</h1>
        <div className="card-data">
          <div>{cardData.hypoglycemia?.mgDL}</div>
          <div className="data-title">D10 IV</div>
          <div>{cardData.hypoglycemia?.D10IV}</div>
          <div className="data-title">D25 IV</div>
          <div>MISSING ON MONGODB</div>
          <div className="data-title">D50 IV</div>
          <div>{cardData.hypoglycemia?.D50IV}</div>
          <div className="data-title">Glucagon IM/SC/IV</div>
          <div>{cardData.hypoglycemia?.glucagonIMSCIVL}</div>
        </div>
      </div>
    </ProtocolsWrapper>
    </>
  )
}
