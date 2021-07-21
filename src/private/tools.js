import React from 'react';
import auth from '../auth';
import Navbar from '../public/navbar';

export default class Tools extends React.Component {

    state = {
        file: {},
        filename: '',
        uploadedFile: {}
    }

    constructor(props) {
        super();
      }

    render() {
        return (
            <div>
                <div className="mb-5"><Navbar props={this.props}/></div>
                {auth.isAdmin() && 
                    <div className="custom-file p-3">
                        <input type="file" className="custom-file-input" id="customFile"
                            onChange={
                                e=>{
                                    this.setState({file: e.target.files[0]} , () => { console.log(this.state.file) });
                                    this.setState({filename: e.target.files[0].name} , () => { console.log(this.state.filename) });
                                }
                                }/>
                        <label className="custom-file-label" htmlFor="customFile"></label>
                    </div>
                }
                {auth.isAdmin() && 
                    <button type="submit" className="btn btn-primary" onClick={
                    () => {
                        const formData = new FormData();
                        formData.append('file', this.state.file, this.state.filename);
                        console.log(formData.getAll('file'));
                        
                        fetch('/api/files/uploadFile', {method:'POST', body: formData} )
                            .then(response => {
                                response.json()
                                .then(
                                    (data)=>{
                                        const { fileName, filePath } = data;
                                this.setState({uploadedFile: { fileName, filePath }});
                                if (response.status === 500)
                                    console.log('Server error');
                                else if (response.status === 400)
                                    console.log(response.status)
                                    }
                                )
                                
                            })
                    }
                    }>Upload</button>
                }
            </div>
        )
    }
}