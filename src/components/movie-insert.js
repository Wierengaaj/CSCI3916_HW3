import React, { Component } from 'react';

export default class MovieInsert extends Component {
    constructor(props){
        super(props);

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onYearChange = this.onYearChange.bind(this);
        this.onGenreChange = this.onGenreChange.bind(this);
        this.onActorChange = this.onActorChange.bind(this);
        this.onCharacterChange = this.onCharacterChange.bind(this);

        this.state = {
            title: '',
            year: '',
            genre: '',
            actor: '',
            character: '',
            users: [] //This array is here to so that on our page, you can select the user
        }
    }

    onTitleChange(e) {
        this.setState({
            title: e.target.value
        });
    }

    onYearChange(e) {
        this.setState({
            year: e.target.value
        });
    }

    onGenreChange(e) {
        this.setState({
            genre: e.target.value
        });
    }

    onActorChange(e) {
        this.setState({
            actor: e.target.value
        });
    }

    onCharacterChange(e) {
        this.setState({
            character: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        var movie = {
            title: this.state.title,
            year: this.state.year,
            genre: this.state.genre,
            actor: this.state.actor,
            character: this.state.character
        } 
        console.log(movie)
        window.location = '/';
    }

    render() {
        return (
            <div>
            <h3>Add New Movie</h3>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>Title: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onTitleChange}
                    />
              </div>
              <div className="form-group"> 
                <label>Year: </label>
                <input  type="number"
                    required
                    className="form-control"
                    value={this.state.year}
                    onChange={this.onYearChange}
                    />
              </div>
              <div className="form-group">
                <label>Genre: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.genre}
                    onChange={this.onGenreChange}
                    />
              </div>
              <div className="form-group">
                <label>Actor: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.actor}
                    onChange={this.onActorChange}
                    />
              </div>
              <div className="form-group">
                <label>Character: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.character}
                    onChange={this.onCharacterChange}
                    />
              </div>


              <div className="form-group">
                <input type="submit" value="Add Movie" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}