import React from "react";
import UiButton from "./UIkit/UiButton";
import RulePage from "./RulePage";
import { useState } from "react";


const Rule = ({ ruleShow, setRuleShow }) => {
  const closeRule = () => {
    setRuleShow(false);
  };
  const [isLast, setIsLast] = useState(false);
  const  [title, setTitle] = useState("この診断について")
  const [text,setText] = useState("この診断では学術的な指標を用いることで貴社が4つの組織文化のうちどの傾向が強いのかを測るのに役立ちます。")
  function changeTitleText() {
    setTitle("診断の受け方")
    setText("質問が6つありそれぞれ4つの選択肢があります。企業の雰囲気の合計を100としてそれぞれの選択肢がどの程度重要であるか合計値が100になるように振り分けてください")
    setIsLast(!isLast)
  }
  if (ruleShow) {
    return (
      <>
        <div id="overlay" onClick={closeRule}>
          <div id="content" onClick={(e) => e.stopPropagation()}>
            <div>
              <h1>{title}</h1>
            </div>
            <div>
              <p>
                {text}
                {/* この診断では学術的な指標を用いることで<br></br>
                あなたが企業の4つの文化のうちどれが<br></br>最もマッチするかを測るのに役立ちます。 */}
              </p>
            </div>
            { isLast ?
          <UiButton 
              buttonText="閉じる"
              color="secondary"
              onClick={closeRule}
          /> :
          <UiButton 
          buttonText="次へ"
          color="secondary"
          onClick={changeTitleText}
          />
        }
            
          </div>
        </div>
      </>
    );
  }
};

export default Rule;
