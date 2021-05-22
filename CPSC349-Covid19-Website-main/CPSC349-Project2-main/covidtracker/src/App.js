import React from 'react';  
import styles from './App.module.css'  
import {Cards, Charts, CountryPicker, Footer, Map } from './Components'  
import {fetchData} from './API'; 
import coronaImage from './images/coronavirusbanner.jpg';  
class App extends React.Component {  
    state = {         
    data: {},  
    country: '',  
    }  
    async componentDidMount(){  
        const data = await fetchData();  
       
        this.setState({data});  
    }  
  
     handleCountryChange = async (country) => {          
        const data = await fetchData(country);  
        this.setState({data: data, country: country});  
     }  
  
    render(){  
        const {data, country } = this.state;  
        return(  
        <div  className={styles.container} >  
            <img className={styles.image} src={coronaImage} alt="Covid-19"/>  
            <Cards data={data}/>  
            <Map />
            <CountryPicker handleCountryChange={this.handleCountryChange}/>  
            <Charts data={data} country={country}/>  
            <Footer />
        </div>  
    )  
}  
}  
  
export default App; 