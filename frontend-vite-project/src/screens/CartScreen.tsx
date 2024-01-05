import React from 'react'

function CartScreen() {
  return (
    <div>

        
<div class="container py-4 flex justify-between">
    <div class="flex gap-3 items-center">
        <a class="text-primary text-base" href="index.html"> <i class="fa fa-home"></i></a>
        <span class="text-sm text-gray-600"> <i class="fa-solid fa-angle-right fa-lg"></i></span>
        <p class="text-gray-900 font-medium">Card</p>

    </div>
</div>






<div class="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">


    <div class="xl:col-span-9 lg:col-span-8">
        <div class="bg-second py-3 pl-12 pr-12 mb-4 rounded-lg  xl:pr-28 hidden md:flex">
        
            <p class="text-center text-white">Product</p>
            <p class="text-center ml-auto mr-16 xl:mr-24 text-white">Quntity</p>
            <p class="text-center text-white">Total</p>


        </div>

                <div class="space y-2">

                    <div class="flex items-center p-6 bg-stone-200 md:justify-between gap-4 md:gap-6 border border-gray-800 rounded-lg flex-wrap md:flex-nowrap">

                        <div class="w-32 flex-shrink-0">
                            <img src="img/product/watch-1.png" class="w-full"/>
                        </div>

                        <div class="md:w-1/3 w-full">
                            <h2>Watch one</h2>
                            <p>$65</p>
                            <p>Size : L</p>
                         

                        </div>

                        <div class="flex border border-gray-500 text-gray-600 divide-x divide-gray-500 w-max">
                            <div class="h-7 w-7 text-xl flex items-center justify-center cursor-pointer" onclick="decr()" > - </div>
                            <div class="h-7 w-7 text-2xl flex items-center justify-center " id="quantity"> 1 </div>
                            <div class="h-7 w-7 text-xl flex items-center justify-center cursor-pointer" onclick="incr()"> + </div>
            
                        </div>

                        <div class="ml-auto md:ml-0">
                            <p>$350</p>


                        </div>
                        <div class="text-second hover:text-primary cursor-pointer ">
                            <i class="fa-solid fa-trash"></i>
                        </div>


                    </div>

                    


                </div>

       



    </div>

    <div class="xl:col-span-3 lg:col-span-4 border border-gray-300 bg-white rounded-xl mt-6 md:mt-0">

        <h3 class="text-2xl font-medium mb-10 mt-2 uppercase p-3 items-center justify-center">Order summary</h3>


        <div class="space-y-1 text-gray-700 pb-3 border-b border-gray-300">

            <div class="flex justify-between ml-2  mr-2 font-medium">
                <p>Subtotal</p>
                <p>$250</p>
            </div>

            <div class="flex justify-between ml-2  mr-2 font-medium">
                <p>Delivery</p>
                <p>$50</p>
            </div>

            <div class="flex justify-between ml-2 mr-2 font-medium">
                <p>Tax</p>
                <p>$50</p>
            </div>

            <div class="flex justify-between ml-2  mr-2 font-medium">
                <p>Total</p>
                <p>$950</p>
            </div>

            <div class="flex justify-between ml-2  mr-2 font-medium">
             <input type="text" class="pl-4 w-full border border-r-0 border-primary py-2 px-3 rounded-lg
              focus:ring-primary focus:border-primary text-sm"/>
                <button type="submit" class="bg-primary border border-primary text-white px-5 font-medium rounded-lg">Apply</button>
            </div>

          




        </div>
        <a href="#" class="bg-primary border text-center border-primary text-white px-5 py-4 mt-6 block font-medium rounded-lg w-full">
            Process to checkout
                        </a>
                        


      



    </div>













</div>


    </div> 
  )
}

export default CartScreen