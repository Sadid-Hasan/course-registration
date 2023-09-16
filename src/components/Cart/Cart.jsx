import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ selectedCourse }) => {
  const maxCreditHours = 20;
  let totalCreditHours = 0;
  let totalPrice = 0;

  selectedCourse.forEach((blog) => {
    totalCreditHours += blog.credit_hours;
    totalPrice += blog.course_price;
  });
  const remainingCreditHours = maxCreditHours - totalCreditHours;
  if (totalCreditHours > maxCreditHours) {
    toast('You can take maximum 20 Credit', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000, 
    });
  }
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="card-title text-blue-500 ">Credit Hour Remaining: {remainingCreditHours} hr</h1> <hr />
          <h2 className="card-title ">Course Name</h2>
          <ul className="text-lg font-normal text-slate-500">
          {selectedCourse.map((course, index) => (
              <li key={course.id}>
                {index + 1}. {course.course_title}
              </li>
            ))}
          </ul> 
          <hr /><p>Total Credit Hours: {totalCreditHours} hr</p><hr />
          <ToastContainer/>
          <p>Total Price:{totalPrice}USD</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
