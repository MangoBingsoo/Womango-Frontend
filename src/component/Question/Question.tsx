import { DATA_FOR_WOMAN } from "../../shared/question";
import * as S from "./style";

const Question = () => {
  return (
    <S.QuestionPageWRap>
      <S.QuestionTitleWrap>
        <S.QuestionTitle>
          월경이 궁금한 <span style={{ color: "#DE8282" }}>남성</span>분들을위해
        </S.QuestionTitle>
      </S.QuestionTitleWrap>
      <S.QuestionCategoryBox>
        <S.QuestionCategoryWrap>
          <S.QuestionCategory backgroundColor={"#DE8282"} textColor={"#ffffff"}>
            남성
          </S.QuestionCategory>
          <S.QuestionCategory backgroundColor={"#F6F6F6"} textColor={"#DEDEDE"}>
            여성
          </S.QuestionCategory>
          <S.QuestionCategory backgroundColor={"#F6F6F6"} textColor={"#DEDEDE"}>
            학생
          </S.QuestionCategory>
        </S.QuestionCategoryWrap>
      </S.QuestionCategoryBox>
      <S.QuestionBox>
        {DATA_FOR_WOMAN.map((question) => {
          return (
            <S.QuestionWrap backgroundColor={"#F6F6F6"} textColor={"#000000"}>
              <span>{question.question}</span>
              <S.QuestionUnderArrow>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  // style={{ marginLeft: "100px" }}
                >
                  <path
                    d="M5.30816 8.30592C5.50554 8.11004 5.7732 8 6.05229 8C6.33138 8 6.59904 8.11004 6.79641 8.30592L12.0064 13.4779L17.2163 8.30592C17.4148 8.11559 17.6807 8.01027 17.9566 8.01266C18.2326 8.01504 18.4966 8.12492 18.6917 8.31865C18.8869 8.51237 18.9976 8.77443 19 9.04839C19.0024 9.32235 18.8963 9.58628 18.7045 9.78334L12.7505 15.6941C12.5531 15.89 12.2854 16 12.0064 16C11.7273 16 11.4596 15.89 11.2622 15.6941L5.30816 9.78334C5.11085 9.5874 5 9.32169 5 9.04463C5 8.76757 5.11085 8.50186 5.30816 8.30592Z"
                    fill="#8D8D8D"
                  />
                </svg>
              </S.QuestionUnderArrow>
            </S.QuestionWrap>
          );
        })}
      </S.QuestionBox>
    </S.QuestionPageWRap>
  );
};
export default Question;
