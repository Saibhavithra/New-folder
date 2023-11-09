import{Component} from "react";
import './index.css';
class MyClassComponenet extends Component{

    constructor() {
        super();
    
        this.state ={
          num1 : 0,
          num2 : 0,
        }
      }
    
      updateNum1(event) {
        this.setState({
          num1: event.target.value
        });
      }
    
      updateNum2(event){
        this.setState({
          num2: event.target.value
        });
      }
    
      render() {
        const { num1, num2 } = this.state;
    
        const balance = parseInt(num1) - parseInt(num2);
    
        return (
          <div>
            <h2>Class Component</h2>
            <label>Budget</label>
            <input
              type='number'
              value={num1}
              onChange={this.updateNum1.bind(this)}
            />
            <label>Expense</label>
            <input
              type='number'
              value={num2}
              onChange={this.updateNum2.bind(this)}
            />
    
            <h1>Balance:{balance}</h1>
          </div>
        );
      
    }   }
export default MyClassComponenet;

 
    