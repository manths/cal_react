import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default class Calbutton extends Component {
    constructor() {
        super();

        this.state = {
            val: ''
        }

        this.style = {
            div: {
                display: 'flex',
                flexDirection: 'column',
            },
            text: {
                width: '160px'
            },
            button: {
                width: '160px',
            },
            backspace: {
                width: "100px"
            },
            clear: {
                width: "60px"
            }
        }
    }

    getAnswer = () => {
        try {
            if (this.state.val !== '') {
                if (this.state.val.includes('--')) {
                    let ans = this.state.val.replace('--', '+')
                    this.sum(ans)
                } else {
                    this.sum(this.state.val)
                }
            }
        } catch (e) {
            console.log(e)
        }
    }
    sum = (ans) => {
        try {
            let data = eval(ans)
            this.setState({ val: data.toString() })
        } catch (e) {
            this.setState({ val: 'error' })
        }
    }
    clearButton = () => {
        this.setState({ val: '' })
    }

    backSpace = () => {
        let data = this.state.val.slice(0, this.state.val.length - 1)
        this.setState({ val: data })
    }

    render() {
        return (
            <div style={this.style.div}>
                <TextField style={this.style.text} value={this.state.val} id="standard-basic" label="Enter Value" />
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button onClick={e => this.setState({ val: this.state.val + '1' })}>1</Button>
                    <Button onClick={e => this.setState({ val: this.state.val + '2' })}>2</Button>
                    <Button onClick={e => this.setState({ val: this.state.val + '3' })}>3</Button>
                    <Button onClick={e => this.setState({ val: this.state.val + '4' })}>4</Button>
                </ButtonGroup>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button onClick={e => this.setState({ val: this.state.val + '5' })}>5</Button>
                    <Button onClick={e => this.setState({ val: this.state.val + '6' })}>6</Button>
                    <Button onClick={e => this.setState({ val: this.state.val + '7' })}>7</Button>
                    <Button onClick={e => this.setState({ val: this.state.val + '8' })}>8</Button>
                </ButtonGroup>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button onClick={e => this.setState({ val: this.state.val + '9' })}>9</Button>
                    <Button onClick={e => this.setState({ val: this.state.val + '0' })}>0</Button>
                    <Button onClick={e => this.setState({ val: this.state.val + '+' })}>+</Button>
                    <Button onClick={e => this.setState({ val: this.state.val + '-' })}>-</Button>
                </ButtonGroup>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button onClick={e => this.setState({ val: this.state.val + '*' })}>*</Button>
                    <Button onClick={e => this.setState({ val: this.state.val + '*' })}>*</Button>
                    <Button onClick={e => this.setState({ val: this.state.val + '(' })} disabled>(</Button>
                    <Button onClick={e => this.setState({ val: this.state.val + ')' })} disabled>)</Button>
                </ButtonGroup>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button style={this.style.clear} onClick={this.clearButton}>clear</Button>
                    <Button style={this.style.backspace} onClick={this.backSpace}>Backspace</Button>
                </ButtonGroup>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button style={this.style.button} onClick={this.getAnswer}>Answer</Button>
                </ButtonGroup>
            </div>
        )
    }
}
