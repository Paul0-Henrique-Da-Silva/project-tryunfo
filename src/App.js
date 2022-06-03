import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr3: '0',
      cardAttr2: '0',
      cardImage: '',
      cardRare: '',
      card: [],
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.inChange = this.inChange.bind(this);
    this.cleanStade = this.cleanStade.bind(this);
    this.validateTrunfo = this.validateTrunfo.bind(this);
  }

  validateTrunfo() {
    this.setState(() => ({
      hasTrunfo: true,
    }));
  }

  cleanStade() {
    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      card: [...prevState.card, prevState],
    }));
    this.validateTrunfo();
  }

  inChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    }, () => this.isButtonImput());
  }

  isButtonImput() {
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
    ) {
      return this.setState({
        isSaveButtonDisabled: true,
      });
    }
    return this.setState({
      isSaveButtonDisabled: false,
    });
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, card } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onSaveButtonClick={ this.cleanStade }
          onInputChange={ this.inChange }
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
        {
          card.map((cardCurrent) => (
            <Card
              key={ cardCurrent.cardName }
              cardName={ cardCurrent.cardName }
              cardDescription={ cardCurrent.cardDescription }
              cardAttr1={ cardCurrent.cardAttr1 }
              cardAttr2={ cardCurrent.cardAttr2 }
              cardAttr3={ cardCurrent.cardAttr3 }
              cardImage={ cardCurrent.cardImage }
              cardRare={ cardCurrent.cardRare }
              cardTrunfo={ cardCurrent.cardTrunfo }
            />
          ))
        }
      </div>
    );
  }
}

export default App;
