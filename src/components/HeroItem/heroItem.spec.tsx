import { act, fireEvent, render } from "@testing-library/react-native";
import { HeroItem } from ".";
import { ThemeProvider } from "styled-components/native";
import theme from "../../global/styles/theme";


const Providers: React.FC = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe('Hero Item component', () => {

  it('should render a hero item', () => {
    const spiderManMock = {
      id: 1,
      name: 'Spider',
      description: '',
      thumbnail: {
        path: 'path',
        extension: 'jpg'
      }
    }

    const { getByText } = render(
      <HeroItem
        item={spiderManMock}
        navigation={undefined}
      />,
      { wrapper: Providers }
    );

    expect(getByText('Spider')).toBeTruthy();
  });

  it('should navigate to HeroPage when clicking on a hero item', () => {
    const navigation = { navigate: jest.fn() };

    const spiderManMock = {
      id: 1,
      name: 'Spider',
      description: '',
      thumbnail: {
        path: 'path',
        extension: 'jpg'
      }
    }

    const { getByText } = render(
      <HeroItem 
      item={spiderManMock} 
      navigation={navigation}      
      />,
      { wrapper: Providers }
    );

    act(() => {
      fireEvent.press(getByText('Spider'));
    });

    expect(navigation.navigate).toHaveBeenCalledWith('HeroPage', { item: spiderManMock });

  });
});