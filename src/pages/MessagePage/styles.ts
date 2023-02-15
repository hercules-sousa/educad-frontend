import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const DataContainer = styled.div`
  display: flex;
  background-color: var(--corTexto);
  width: 880px;
  border-radius: 20px;
  height: 220px;
`

export const DataDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 580px;
`

export const StyledSpan = styled.span`
  font-weight: bold;
  color: white;
  font-size: 18px;
`

export const StyledP = styled.p`
  display: inline;
  color: white;
  font-size: 18px;
  margin-bottom: 2px;
`

export const LineDiv = styled.div`
  margin-bottom: 12px;
`

export const StudentImage = styled.img`
  border-radius: 20px 0 0 20px;
  width: 300px;
`

export const MessageInputsContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 880px;
`

export const NameSubjectDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledInput = styled.input`
  padding-left: 20px;
  color: var(--corEducad);
  background-color: #D9D9D9;
  border: none;
  border-radius: 10px;
`

export const NameSubjectInput = styled(StyledInput)`
  height: 55px;
  width: 350px;
  margin-bottom: 25px;
`

export const MessageInput = styled.textarea`
  height: 135px;
  width: 475px;
  padding: 20px;
  color: var(--corEducad);
  background-color: #D9D9D9;
  border: none;
  border-radius: 10px;
  resize: none;
`

export const MessageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`

export const SendMessageButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  background-color: #936CDB;
  text-transform: capitalize;
  margin-top: 30px;
  margin-right: 0px !important;
  border-radius: 10px;
  height: 50px;
  width: 120px;
  color: white;
`

export const SendMessageTitleDiv = styled.div`
  width: 880px;
  margin: 65px auto;
`

export const SendMessageTitleH2 = styled.h2`
  font-weight: 500;
  font-size: 30px;
  color: #1b1d2a;
`