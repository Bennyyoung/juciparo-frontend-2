import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {

    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);

    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = value => {
        setHoverValue(value)
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }
    
    const colors = {
        grey: "#a9a9a9",
        orange: "#FFBA5A"
    }

    const stars = Array(5).fill(0)


  return (
    <div>
        <div class="flex">
            {stars.map((_, index) => {
                return (
                    <FaStar
                    key={index}
                    size={10}
                    style={{
                        marginRight:"-2px",
                        cursor:"pointer",
                        marginLeft: "7px"
                    }}
                    color = {(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseLeave}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default StarRating;