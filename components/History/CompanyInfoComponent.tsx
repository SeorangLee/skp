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

interface Prop {
  companyInfo: Record<string, string>
}

const CompanyInfoComponent = ({ companyInfo }: Prop) => {
  const array = Object.keys(companyInfo);
  return (
    <CompanyInfo>
      <div>
        <KeyValueGrid className="bg-white key-value">
          {array.map(key => <>
            <div>{key}</div>
            <div>{companyInfo[key]}</div>
          </>)}
        </KeyValueGrid>
      </div>
    </CompanyInfo>
  )
};

export default CompanyInfoComponent;
