import { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
  };

  handleChange = e => {
    this.setState({
      name: e.currentTarget.value,
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.resetInput();
  };

  resetInput = () => {
    this.setState({
      name: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <label htmlFor="id-1">
          Name
          <input
            type="text"
            name="name"
            id="id-1"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
