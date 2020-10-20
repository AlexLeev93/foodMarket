import React from 'react'
import { IconWrapper } from '../components/IconWrapper'


const ArrowLeftIcon = (props) => {
    return(
        <IconWrapper mt={props.mt} mb={props.mb} ml={props.ml}  mr={props.mr}>
            <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.6482 0.2256C6.93552 -0.0751999 7.38784 -0.0751999 7.67516 0.2256C7.95277 0.516237 7.95277 0.999955 7.67516 1.28991L2.4679 6.74157H19.6511C20.0517 6.74157 20.3804 7.07488 20.3804 7.49424C20.3804 7.9136 20.0517 8.25776 19.6511 8.25776H2.4679L7.67516 13.6992C7.95277 14 7.95277 14.4844 7.67516 14.7744C7.38784 15.0752 6.93552 15.0752 6.6482 14.7744L0.208206 8.03216C-0.0694021 7.74152 -0.0694021 7.2578 0.208206 6.96784L6.6482 0.2256Z" fill="#32564A"/>
            </svg>
        </IconWrapper>
    )
}

export default ArrowLeftIcon