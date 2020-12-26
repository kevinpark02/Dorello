import React from 'react';
import { $CombinedState } from 'redux';

class ProfileForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            photoFile: null
        };
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.refreshPage = this.refreshPage.bind(this);
    }

    // refreshPage() {
    //     window.location.reload(false);
    // }

    handleFile(e) {
        this.setState({photoFile: e.target.files[0]});
    }

    handleSubmit(e) {
        const formData = new FormData();
        formData.append('user[photo]', this.state.photoFile);
        $.ajax({
            url: `/api/users/${this.props.currentUser.id}`,
            method: "PATCH",
            data: formData,
            contentType: false,
            processData: false
        })
    }

    render() {
        const displayImage = this.props.currentUser.photoUrl ? (
            <img className="profile-pic-snip" src={this.props.currentUser.photoUrl} alt=""/>
        ): <div className="profile-pic-snip">{this.props.currentUser.email[0].toUpperCase()}</div>;
        return(
            <div className="profile-pic-upload-container">
                {displayImage}
                <h4>{this.props.currentUser.email}</h4>
                <form onSubmit={this.handleSubmit}>
                    <h5>Please choose a profile picture</h5>
                    <input type="file"
                           onChange={this.handleFile}/>
                    <input type="submit" value="Update Profile Picture"/>
                </form>
            </div>
        )
    }
}

export default ProfileForm;