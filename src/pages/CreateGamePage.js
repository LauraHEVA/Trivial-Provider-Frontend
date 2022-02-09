import BackArrowComponent from "../components/BackArrowComponent/BackArrowComponent";
import TitleComponent from "../components/TitleComponent/TitleComponent";
import styled from "styled-components";
import { backgroundLight } from "../globalStyles";
import FormComponent from "../components/FormComponent/FormComponent";

const PageContainer = styled.div`
  background-color: ${backgroundLight};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 80px;
`;

const BackArrowContainer = styled.div`
  padding: 36px 20px;
  width: 100%;
`;

const CreateGamePage = () => {
  return (
    <>
      <PageContainer>
        <BackArrowContainer>
          <BackArrowComponent />
        </BackArrowContainer>
        <TitleComponent text={"Create Game"} size={"medium"}></TitleComponent>
        <FormComponent></FormComponent>
      </PageContainer>
    </>
  );
};

export default CreateGamePage;