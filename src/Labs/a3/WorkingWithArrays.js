import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays"
import ForLoops from "./ForLoops"
import MapFunction from "./MapFunction"
import JsonStringify from "./JsonStringify";
import FindFunction from "./FindFunction";
import FilterFunction from "./FilterFunction";
import TemplateLiterals from "./TemplateLiterals";


function WorkingWithArrays(){

var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);

let variableArray1 = [
   functionScoped,   blockScoped,
   constant1,        numberArray1,   stringArray1
];


return (
    <>
      <h2>Working with Arrays</h2>
      numberArray1 = { numberArray1 }<br />
      stringArray1 = { stringArray1}<br />
      variableArray1 = { variableArray1 }<br />
      <h3>Array index and length</h3>
      lenght1 = {length1}<br />
      index1 = {index1}<br />
      <AddingAndRemovingDataToFromArrays/>
      <ForLoops/>
      <MapFunction/>
      <JsonStringify/>
      <FindFunction/>
      <FilterFunction/>
      <TemplateLiterals/>



    </>
  )
}
export default WorkingWithArrays