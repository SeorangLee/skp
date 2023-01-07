import styled from "styled-components";
import { FlexCenter, FlexColumnCenter } from "../../styles/components/layout";
import { generateKey } from "../../util";
import { historyContents } from "./const";
import styles from "./History.module.scss";

const HistoryContents = styled(FlexCenter)`
  flex-wrap: wrap;
  margin-top: 3vw;
  .history_content {
    min-width: 200px;
    height: 15vw;
    gap: 1vw;
    padding-top: 2vw;
    color: #02073e;
    .date {
      font-size: 2.3vh;
      text-align: center;
      font-weight: 600;
      margin: 1vw;
    }
    .content {
      font-size: 1.5vh;
      margin-top: 2vw;
      line-height: 170%;
      text-align: center;
    }
  }
`;

const HistoryContentsComponent = () => {
  return (
    <FlexColumnCenter className={styles.history_container + ' bg-white w-100'}>
      <div>주요 연혁</div>
      <HistoryContents className={styles.history_contents_container}>
        {generateKey(historyContents).map(content => (
          <div key={content.key} className='history_content'>
            <div className="date">{content.date}</div>
            <div className="content">{content.content}</div>
          </div>
        ))}
      </HistoryContents>
    </FlexColumnCenter>
  );
}

export default HistoryContentsComponent;