import React from 'react';
import styled from 'styled-components';

// #region styled-components
const HomeContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: black;
  margin: 16px;
`;

const Button = styled.TouchableOpacity`
  padding: 8px 16px;
  border-radius: 4px;
  margin: 16px;
`;

const ActionButton = styled(Button)`
  background-color: papayawhip;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: black;
  width: 100%;
  text-align: center;
`;

const BottomContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const InfoText = styled(ButtonText)`
  color: gray;
`;
// #endregion

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <HomeContainer>
        <TitleText>Tooltip Examples</TitleText>

        <ActionButton onPress={() => navigation.navigate('PlacementExamples')}>
          <ButtonText>Placement Examples (with children)</ButtonText>
        </ActionButton>

        <ActionButton>
          <ButtonText>Childless Tooltip Example</ButtonText>
        </ActionButton>

        <TitleText>Walkthroughs</TitleText>

        <ActionButton>
          <ButtonText>Show All Placement Examples</ButtonText>
        </ActionButton>

        <ActionButton>
          <ButtonText>Show Childless Tooltip Examples</ButtonText>
        </ActionButton>
      </HomeContainer>
      <BottomContainer>
        <Button>
          <InfoText>About</InfoText>
        </Button>
      </BottomContainer>
    </>
  );
};

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: 'Walkthrough Example App',
});

export default HomeScreen;
