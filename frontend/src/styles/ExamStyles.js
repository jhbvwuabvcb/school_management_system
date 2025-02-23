import styled from 'styled-components';

export const ExamContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SidebarContainer = styled.div`
  flex: 0 0 250px;

  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ExamHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ExamForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  padding: 8px;
  margin-bottom: 20px;
  width: 100%;
`;

export const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;

export const ExamResultsContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const ExamSubject = styled.h3`
  margin-bottom: 10px;
  text-align: center;
`;

export const ExamResult = styled.p`
  color: #555;
  margin-bottom: 10px;
  text-align: center;
`;

export const ExamChartContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
  }
`;
