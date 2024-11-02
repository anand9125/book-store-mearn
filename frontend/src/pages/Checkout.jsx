import React from 'react';
import { Link } from 'react-router-dom';
import { cartState } from '../Recoil/Cart/atom';
import { useRecoilState } from 'recoil';

function Checkout() {
    const currentUser=true
    const [cartItems, setCartItems] = useRecoilState(cartState);
    const Subtotal = cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.newPrice, 0);



  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        
       
        <div>
          <h2 className="font-semibold text-xl text-gray-600 mb-2">Cash On Delivery</h2>
          <p className="text-gray-500 mb-2">Total Price: ${Subtotal}</p>
          <p className="text-gray-500 mb-6">Items: {cartItems.length}</p>
        </div>

       
        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <form className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8">
            
            
            <div className="text-gray-600">
              <p className="font-medium text-lg">Personal Details</p>
              <p>Please fill out all the fields.</p>
            </div>

            <div className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                
                
                <div className="md:col-span-5">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text" name="name" id="name" 
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  
                  />
                </div>

              
                <div className="md:col-span-5">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="text" name="email" id="email" 
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                    disabled
                    defaultValue={currentUser?.email} // Assuming currentUser is defined
                    placeholder="akdon9936@gmail.com" 
                  />
                </div>

                
                <div className="md:col-span-5">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="number" name="phone" id="phone" 
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                    placeholder="9125911042" 
                  />
                </div>

                
                <div className="md:col-span-3">
                  <label htmlFor="address">Address / Street</label>
                  <input
                    type="text" name="address" id="address" 
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                    placeholder="" 
                  />
                </div>

             
                <div className="md:col-span-2">
                  <label htmlFor="city">City</label>
                  <input
                    type="text" name="city" id="city" 
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                    placeholder="" 
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="country">Country </label>
                  <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input
                      name="country" id="country" 
                      placeholder="Country" 
                      className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" 
                    />
                    
                  </div>
                </div>

               
                <div className="md:col-span-2">
                  <label htmlFor="state">State </label>
                  <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input 
                      name="state" id="state" 
                      placeholder="State" 
                      className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  
                    />
                    
                    
                  </div>
                </div>

                
                <div className="md:col-span-1">
                  <label htmlFor="zipcode">Pincode</label>
                  <input 
                    type="text" name="zipcode" id="zipcode" 
                    className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                    placeholder="" 
                  />
                </div>

                <div className="md:col-span-5 mt-3">
                  <div className="inline-flex items-center">
                    <input 
                      type="checkbox" name="billing_same" id="billing_same" 
                      className="form-checkbox" 
                    />
                    <label htmlFor="billing_same" className="ml-2">
                      I agree to the <Link className='underline underline-offset-2 text-blue-600'>Terms & Conditions</Link> and <Link className='underline underline-offset-2 text-blue-600'>Shopping Policy</Link>.
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-5 text-right">
                  <div className="inline-flex items-end">
                    <button 
                    //   disabled={!isChecked} // Assuming isChecked is defined somewhere
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Place an Order
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Checkout;
