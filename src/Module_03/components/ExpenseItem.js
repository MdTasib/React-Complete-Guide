import './ExpenseItem.css';

function ExpenseItem(props) {
    const month = props.date.getMonth();
    const day = props.date.getDay();
    const year = props.date.getFullYear();

    return (
        <div className='expense-item'>
            <div>
                <div>Month:{month}</div>
                <div>Year:{year}</div>
                <div>Day:{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;