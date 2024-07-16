import React from 'react';

function Inquiry() {
  return (
    <div className='contactForm'>
    <p>Contact Me</p>
    <form>
    <label>Your name:
    <input type="text" />
    </label>
    <label>Email:
    <input type="text" />
    </label>
    <label>What type of session are you looking to book:
    <select>
    <option>Couples</option>
    <option>Maternity</option>
    <option>Engagement</option>
    <option>Family</option>
    </select>
    </label>
    <label>Tell me a little more about what you're looking for:
    <textarea></textarea>
    </label>
    <button>Submit</button>
  </form>
  </div>
  );
}

export default Inquiry;