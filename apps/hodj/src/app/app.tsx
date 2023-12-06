// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Hyperlink, SmallIconButton, useWindowDimensions } from '@hodj/misc';
import Section from './Section';
import LayoutExample from './LayoutExample';
import { Add } from '@mui/icons-material';
import TimeseriesGraphExample from './TimeseriesGraphExample';
import ModalWindowExample from './ModalWindowExample';

export function App() {
  const { width, height } = useWindowDimensions();
  return (
    <div style={{ position: 'absolute', width, height, overflowY: 'auto' }}>
      <Section label="" width={width}>
        <div>
          <h1>Hodj</h1>
          <p>
            This app is a development tool, serving as a test for a collection
            of React widgets in the @hodj repo.
          </p>
        </div>
      </Section>
      <Section label="Hyperlink" width={width}>
        <Hyperlink onClick={() => alert('Hyperlink')}>Click me</Hyperlink>
      </Section>
      <Section label="HBoxLayout / VBoxLayout" width={width}>
        <LayoutExample width={0} />
      </Section>
      <Section label="SmallIconButton" width={width}>
        <SmallIconButton
          icon={<Add />}
          label="Click me"
          onClick={() => alert('SmallIconButton clicked')}
        />
      </Section>
      <Section label="TimeseriesGraph" width={width}>
        <TimeseriesGraphExample width={width} />
      </Section>
      <Section label="ModalWindow" width={width}>
        <ModalWindowExample />
      </Section>
    </div>
  );
}

export default App;
