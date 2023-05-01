import { act, render, } from "@testing-library/react-native";
import { Input } from ".";
import { ThemeProvider } from "styled-components/native";
import theme from "../../global/styles/theme";


const Providers: React.FC = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe('Input component', () => {

  it('should render properly', () => {
    const { getByTestId } = render(<Input 
      testID="pesquisa"
      iconName={'search'}
      placeholder='Nome do personagem'
      autoCorrect={false} />,
    { wrapper: Providers });
    expect(getByTestId('pesquisa-input')).toBeTruthy();
  });

  it('should have a value', async () => {
    let value = '';
    const onChangeText = (text: string) => value = text;

    const { getByTestId } = render(<Input         
      testID="pesquisa"
    iconName={'search'}
    placeholder='Nome do personagem'
    value="Spider Man"
    autoCorrect={false}
    onChangeText={onChangeText}
    />,
    { wrapper: Providers });
    
    const input = getByTestId('pesquisa-input');

    expect(input.props.value).toEqual('Spider Man');
  
  });


  it('should change input border bottom color on user focus', () => {
    const { getByTestId } = render(
      <Input
        testID="pesquisa"
        iconName={'search'}
        placeholder='Nome do personagem'
        autoCorrect={false}
      />,
      { wrapper: Providers }
    );
    const textInputComponent = getByTestId('pesquisa-input');
    const InputComponentContainer = getByTestId('pesquisa-input-container');

    act(() => {
      textInputComponent.props.onFocus();
    });

    expect(InputComponentContainer.props.style[0].borderBottomColor).toEqual(theme.colors.primary);

  });
});

