import React from 'react';
import '../components_styles/TodoForm.scss';

export default class TodoForm extends React.Component {
    render() {
        return (
            <form className="todo-form" onSubmit={this.props.handlerSubmit}>
                <div className="todo-form__wrap form-group">
                    <div className="todo-from__label-wrap">
                        <label className="todo-form__label-text todo-form_label_space font-weight-bold">
                            Task
                        </label>
                    </div>
                    <div className="todo-form__in-wrap">
                        <input 
                            type="text"
                            placeholder="What do you need to do?"
                            className="todo-form__input-text todo-form__input-up form-control" 
                            value={this.props.field} 
                            onChange={this.props.handlerChange} 
                        />
                    </div>
                </div>
                <button 
                    type="submit" 
                    className="
                        todo-form__btn-submit 
                        todo-form_btn-sizes 
                        btn btn-primary
                    "
                >
                    Add Task
                </button>
            </form>
        )
    }
}