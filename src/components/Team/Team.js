import React from 'react'
import './Team.css'
import Card from './Card'
import zidane from '../../assets/assets/zidane.jpg'
import toni from '../../assets/assets/tonikroos.jpg'
import iker from '../../assets/assets/ikercasillas.jpg'
import james from '../../assets/assets/james.jpg'
import cr from '../../assets/assets/christiano.jpg'


export default function Team() {
    const team = [
        {
            name : "Zidane",
            role : "Leadership",
            link : [ true,true,true],
            src : zidane
        },
        {
            name : "Toni Kroos",
            role : "Product Developer",
            link : [ true,true,false],
            src : toni
        },
        {
            name : "Iker Casillas",
            role : "Marketing Strategy",
            link : [ false,true,false],
            src : iker
        }
        ,{
            name : "James",
            role : "Product Designer",
            link : [ true,true,true],
            src : james
        },
        {
            name : "Cristiano",
            role : "Financial Operation",
            link : [ true,false,true],
            src : cr
        }

    ]
  return (
    <>
    <div className='center2'>
        <div className='team_desc'>

            Without bonding and coordination, every project is a failure.Look at who makes KickSUP great. ;)
        </div>
        <div>

        <div className='note-list'>
            {
                team.map((team)=>
                    <Card team = {team}/>
                )
            }
         
        </div>
        </div>

        <div className='kc'>
            & kcbhola ;)
        </div>
    </div>
    </>
  )
}
