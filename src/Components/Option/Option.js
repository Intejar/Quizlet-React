import React from 'react';

const Option = ({answer}) => {
    return (
        <div>
            <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="bordered-checkbox-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{answer}</label>
            </div>
        </div>
    );
};

export default Option;