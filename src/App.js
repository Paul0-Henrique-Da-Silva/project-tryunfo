import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
constructor(props){
 super(props);
  this.state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr3: '0',
    cardAttr2: '0',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    deck: [],
    baralho: [],
  }
  this.inChange = this.inChange.bind(this);
}

  inChange(event) {
      const { target } = event;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const { name } = target; 
    this.setState({
      [name]: value,
     }, () => this.isButtonImput());
  }

  isButtonImput (){
    const MIN_ONLY_VALUE = 0;
    const MAX_ONLY_VALUE = 90;
    const MAX_VALUE_SUM = 210;
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage } = this.state;
    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);  
    const SUM_VALUE = attr1 + attr2 + attr3;
    if (cardName === ''
      || cardImage === ''
      || cardDescription === ''
      || attr1 > MAX_ONLY_VALUE
      || attr1 < MIN_ONLY_VALUE
      || attr2 > MAX_ONLY_VALUE
      || attr2 < MIN_ONLY_VALUE
      || attr3 > MAX_ONLY_VALUE
      || attr3 < MIN_ONLY_VALUE
      || SUM_VALUE > MAX_VALUE_SUM
      )
       {
      return this.setState({
        isSaveButtonDisabled: true,
      });
    } 
   return this.setState({
     isSaveButtonDisabled: false,
   }) 
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form 
         cardName={cardName}
         onInputChange={ this.inChange }
         cardDescription={ cardDescription }
         cardAttr1={ cardAttr1 }
         cardAttr2={ cardAttr2 }
         cardAttr3={ cardAttr3 }
         cardImage={ cardImage }
         cardRare={ cardRare }
         cardTrunfo={ cardTrunfo }
         isSaveButtonDisabled={ isSaveButtonDisabled } 
         />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
