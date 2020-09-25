import React from 'react';


function SubmitButton(props) {

    return (
        <div>
            <strong>Score:</strong> {props.state.score}<br />
            <strong>Question:</strong> {props.state.data.question}<br />
            <strong>Value:</strong> {props.state.data.value}<br />
            <strong>Category:</strong> {category}<br />
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Submit Answer:</label>
                        <input onChange={props.handleChange} type="text" name="answer" value={props.state.answer} />
                    </div>
                    <button>Submit Form</button> <br />
                    {props.state.answer}

                </form>
            </div>
        </div>
    )
}

export default SubmitButton;