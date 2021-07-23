import React, { Component ,useState,useEffect} from 'react'
import '../Styles/valuyta.scss'
import {FormControl, Paper , Select , TextField,Button} from "@material-ui/core"
import Axios from "axios"
import {SiConvertio} from 'react-icons/si'





export class Valuyta extends Component {
    render() {
        return (
            <Paper className="converter container">
              <div className="main-box container">
                <div className="prices">
                    <h4>Currency</h4>
                    <table>
                        <tr>
                            <th className="forleft">Currency</th>
                            <th>Buy</th>
                            <th>Sell</th>
                        </tr>

                        <tr>
                            <td className="forleft">USD</td>
                            <td>1,6910</td>
                            <td>1,7010</td>
                        </tr>

                        <tr>
                            <td className="forleft">EUR</td>
                            <td>2,00000</td>
                            <td>2,0850</td>
                        </tr>
                        <tr>
                            <td className="forleft">RUB</td>
                            <td>0,0200</td>
                            <td>0,0230</td>
                        </tr>
                    </table>
                </div>
                 
                 <Calculator/>
                 
              </div>
            </Paper>
        )
    }
}

export default Valuyta



const Calculator = () => {
    const [text1, settext1]= useState(1);
    const [text2, settext2]= useState(1);
    const [country, setcountry]= useState([]);
    const [country2, setcountry2]= useState([]);
    const [value1, setvalue1]= useState(1);
    const [value2, setvalue2]= useState(1);


    useEffect(() => {
        getdata();
    }, [])

   async function getdata(){
        const result =await Axios.get("http://data.fixer.io/api/latest?access_key=ac8959250eee046ce8fc684c020760cd");
        setcountry(result.data.rates);
        setcountry2(result.data.rates);
    }

    function convert(e){
        e.preventDefault();
        let num = (value2/value1)*text1;
        settext2(num);
    }

    return(
        <div className="converter-box">
            <div className="paper container">
            <form onSubmit={convert}>  
             <h4>Currency Converter</h4>
                <div>
                 <TextField id="standart-basic" color="primary" className="textfield" value={text1 || ""} onChange={(e) =>settext1(e.target.value)} autoComplete="off"/>
                 <FormControl id="standart-basic" className="dropdown" onChange={(e) =>setvalue1(e.target.value)}>
                  <Select native >
                      {Object.keys(country).map((value,index)=><option key={index} value={country[value]}>{value}</option>)}
                  </Select> 
                  <Button type="submit" variant="outlined" className="btn"><SiConvertio className="icon"/></Button>
                  </FormControl>
                </div>
                <div>
                <TextField id="standart-basic" className="textfield" value={text2 || ""} />
                <FormControl id="standart-basic" className="dropdown" onChange={(e) =>setvalue2(e.target.value)} >
                  <Select native>
                  {Object.keys(country2).map((value,index)=><option key={index} value={country[value]}>{value}</option>)}
                  </Select>
                  </FormControl>
                </div>
                </form>  

                <a href="#">Details</a>
            </div>
        </div>
    );
};