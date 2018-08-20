import React from "react";

export default class ExpenseForm extends React.Component {   
    constructor(props) {
        super(props);
    
        this.state = {
          description: props.expense ? props.expense.description : '',
          note: props.expense ? props.expense.note : '',
          amount: props.expense ? (props.expense.amount / 100).toString() : '',
          error: ''
        };
      }

    onDescriptionChange = (e)=>{
        const description = e.target.value;
        this.setState(() => ({description}));
    }

    onAmountChange = (e)=>{
        const amount = e.target.value;
        if(amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({amount}));
        }        
    }

    onNoteChange = (e)=>{
        const note = e.target.value;
        this.setState(() => ({note}));
    }

    onSubmit = (e)=> {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error : 'Please provide description and amount!'}));
        } else {
            this.setState(() => ({error : ''}));
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount, 10),
                note:this.state.note
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="text"
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <textarea
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        placeholder="Add a note for your expense !"
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}