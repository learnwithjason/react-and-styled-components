import styled from 'styled-components';

const backgroundColor = {
  default: 'seagreen',
  disabled: 'grey',
  destructive: 'red',
};

const DefaultButton = styled.button`
  background-color: ${(props) =>
    props.inputValue ? backgroundColor[props.type] : backgroundColor.disabled};
  border: 0;
  color: white;
  margin-left: 0.5rem;
`;

export const Button = ({ inputValue, type = 'default', children }) => {
  return (
    <DefaultButton inputValue={inputValue} type={type}>
      {children}
    </DefaultButton>
  );
};
