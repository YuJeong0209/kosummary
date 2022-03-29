
import './App.css';
import './Word.js';
import Chart from './Word.js';

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>

export default function App(){
  return(
    <div id = "all">
    
      <span class = "title">SUMMARY</span>
      <div class = "explain">
      <p> CREATOR </p>
      <p> CONTENTS </p>
      </div>

      <div id = "word">
        단어 빈도수
        
      </div>
    

    </div>
  );
}