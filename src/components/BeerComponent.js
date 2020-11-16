import React from 'react';

class BeerComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLiked: false,
            description: false
        }
    }

    likeButton = () => {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    showDescription = () => {
        this.setState({
            description: !this.state.description
        })
    }

    render() {
        const likedIcon = <i className="fas fa-thumbs-up"></i>
        const unlikedIcon = <i className="far fa-thumbs-up"></i>
        return (
            <div className="card margin-bottom" style={{ width: "25rem" }}>
                <img src={this.props.beer.image_url} className="card-img-top beerImage" alt={this.props.beer.name}></img>
                <div className="card-body">
                    <h5 className="card-title">{this.props.beer.name}</h5>
                    <button type="button" class="btn btn-primary" onClick={() => this.showDescription()}>{this.state.description ? "Hide" : "Description"}</button><br></br>
                    <p className="card-text">
                        <br></br>
                        {this.state.description ? this.props.beer.description : null}
                    </p>


                </div>
                <button id="like-button" onClick={() => this.likeButton()}>{this.state.isLiked ? likedIcon : unlikedIcon}</button>
            </div>
        )
    }
}

export default BeerComponent;


