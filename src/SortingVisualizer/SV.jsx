import React from "react";
import "./SV.css";
import { MergeSortAnimations } from "./MergeSort.js";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 250; i++) {
      array.push(Math.floor(Math.random() * (730 - 5 + 1) + 5));
    }
    this.setState({ array });
  }

  mergesort() {
    const animations = MergeSortAnimations(this.state.array);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const iscolorchange = i % 3 !== 2;
      if (iscolorchange) {
        const [bar1index, bar2index] = animations[i];
        const bar1style = arrayBars[bar1index].style;
        const bar2style = arrayBars[bar2index].style;
        const color = i % 3 === 0 ? "red" : "aqua";
        setTimeout(() => {
          bar1style.backgroundColor = color;
          bar2style.backgroundColor = color;
        }, i * 3);
      } else {
        setTimeout(() => {
          const [bar1index, newHeight] = animations[i];
          const bar1style = arrayBars[bar1index].style;
          bar1style.height = `${newHeight}px`;
        }, i * 3);
      }
    }
  }

  quicksort() {}

  bubblesort() {}

  heapsort() {}

  render() {
    const { array } = this.state;
    return (
      <div className="arrContainer">
        {array.map((value, idx) => (
          <div className="array-bar" style={{ height: `${value}px` }}></div>
        ))}
        <br></br>
        <br></br>

        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.mergesort()}>Merge Sort</button>
        <button onClick={() => this.quicksort()}>Quick Sort</button>
        <button onClick={() => this.bubblesort()}>Bubble Sort</button>
        <button onClick={() => this.heapsort()}>Heap Sort</button>
      </div>
    );
  }
}
