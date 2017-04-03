import React from 'react'

export default class DrinkDetails extends React.Component{

  constructor(props){
    super(props)



    this.handleAddButtonClick = this.handleAddButtonClick.bind(this)
  }

  render(){
    if(!this.props.drinkDetail){
    return <p></p>
    }

    let drinksMap = this.props.drinkDetail.drinksMenu.map((drink, index) => {
      return(
        <div className="drink-detail" key={index}>
          <img src={drink.drinkSrc} />
          <h2>{drink.drinkName}</h2>
          <h3>{drink.price}</h3>
          <button onClick={this.handleAddButtonClick} value={drink}>Add to Round</button>
        </div>
      )
    })

    return(
      <div className="drink-list">
        {drinksMap}
      </div>
    )
  }

  handleAddButtonClick(event){
    console.log(event.target.value);
  }

}
