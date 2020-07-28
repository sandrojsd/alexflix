import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Cadegoria';
import NotFound from './pages/NotFound';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>      
        <Route path="/" exact component={Home} />
        <Route path="/cadastro/video" exact component={CadastroVideo} />
        <Route path="/cadastro/categoria" exact component={CadastroCategoria} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}