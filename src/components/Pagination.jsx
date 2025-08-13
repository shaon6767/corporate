import React from 'react'
import Container from './Container'

const Pagination = ({pageNumber}) => {
 
    return (
        <Container>
            <div className="pl-[250px]">
                <nav aria-label="Page navigation example">
                    <ul className="inline-flex -space-x-px text-lg">
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-9 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                        </li>

                        {pageNumber.map((item)=>(
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-9 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{item + 1}</a>
                        </li>
                        ))}
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-9 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </Container>

    )
}

export default Pagination