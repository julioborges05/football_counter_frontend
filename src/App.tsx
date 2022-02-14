import { ChakraProvider } from '@chakra-ui/react'
import { CentralPanel } from './Components/CentralPanel';
import { theme } from './Styles/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CentralPanel />
    </ChakraProvider>
  );
}

export default App;