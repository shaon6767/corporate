import React from 'react'
import Container from './Container'

const Pagination = ({pageNumber,paginate,next,previous,currentPage}) => {

    return (
        <Container>
            <div className="pl-[250px]">
                <nav aria-label="Page navigation example">
                    <ul className="inline-flex -space-x-px text-lg">
                        <li onClick={previous}>
                            <a className="flex items-center justify-center px-4 h-9 ms-0 cursor-pointer  leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg ">Previous</a>
                        </li>

                        {pageNumber.map((item,i)=>(
                        <li onClick={()=>paginate(item)} >
                            <a className={`${currentPage == i + 1 ? 'flex items-center justify-center px-4 h-9 leading-tight cursor-pointer text-[#fff] bg-[#262626] border border-gray-300' : 'flex items-center justify-center px-4 h-9 leading-tight cursor-pointer text-gray-500 bg-white border border-gray-300'}`}>{item + 1}</a>
                        </li>
                        ))}
                        <li onClick={next}>
                            <a className="flex items-center justify-center px-4 h-9 cursor-pointer  leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg ">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </Container>

    )
}

export default Pagination