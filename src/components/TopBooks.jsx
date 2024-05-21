import React from "react";

const TopBooks = (props) => {
    return (
        <div>
            {/* <!-- aside --> */}
            <div class="pr-5">
                <div class="p-6 h-60 bg-blue-800 rounded-lg">
                    <p>Yoshlar portali</p>
                    <h2 class="font-bold text-xl max-w-60 mt-4">Aynan
                        <span class="text-yellow-300">siz</span>
                        uchun qanday
                        imtiyozlar borligini bilib oling
                    </h2>
                    <button type="button" class="mt-6 text-white hover:bg-blue-800 focus:ring-4 
          focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 
          py-2 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800
          ml-auto">Batafsil
                        <i class="fa-solid fa-door-open"></i>
                    </button>
                </div>
                <div class="mt-6 p-4 h-auto bg-zinc-900  rounded-lg">
                    <h1 class="text-xl font-bold ">Top kitoblar</h1>
                    <div class="grid grid-cols-1 mt-3">
                        <div class="grid grid-cols-3 mt-2">
                            <div class="col-span-1">
                                <img src="../asserts/books/chessbook1.png" alt="chessbook1" />
                            </div>
                            <div class="text-left col-span-2">
                                <h2 class="text-sm font-bold w-full">Shaxmatdagi qobiliyatingizga baho bering</h2>
                                <p class="mt-4 opacity-70 tex">John Doe</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 mt-5">
                            <div class="col-span-1">
                                <img src="../asserts/books/2.png" alt="2.png" />
                            </div>
                            <div class="text-left col-span-2">
                                <h2 class="text-sm font-bold w-full">Shaxmatdagi qobiliyatingizga baho bering</h2>
                                <p class="mt-4 opacity-70 tex">A.Nimzonovich</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 mt-5">
                            <div class="col-span-1">
                                <img src="../asserts/books/3.png" alt="3.png" />
                            </div>
                            <div class="text-left col-span-2">
                                <h2 class="text-sm font-bold w-full">Shaxmatdagi qobiliyatingizga baho bering</h2>
                                <p class="mt-4 opacity-70 tex">D.Bronshtain</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 mt-5">
                            <div class="col-span-1">
                                <img src="../asserts/books/4.png" alt="b.Fishcher" />
                            </div>
                            <div class="text-left col-span-2">
                                <h2 class="text-sm font-bold w-full">Shaxmatdagi qobiliyatingizga baho bering</h2>
                                <p class="mt-4 opacity-70 tex">B.Fischer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBooks;