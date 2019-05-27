/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
*/
import adding from './suma';
/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/


test('Test de prueba', () => {
	var result = adding(1,1);
	//var bandera = (result == 2);
	expect(result == 2).toBeTruthy();
    //assert.equal(result, 2);
})