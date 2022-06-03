import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
        // https://react-bootstrap.github.io/forms/floating-labels/
      <form>
          <input
            name="cardName"
            label="Nome"
            id="name"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        
          <textarea
            label="Descriçao"
            placeholder="Descrição"
            name="cardDescription"
            id="descri"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />

          <input
            label="attr01"
            placeholder="attr01"
            name="cardAttr1"
            id="attr01"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />

          <input
            label="attr02"
            placeholder="attr02"
            name="cardAttr2"
            id="attr02"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />

          <input
            label="attr03"
            placeholder="attr03"
            name="cardAttr3"
            id="attr03"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />

          <input
            label="Img-input"
            placeholder="Url da Imagem"
            name="cardImage"
            id="img"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />

        <label htmlFor="type-rare">
          Raridade
          <select
            name="cardRare"
            data-testid="rare-input"
            id="type-rare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="check">
          <input
            name="cardTrunfo"
            id="check"
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Trybe Trunfo
        </label>

        <button
          onClick={ onSaveButtonClick }
          name="isSaveButtonDisabled"
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          
        >
          Salvar
        </button>

      </form>
    );
  }
}

export default Form;
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  cardRare: PropTypes.string.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
