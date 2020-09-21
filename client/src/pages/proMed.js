import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';

const MedicalWrapper = styled.div ``;
const SearchBarMedical = styled(SearchBar)``;
const ButtonsContainer = styled.div`
display: grid;
  grid-template-columns: 154px 154px;
  grid-auto-rows: auto;
  grid-gap: 20px;
  width: 100vw;
  margin: 16px auto 0px auto;
  justify-content: center;
  `;

  function Medical(props) {
      const ButtonInfo = [
          { name: '1. Medical Patient Care Guidelines', path: '/protocols/medical', icon: null },
          { name: '2. Allergic Reaction/Anaphylaxis', path: '/protocols/medical', icon: null },
          { name: '3. Children with Special Healthcare Needs', path: '/protocols/medical', icon: null },
          { name: '4. Drowning or Submersion', path: '/protocols/medical', icon: null },
          { name: '5. Fever Management', path: '/protocols/ medical', icon: null },
          { name: '6. Glucose Emergencies: Hypoglycemia/Hyperglycemia', path: '/protocols/medical', icon: null },
          { name: '7. Immunocompromised Patients', path: '/protocols/medical', icon: null },
          { name: '8. Obstetrical Emergencies', path: '/protocols/medical', icon: null },
          { name: '9. Overdose', path: '/protocols/medical', icon: null },
          { name: '10. Respiratory Distress', path: '/protocols/medical', icon: null },
          { name: '11. Seizures', path: '/protocols/medical', icon: null },
          { name: '12. Stroke or Neuro Deficits', path: '/protocols/medical', icon: null },
          { name: '13. Tempurature and Environmental Emergencies', path: '/protocols/medical', icon: null },
          { name: '14. Toxic Exposure - Carbon Monoxide/Smoke Exposure', path: '/protocols/medical', icon: null },
          { name: '15. Toxic Exposure - Cyanide', path: '/protocols/medical', icon: null },
          { name: '16. Toxic Exposure - Hydrofluoric Acid', path: '/protocols/medical', icon: null },
          { name: '17. Toxic Exposure - Organophosphates/Nerve Agents', path: '/protocols/medical', icon: null },
          { name: '18. Violent Patient/Chemical Sedation', path: '/protocols/medical', icon: null }
      ];

      const displayButtons = ButtonInfo.map((buttonInfo, index) => {
         return <Button
          key={buttonInfo + index}
          text={buttonInfo.name}
          path={buttonInfo.path} />
      });

      return (
          <MedicalWrapper>
              <SearchBarMedical />
              <ButtonsContainer>{displayButtons}</ButtonsContainer>
          </MedicalWrapper>
      );
  }

  export default Medical;