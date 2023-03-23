import React from 'react';
import './FFC_Form.css';

function Form() {
  return (
    <form className='ffc_form'>
      <div className="form-container">
        <div className="form-column1">
          <label htmlFor="input1">Input 1</label>
          <input type="text" id="input1" name="input1" />
          <label htmlFor="input2">Input 2</label>
          <input type="text" id="input2" name="input2" />
          <label htmlFor="input3">Input 3</label>
          <input type="text" id="input3" name="input3" />
          <label htmlFor="input4">Input 4</label>
          <input type="text" id="input4" name="input4" />
        </div>
        <div className="form-column2">
          <label htmlFor="input5">Input 5</label>
          <input type="text" id="input5" name="input5" />
          <label htmlFor="input6">Input 6</label>
          <input type="text" id="input6" name="input6" />
          <label htmlFor="input7">Input 7</label>
          <input type="text" id="input7" name="input7" />
          <label htmlFor="input8">Input 8</label>
          <input type="text" id="input8" name="input8" />
        </div>
      </div>
      <button>Join</button>
    </form>
  );
}

export default Form;
