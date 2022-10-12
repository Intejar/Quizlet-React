import React from 'react';
import { Square2StackIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Questions = ({ question }) => {
    const answers = question.options
    // console.log(answers.map(answer => console.log(answer)));
    const GetCorrectAns = () => {
        toast(question.correctAnswer);
    }
    return (
        <div className='border border-red-200 my-10'>
            <div className='flex justify-evenly'>
                <Square2StackIcon className='h-5 w-5'></Square2StackIcon>
                <h1>{question.question}</h1>
                <QuestionMarkCircleIcon onClick={GetCorrectAns} className='h-5 w-5 hover:cursor-pointer'></QuestionMarkCircleIcon>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
            <div className='grid grid-cols-2 m-5 gap-5'>
                {
                    answers.map(answer => <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                        <input onClick={() => {

                            if (answer === question.correctAnswer) {

                                let correct = document.getElementById('correct')
                                let total = parseInt(correct.innerText) + 1;
                                correct.innerText = total;
                                toast.success('your answer is correct!', {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                    });
                            }
                            else {
                                let incorrect = document.getElementById('incorrect')
                                let intotal = parseInt(incorrect.innerText) + 1;
                                incorrect.innerText = intotal;
                                toast.error('your ans is not correct!', {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                    });
                            }
                        }} id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{answer}</label>
                    </div>)
                }

            </div>

        </div>
    );
};

export default Questions;