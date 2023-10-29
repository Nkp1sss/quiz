import { useState } from 'react';
import Quiz from '../Quiz';
import Result from '../Result';

import './App.scss';

function App() {
  const [isResult, setResult] = useState(false);

  return isResult ? <Result /> : <Quiz getResults={() => setResult(true)} />
}

export default App
