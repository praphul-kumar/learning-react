export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  // Creating const with uppercase because when we will pass an generic html element then it react will convert it to custom component and bult an element with given value
//   const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
