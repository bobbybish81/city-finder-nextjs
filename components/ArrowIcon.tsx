import React, { useContext } from 'react';
import { AppContext } from '../pages/_app';
import { BsChevronUp } from 'react-icons/bs';

const ArrowIcon = () => {

  const { state, setState } = useContext(AppContext);

  return (
    <BsChevronUp
      onClick={(() => state.displayGuide ? 
        setState({
          ...state,
          displayGuide: false,
        }) :
        setState({
          ...state,
          displayGuide: true,
        })
      )}
      style={{
        transform: state.displayGuide ? 'rotate(0)' : 'rotate(180deg)',
        fontSize: '2rem',
        cursor: 'pointer'
      }}/>
  );
};

export default ArrowIcon;