import React, { useState, useEffect } from 'react'
import Switches from '../Switch';


const Card = () => {
  //HERE WE ARE USING THE NEW WAY WHICH IS USESTATE, WHAT THIS DOES IS IT TAKES IN TWO THINGS, FIRST IS THE CURRENT STATE OR WHAT YOUR TRYING TO CHANGE, SECOND WOULD BE THE SETTER FUNCTION OR THE NEW WAY OF DOING SETSTATE
  const [checked, setIsChecked ] = useState(true)

 //HERE WE ARE USING THE NEW WAY OF SETTING STATE IN REACT BY USING THE SET ISCHECKED
  const handleChange = (event) => {
    setIsChecked(!checked);
    console.log('inside handle change',checked);
  };
//WE USE THE USEEFFECT FUNCTION WHEN WE ARE USING FETCH OR FOR BUTTONS AS WELL I NEED TO LOOK MORE INTO THIS SHIT
  useEffect(() => {
    console.log('inside of use effect' ,checked)
  }, [])
  
  return (
    <div>
          <Switches checked={checked} handleChange= {handleChange}/>
        </div>
      )
    } 
  

export default Card;

// /**
//  * BELOW WE ARE CREATING A CLASS BASED COMPONENT 
//  * MATT IS SHOWING US HOW TO USE BOTH CLASS BASED AND FUNCTION BASED COMPONENTS
//  * WE ARE ALSO ABLE TO PASS PROPS UP, OR I GUESS A BETTER WAY OF EXPLAINING IT IS WHEN WE HAVE OUR SWITCH CARD WE ARE ABLE TO PASS THE PROPS DOWN FROM THE CARD COMPONENT
//  */
// class Card extends Component {
//   constructor(props){
//     super(props);
//     // WE ARE SETTING OUR STATE TO TRUE OR FALSE DON'T THINK IT MATTERS
//     this.state = {
//       isOn: true,
//     }
   
//   }
//   //WE CREATED THIS HANDLE CHANGE THAT WE ARE ABLE TO PASS DOWN TO OUR SWITCH THRU THE POWER OF PROPS
//   handleChange = (event) => {
//     // THIS BASICALL SAYS, WHEN THE BUTTON IS PRESSED SWITCH THE STATE OF THE BUTTON TO THE OPPOSITE OF WHAT THE STATE CURRENTLY IS
//     this.setState({isOn: !this.state.isOn});
//   };
//   //I BEILEVE WITH THIS FUNCTION WE ARE SEEING WHEN OUR CURRENT STATE, FOR EXAMPLE IF THE STATE OF ISON IS TRUE IT WILL SHOW TRUE
//   componentDidMount(){
//     console.log('MOUNTED', this.state.isOn);
//   }
// //BUT THEN WHEN WE CLICK OUR BUTTON THE HANDLE CHANGE KICKS IN AND THE STATE IS CHANGED TO FALSE, SO THE MOUNT WILL CHANGE TO UPDATE SINCE IT HAS UPDATED AND THEN IT WILL KEEP SWITCHING TO TRUE AND FALSE
//   componentDidUpdate(){
//     console.log('UPDATED', this.state.isOn);
//   }

// //BELOW WITH THE SWITCHES COMPONENT WE ARE ADDING THE PROPS OF ISON AS WELL AS HANDLE CHANGE, WE ARE THEN ABLE TO OVERWITE THE PROPS OF THE SWITCHES TO THE PROPS WE CREATED OR SET IN THE CARD COMPONENT
//     render() {
//       return (
//         <div>
//           <Switches isOn={this.state.isOn} handleChange= {this.handleChange}/>
//         </div>
//       )
    
//     }
//   } 

// export default Card;