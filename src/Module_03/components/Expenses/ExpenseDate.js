import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const month = props.date.getMonth();
    const day = props.date.getDay();
    const year = props.date.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>Month:{month}</div>
            <div className='expense-date__year'>Year:{year}</div>
            <div className='expense-date__day'>Day:{day}</div>
        </div>
    )
}
export default ExpenseDate;