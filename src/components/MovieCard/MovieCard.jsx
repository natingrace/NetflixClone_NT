import React from 'react'
import Style from './MovieCard.module.css'
import { FaPlayCircle } from "react-icons/fa";
import {BsPlusCircle}from "react-icons/bs"
import {GoCheckCircleFill}from "react-icons/go"
import {IoIosArrowDropdownCircle}from "react-icons/io"

const imageBase='https://image.tmdb.org/t/p/w500'

export default function MovieCard({movie}) {
    const genres=['Adventure','Action','Thriller']
  return (
    <div className={Style.cardWrapper}>
        {/* Poster image */}
        <img className={Style.poster} src={`${imageBase}${movie?.poster_path}`} alt="poster image" />

        {/* hover card */}
        <div className={Style.hoverCard}>
            {/* img */}
            <img className={Style.hoverImage} src={`${imageBase}${movie?.poster_path}`}alt="hover image" />
            {/* badge */}
            <div className={Style.badge}>recently added</div>
            {/* button row */}
            <div className={Style.buttonRow}>
                <FaPlayCircle color='white' size={30}/>
                <BsPlusCircle color='white' size={30}/>
                <GoCheckCircleFill color='white' size={30}/>
                <IoIosArrowDropdownCircle color='white' size={30} className={Style.circleButtonSmall}/>
            </div>
            {/* meta data row */}
        <div className={Style.metaRow}>
            <span className={Style.tag}>U/A 16+</span>
            <span className={Style.tag}>Movies</span>
            <span className={Style.tag}>HD</span>
        </div>
            {/* genres */}
            <div className={Style.genres}>
                {genres?.map((g,index)=>{
                    return <span key={index}>
                        {g}
                        {
                            index< genres.length-1 && (<span className={Style.dot}> • </span>)
                        }
                        </span> 
                    })}
            </div>
        </div>
    </div>
  )
}
