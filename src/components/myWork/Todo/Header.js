import React from 'react';


const Header = (props) => {
    const total = props.numTodos;
      return(
        <div className='card-header'>
          <h3 className='card-header-title header'>
            You have {total === 0 ? "Zero" : total} Todos
          </h3>
        </div>
      )
    }
export default Header;
