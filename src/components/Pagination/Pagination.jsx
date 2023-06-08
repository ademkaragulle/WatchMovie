import { current } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useLocation, useSearchParams } from 'react-router-dom'

export const Pagination = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const firstParamPage = searchParams.get('page')
    const [currentPage, setCurrentPage] = useState(firstParamPage ? Number(firstParamPage) : 1)
    const pages = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2]




    const moveScroll = () => {
        let scrollPagination = document.getElementById('movies')
        if (scrollPagination) {
            scrollPagination.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const changePage = (event) => {
        moveScroll()
        setCurrentPage(Number(event.target.value))
        setSearchParams({ page: `${Number(event.target.value)}` })
    }

    const changeArrowPage = (param, currentPage) => {
        const backOrNext = param === 'back' ? true : false;
        if (backOrNext && currentPage > 1) {
            setCurrentPage(currentPage - 1)
            setSearchParams({ page: `${Number(currentPage) - 1}` })
        } else if (!backOrNext) {
            setCurrentPage(currentPage + 1)
            setSearchParams({ page: `${Number(currentPage) + 1}` })
        }
        moveScroll()

    }

    useEffect(() => {
        if (searchParams.get("page") === null) {
            searchParams.set("page", "1");
            setSearchParams(searchParams);
        }
    }, [searchParams, setSearchParams]);


    return (
        <div className='pagination'>
            <button onClick={() => changeArrowPage('back', currentPage)} className='pagination-item pagination-arrow'>
                <FiArrowLeft />
            </button>
            {pages.map((item) => {
                if (item > 0) {
                    if (item === currentPage) {
                        return (
                            <div key={item}>
                                <button className='current-page pagination-item' value={item} onClick={changePage}>{item}</button>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div key={item}>
                                <button className='other-pages pagination-item' value={item} onClick={changePage}>{item}</button>
                            </div>
                        )
                    }
                }
            })}
            <button type='submit' onClick={() => changeArrowPage('next', currentPage)} className='pagination-item pagination-arrow'>
                <FiArrowRight />
            </button>
        </div>
    )
}
