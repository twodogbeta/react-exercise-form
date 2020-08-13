import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {

  state = {
    name: '',
    gender: 'male',
    description: '',
    isReadConduct: false
  }

  handleNameChange = (event) => this.setState({name: event.target.value})
  handleGenderChange = (event) => this.setState({gender: event.target.value})
  handleDescriptionChange = (event) => this.setState({description: event.target.value})
  handleReadConductChange = (event) => this.setState({isReadConduct: event.target.checked});
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (

        <form>
          <table>
            <thead>
            <tr>
              <th><h1>My Profile</h1></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th className='label-col'><label htmlFor='name'>Name</label></th>
            </tr>
            <tr>
              <th>
                <input className='info-input'
                       placeholder='Your name'
                       id='name'
                       type='text'
                       onChange={this.handleNameChange}
                       value={this.state.name}/>
              </th>
            </tr>
            <tr>
              <th className='label-col'><label htmlFor='gender'>Gender</label></th>
            </tr>
            <tr>
              <th>
                <select className='info-input' id='gender' value={this.state.gender}
                        onChange={this.handleGenderChange}>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
              </th>
            </tr>
            <tr>
              <th className='label-col'><label htmlFor='name'>Description</label></th>
            </tr>
            <tr>
              <th>
                            <textarea id='description'
                                      placeholder='Description about yourself'
                                      onChange={this.handleDescriptionChange}
                                      value={this.state.description}/>
              </th>
            </tr>
            <tr>
              <th>
                <input id='is-read' onChange={this.handleReadConductChange} type='checkbox'
                       checked={this.state.isReadConduct}/>I have read the terms of conduct
              </th>
            </tr>
            <tr>
              <th>
                <button id='submit' type='submit'
                        disabled={!this.state.description || !this.state.name || !this.state.isReadConduct}
                        onClick={this.handleSubmit}>
                  Submit
                </button>
              </th>
            </tr>
            </tbody>
          </table>
        </form>
    );
  }
}

export default MyProfile;