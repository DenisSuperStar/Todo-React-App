import React from 'react';
import '../components_styles/TodoList.scss';

export default class TodoList extends React.Component {
    render() {
        const list = this.props.todos.map((item, index) => {
            return (
                <li className="todo-list__item todo-list_item_text list-group-item" key={index} id={`order_${index + 1}`}>
                    <span style={{textDecoration: this.props.finished[index] ? "line-through" : ""}}>{item}</span>
                    <label className="todo-list__item-label">
                        <input 
                            type="checkbox" 
                            className="todo-list__in-item-input" 
                            onChange={() => {this.props.handlerCheck(index)}} 
                        />
                        <span className="todo-list__in-item-checkmark todo-list_back_colored todo-list_back_radius" />
                    </label>
                    <button 
                        type="text" 
                        className="todo-list__btn-item btn btn-danger" 
                        onClick={() => {this.props.handlerDeleteItem(index)}}
                    >
                        <span className="todo-list__icon"></span>
                    </button>
                </li>
            )
        });
        return (
            <ul className="todo-list list-group">
                {list}
            </ul>
        )
    }
}