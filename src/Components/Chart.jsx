import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import RaderGraph from "./RaderGraph";
import PrimaryButton from "./UIkit/PrimaryButton";
import Modal from "./Modal";
import styled from "styled-components";
import Device from "../style/Device";
import Header from "./Header";
import TextField from "@material-ui/core/TextField";
import Rule from "./Rule";

const DIV_chart = styled.div`
  @media ${Device.tablet} {
    padding-top: 100px;
    padding-bottom: 20px;
  }
  @media ${Device.laptop} {
    padding-top: 100px;
  }
`;
const DIV_chartMain = styled.div`
  @media ${Device.tablet} {
  }
`;
const DIV_question = styled.div`
  @media ${Device.mobileS} {
  }
  @media ${Device.tablet} {
    width: 80%;
    margin: 0 auto;
    line-height: 1.6rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    & h1 {
      font-size: 24px;
    }
  }
  @media ${Device.laptop} {
    /* border: 1px solid #333; */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    max-width: 1090px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 20px;
    margin-bottom: 20px;
    & h1 {
      font-size: 24px;
    }
    & p {
      font-size: 16px;
    }
  }
`;
const DIV_questionPart = styled.div`
  @media ${Device.tablet} {
    margin-bottom: 50px;
  }
`;
const DIV_button = styled.div`
  @media ${Device.tablet} {
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
    & button {
      width: 100%;
      margin: 0 auto;
    }
  }
  @media ${Device.laptop} {
    margin: 0 auto;
    width: 500px;
    padding-bottom: 50px;
    & button {
      width: 100%;
      margin: 0 auto;
    }
  }
`;
const Chart = () => {
  // let [items, updateItems] = useState([
  //   {culture: '家族文化', A: 80},
  //   {culture: 'イノベーション文化', A: 98},
  //   {culture: 'マーケット文化', A: 86,},
  //   {culture: '官僚文化', A: 99},
  // ]);
  const [family, setFamily] = useState(100);
  const [innovation, setInnovation] = useState(100);
  const [market, setMarket] = useState(100);
  const [bure, setBure] = useState(100);
  //各問いについてのstate
  // Q1
  const [q01Fam, setQ01Fam] = useState(0);
  const [q01Inno, setQ01Inno] = useState(0);
  const [q01Mar, setQ01Mar] = useState(0);
  const [q01Bure, setQ01Bure] = useState(0);
  // Q2
  const [q02Fam, setQ02Fam] = useState(0);
  const [q02Inno, setQ02Inno] = useState(0);
  const [q02Mar, setQ02Mar] = useState(0);
  const [q02Bure, setQ02Bure] = useState(0);
  // Q3
  const [q03Fam, setQ03Fam] = useState(0);
  const [q03Inno, setQ03Inno] = useState(0);
  const [q03Mar, setQ03Mar] = useState(0);
  const [q03Bure, setQ03Bure] = useState(0);
  // Q4
  const [q04Fam, setQ04Fam] = useState(0);
  const [q04Inno, setQ04Inno] = useState(0);
  const [q04Mar, setQ04Mar] = useState(0);
  const [q04Bure, setQ04Bure] = useState(0);
  // Q5
  const [q05Fam, setQ05Fam] = useState(0);
  const [q05Inno, setQ05Inno] = useState(0);
  const [q05Mar, setQ05Mar] = useState(0);
  const [q05Bure, setQ05Bure] = useState(0);
  // Q6
  const [q06Fam, setQ06Fam] = useState(0);
  const [q06Inno, setQ06Inno] = useState(0);
  const [q06Mar, setQ06Mar] = useState(0);
  const [q06Bure, setQ06Bure] = useState(0);
  //バリデーションチェックstate
  const [firstQues, setFirstQues] = useState(0);
  const [secondQues, setSecondQues] = useState(0);
  const [thirdQues, setThirdQues] = useState(0);
  const [fourthQues, setFourthQues] = useState(0);
  const [fifthQues, setFifthQues] = useState(0);
  const [sixthQues, setSixthQues] = useState(0);
  // 合計値のstate
  const [totalFam, setTotalFam] = useState(0);
  const [totalInno, setTotalInno] = useState(0);
  const [totalMar, setTotalMar] = useState(0);
  const [totalBure, setTotalBure] = useState(0);

  //結果となる平均値のstate
  const [resultFam, setResultFam] = useState(0);
  const [resultInno, setResultInno] = useState(0);
  const [resultMar, setResultMar] = useState(0);
  const [resultBure, setResultBure] = useState(0);

  //問１のバリデーション（合計値が100であるかチェック）
  useEffect(() => {
    setFirstQues(
      Number(q01Fam) + Number(q01Inno) + Number(q01Mar) + Number(q01Bure)
    );
  }, [q01Fam, q01Inno, q01Mar, q01Bure]);
  console.log(firstQues);
  //問2のバリデーション（合計値が100であるかチェック）
  useEffect(() => {
    setSecondQues(
      Number(q02Fam) + Number(q02Inno) + Number(q02Mar) + Number(q02Bure)
    );
  }, [q02Fam, q02Inno, q02Mar, q02Bure]);

  //問3のバリデーション（合計値が100であるかチェック）
  useEffect(() => {
    setThirdQues(
      Number(q03Fam) + Number(q03Inno) + Number(q03Mar) + Number(q03Bure)
    );
  }, [q03Fam, q03Inno, q03Mar, q03Bure]);
  //問4のバリデーション（合計値が100であるかチェック）
  useEffect(() => {
    setFourthQues(
      Number(q04Fam) + Number(q04Inno) + Number(q04Mar) + Number(q04Bure)
    );
  }, [q04Fam, q04Inno, q04Mar, q04Bure]);
  //問5のバリデーション（合計値が100であるかチェック）
  useEffect(() => {
    setFifthQues(
      Number(q05Fam) + Number(q05Inno) + Number(q05Mar) + Number(q05Bure)
    );
  }, [q05Fam, q05Inno, q05Mar, q05Bure]);
  //問6のバリデーション（合計値が100であるかチェック）
  useEffect(() => {
    setSixthQues(
      Number(q06Fam) + Number(q06Inno) + Number(q06Mar) + Number(q06Bure)
    );
  }, [q06Fam, q06Inno, q06Mar, q06Bure]);

  //famStateを監視して合計値を算出
  useEffect(() => {
    setTotalFam(
      Number(q01Fam) +
        Number(q02Fam) +
        Number(q03Fam) +
        Number(q04Fam) +
        Number(q05Fam) +
        Number(q06Fam)
    );
  }, [q01Fam, q02Fam, q03Fam, q04Fam, q05Fam, q06Fam]);

  //innoStateを監視して合計値を算出
  useEffect(() => {
    setTotalInno(
      Number(q01Inno) +
        Number(q02Inno) +
        Number(q03Inno) +
        Number(q04Inno) +
        Number(q05Inno) +
        Number(q06Inno)
    );
  }, [q01Inno, q02Inno, q03Inno, q04Inno, q05Inno, q06Inno]);
  //marStateを監視して合計値を算出
  useEffect(() => {
    setTotalMar(
      Number(q01Mar) +
        Number(q02Mar) +
        Number(q03Mar) +
        Number(q04Mar) +
        Number(q05Mar) +
        Number(q06Mar)
    );
  }, [q01Mar, q02Mar, q03Mar, q04Mar, q05Mar, q06Mar]);
  //bureStateを監視して合計値を算出
  useEffect(() => {
    setTotalBure(
      Number(q01Bure) +
        Number(q02Bure) +
        Number(q03Bure) +
        Number(q04Bure) +
        Number(q05Bure) +
        Number(q06Bure)
    );
  }, [q01Bure, q02Bure, q03Bure, q04Bure, q05Bure, q06Bure]);

  //各合計値を監視して平均値を算出する
  useEffect(() => {
    setResultFam(totalFam / 6);
    setResultInno(totalInno / 6);
    setResultMar(totalMar / 6);
    setResultBure(totalBure / 6);
  }, [totalFam, totalInno, totalMar, totalBure]);

  useEffect(() => {
    console.log(totalFam);
  }, [totalFam]);
  const items = [
    { culture: "家族文化", A: totalFam },
    { culture: "イノベーション文化", A: innovation },
    { culture: "マーケット文化", A: market },
    { culture: "官僚文化", A: bure },
  ];
  // Modalのstateに関する部分
  const [show, setShow] = useState(false);
  const openModal = () => {
    setShow(true);
  };
  // 最初に表示される診断方法についての部分
  const [ruleShow,setRuleShow] = useState(true);
  const closeRuleModal = () => {
    setRuleShow(false)
  }
  return (
    <DIV_chart>
      <Header
         ruleShow={ruleShow}
         setRuleShow={setRuleShow}
      />
      <DIV_chartMain>
        <DIV_question>
          <DIV_questionPart>
            <h1>1.顕著にみられる特徴</h1>
            <p>
              あなたの会社は、非常にフレンドリーな職場であり家族の延長のような存在ですか。また皆、よく価値観や考えを共有していますか
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => {
                setQ01Fam(e.target.value);
              }}
              value={q01Fam}
              size="small"
            />
          </DIV_questionPart>
          <DIV_questionPart>
            <p>
              あなたの会社は、非常に活発的で起業家精神にあふれるクリエイティブな職場ですか。また皆、リスクを恐れず進んで革新的な選択をしますか。
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => setQ01Inno(e.target.value)}
              value={q01Inno}
              size="small"
            />
          </DIV_questionPart>
          <DIV_questionPart>
            <p>
              あなたの会社は、過程の先にある結果を最も重視し、計画達成やマーケットでの目的の達成など目的意識がはっきりしていますか。
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => setQ01Mar(e.target.value)}
              value={q01Mar}
              size="small"
            />
          </DIV_questionPart>
          <DIV_questionPart>
            <p>
              あなたの会社は、組織の構造化により、とてもよく管理され、概して形式的な手続きが人々の仕事を規定していますか。
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => setQ01Bure(e.target.value)}
              value={q01Bure}
              size="small"
            />
          </DIV_questionPart>
        </DIV_question>
        <DIV_question>
          <h1>2.リーダーシップスタイル</h1>
          <DIV_questionPart>
            <p>
              あなたの会社のリーダーシップとは、部下を育て、人々を助けることと考えられていますか。
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => {
                setQ02Fam(e.target.value);
              }}
              value={q02Fam}
              size="small"
            />
          </DIV_questionPart>
          <DIV_questionPart>
            <p>
            あなたの会社のリーダーシップとは、起業家精神を発揮し、革新的であり、リスクを恐れないことと考えられていますか。
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => setQ02Inno(e.target.value)}
              value={q02Inno}
              size="small"
            />
          </DIV_questionPart>
          <DIV_questionPart>
            <p>
            あなたの会社のリーダーシップとは、現実的で、活動的で、目標達成（結果重視）であることと考えられていますか。
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => setQ02Mar(e.target.value)}
              value={q02Mar}
              size="small"
            />
          </DIV_questionPart>
          <DIV_questionPart>
            <p>
            あなたの会社のリーダーシップとは、調整を行い、組織化し、効率的な事と考えられていますか。
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => setQ02Bure(e.target.value)}
              value={q02Bure}
              size="small"
            />
          </DIV_questionPart>
        </DIV_question>
        <DIV_question>
          <h1>3.従業員管理</h1>
          <DIV_questionPart>
            <p>
              あなたの会社は、従業員のチームワークや従業員全員の合意、従業員の組織参加を重視していますか。
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => {
                setQ03Fam(e.target.value);
              }}
              value={q03Fam}
              size="small"
            />
          </DIV_questionPart>
          <DIV_questionPart>
            <p>
             あなたの会社は革新的、独創的で自由であること。リスクを恐れず自発的である従業員の活動を奨励しますか。
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => setQ03Inno(e.target.value)}
              value={q03Inno}
              size="small"
            />
          </DIV_questionPart>
          <DIV_questionPart>
            <p>
              あなたの会社は、マーケット志向のもと従業員へのハイレベルな要求、達成を重視していますか。
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => setQ03Mar(e.target.value)}
              value={q03Mar}
              size="small"
            />
          </DIV_questionPart>
          <DIV_questionPart>
            <p>
             あなたの会社は、就職の保証や将来予測の可能性、安定した関係や業務の流れ、規則により従業員を管理していますか。
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => setQ03Bure(e.target.value)}
              value={q03Bure}
              size="small"
            />
          </DIV_questionPart>
        </DIV_question>
        <DIV_question>
          <h1>4.組織を団結させるもの</h1>
          <DIV_questionPart>
            <p>
            あなたの会社は、忠誠心と信頼によって団結していますか。組織への献身的な態度が高い傾向にありますか。
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => {
                setQ04Fam(e.target.value);
              }}
              value={q04Fam}
              size="small"
            />
          </DIV_questionPart>
          <DIV_questionPart>
            <p>
            あなたの会社は、革新と新規開発へ全力を注ぐことで団結していますか。また、業界の最先端であることを重要視していますか。
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => setQ04Inno(e.target.value)}
              value={q04Inno}
              size="small"
            />
          </DIV_questionPart>
          <DIV_questionPart>
            <p>
            あなたの会社は、ゴールや目標の達成、成功により団結していますか。また、社外の評判や名声が共通の関心事ですか
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => setQ04Mar(e.target.value)}
              value={q04Mar}
              size="small"
            />
          </DIV_questionPart>
          <DIV_questionPart>
            <p>
           あなたの会社は、形式的なルールと方針により束ねられていますか。また、円滑な業務活動を行う組織を維持することを重視していますか。
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => setQ04Bure(e.target.value)}
              value={q04Bure}
              size="small"
            />
          </DIV_questionPart>
        </DIV_question>
        <DIV_question>
          <h1>5.戦略的に重視するもの</h1>
          <DIV_questionPart>
            <p>
            あなたの会社は、人材開発に重きを置いていますか。また、高い信頼、オープンなコミュニケーション、組織活動への参加を重要視していますか。
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => {
                setQ05Fam(e.target.value);
              }}
              value={q05Fam}
              size="small"
            />
          </DIV_questionPart>
          <DIV_questionPart>
            <p>
            あなたの会社は、新しい資源の獲得と次にチャレンジすること、自ら作り出すことに重きを置いていますか。
また、新しいことへの挑戦と機会を探すことを重要視していますか。
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => setQ05Inno(e.target.value)}
              value={q05Inno}
              size="small"
            />
          </DIV_questionPart>
          <DIV_questionPart>
            <p>
            あなたの会社は、競争力と目標の達成に重きを置いていますか。また高い目標を達成することとマーケットリーダーになることを重要視していますか。
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => setQ05Mar(e.target.value)}
              value={q05Mar}
              size="small"
            />
          </DIV_questionPart>
          <DIV_questionPart>
            <p>
            あなたの会社は、変わらない永続性と安定性の確保に重きを置いていますか。また、効率性、統制、円滑な業務活動を重要視していますか。
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => setQ05Bure(e.target.value)}
              value={q05Bure}
              size="small"
            />
          </DIV_questionPart>
        </DIV_question>
        <DIV_question>
          <h1>6.成功の基準</h1>
          <DIV_questionPart>
            <p>
            あなたの会社は、人材開発、チームワーク、従業員の組織への献身があることを成功と定義していますか。
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => {
                setQ06Fam(e.target.value);
              }}
              value={q06Fam}
              size="small"
            />
          </DIV_questionPart>
          <DIV_questionPart>
            <p>
            あなたの会社は、独創的または最新の製品を保有していることを成功と定義していますか。
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => setQ06Inno(e.target.value)}
              value={q06Inno}
              size="small"
            />
          </DIV_questionPart>
          <DIV_questionPart>
            <p>
            あなたの会社は、市場で勝つことやライバル企業をしのぐことを成功と定義していますか。
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => setQ06Mar(e.target.value)}
              value={q06Mar}
              size="small"
            />
          </DIV_questionPart>
          <DIV_questionPart>
            <p>
            あなたの会社は、高い効率性を成功と定義し信頼できる商品、サービスの供給や円滑なスケジュール活動、低コストの生産を重要視していますか。
            </p>
            <TextField
              variant="outlined"
              type="number"
              onChange={(e) => setQ06Bure(e.target.value)}
              value={q06Bure}
              size="small"
            />
          </DIV_questionPart>
        </DIV_question>
        <DIV_button>
          <PrimaryButton
            firstQues={firstQues}
            secondQues={secondQues}
            thirdQues={thirdQues}
            fourthQues={fourthQues}
            fifthQues={fifthQues}
            sixthQues={sixthQues}
            openModal={openModal}
            trueText="結果を確認する"
            falseText="合計値が100になっていない質問があります"
          />
        </DIV_button>

        <Modal
          setShow={setShow}
          show={show}
          firstQues={firstQues}
          secondQues={secondQues}
          thirdQues={thirdQues}
          fourthQues={fourthQues}
          fifthQues={fifthQues}
          sixthQues={sixthQues}
          resultFam={resultFam}
          resultInno={resultInno}
          resultMar={resultMar}
          resultBure={resultBure}
        />
        <Rule 
          ruleShow={ruleShow}
          setRuleShow={setRuleShow}
        />
      </DIV_chartMain>
    </DIV_chart>
  );
};

export default Chart;
