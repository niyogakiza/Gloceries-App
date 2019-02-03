import React, { Component } from 'react'
import  { StackNavigator}  from 'react-navigation'
import ShoppingList from './screens/ShoppingList'
import AddProduct from './screens/AddProduct'

const Navigator = StackNavigator({
    ShoppingList: { screen: ShoppingList },
    AddProduct: { screen: AddProduct }
});

export default class Main extends Component {
    constructor(){
        super()
    }

    render(){
        return <Navigator/>
    }

}
