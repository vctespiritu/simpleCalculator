import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {

    @track calcExpressionFieldValue = '';

    handleClick(e){

        if(!(e.target.name === 'CLR' || e.target.name === '=')){
            this.calcExpressionFieldValue += e.target.name;
        }else if(e.target.name === 'CLR'){
            this.calcExpressionFieldValue = '';
        }else if(e.target.name === '='){
            // TODO
        }
    }
}