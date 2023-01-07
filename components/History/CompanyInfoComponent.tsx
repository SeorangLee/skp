import styled from "styled-components";
import { FlexCenter, KeyValueGrid } from "../../styles/components/layout";

const CompanyInfo = styled(FlexCenter)`
  padding: 5vw;
  .key-value {
    grid-template-columns: 1fr 4fr;
    font-size: 2vh;
    padding: 5vw;
  }
`;

const CompanyInfoComponent = (obj: Record<string, string>) => {
  const array = Object.keys(obj);
  return (
    <CompanyInfo>
      <div>
        <KeyValueGrid className="bg-white key-value">
          {array.map(key => <>
            <div>{key}</div>
            <div>{obj[key]}</div>
          </>)}
        </KeyValueGrid>
      </div>
    </CompanyInfo>
  )
}

export default CompanyInfoComponent;