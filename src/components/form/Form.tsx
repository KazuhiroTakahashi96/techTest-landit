import { useEffect, useState } from "react";
import { useEstateTransactionContext } from "../../context/useEstateTransactionContext";
import { useGetEstateTransaction } from "../../hooks/useGetEstateTransaction";
import { useGetAverageTransaction } from "../../hooks/useGetAverageTransaction";
import getPrefectures from "../../utils/getPrefectures";
import changeObjKeyName from "./utils/changeObjKeyName";

import Button from "../Button";
import Radio from "../Radio";
import Select from "../Select";
import Title from "../Title";

import { displayTypeOptions, yearOptions } from "./utils/selectOptions";

type SelectOptions = {
  value: number | string;
  label: number | string;
};

const Form = () => {
  const [selectedPrefCode, setSelectedPrefCode] = useState<string>(""); // 「場所」のステート
  const [selectedYear, setSelectedYear] = useState<string>(""); // 「年度」のステート
  const [selectedDisplayType, setSelectedDisplayType] = useState<string>(""); // 「種類」のステート
  // 「場所」の選択肢のステート
  const [options, setOptions] = useState<SelectOptions[]>([
    { value: "", label: "" },
  ]);

  const { updateEstateInfo } = useEstateTransactionContext(); // グローバルコンテキスト

  const { fetchEstateTransaction } = useGetEstateTransaction(); // 指定した条件での「不動産取引価格」の取得関数
  const { fetchAverageTransaction } = useGetAverageTransaction(); // 同上条件「不動産取引の全国平均価格」の取得関数

  useEffect(() => {
    const fetchPrefectures = async () => {
      const prefectures = await getPrefectures(); // 都道府県一覧取得

      // Selectコンポーネントで使用できるように変形
      const fixedPrefecturesArray: SelectOptions[] =
        changeObjKeyName(prefectures);

      setOptions([...fixedPrefecturesArray]);
    };
    fetchPrefectures();
  }, []);

  // 「場所」が選択された時発火
  const handleSelectPrefCode = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrefCode(e.target.value);
  };

  // 「年度」が選択された時発火
  const handleSelectYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };

  // 「種類」が選択された時発火
  const handleCheckDisplayType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDisplayType(e.target.value);
  };

  // 「データをダウンロード」ボタンクリック時に発火
  const clickButton = async () => {
    // どれか一つでも選択していない時は、ここで処理を終わらせる
    if (!selectedYear || !selectedPrefCode || !selectedDisplayType) return;

    // 指定した条件で、不動産取引価格の取得
    const estateTransaction = await fetchEstateTransaction(
      selectedYear,
      selectedPrefCode,
      selectedDisplayType
    );

    // 指定した条件で、不動産取引価格の全国平均取得
    const averageTransaction = await fetchAverageTransaction(
      selectedYear,
      selectedDisplayType
    );

    const type: { value: number; label: string } | undefined =
      displayTypeOptions.find((opt) =>
        opt.value === Number(selectedDisplayType) ? opt.label : ""
      );
    if (type?.label) {
      updateEstateInfo({
        year: averageTransaction.years[0].year,
        prefecture: estateTransaction.prefName,
        displayType: type.label,
        transactionPrice: estateTransaction.years[0].value,
        averagePrice: averageTransaction.years[0].value,
      });
    }
  };

  return (
    <div className="w-[360px] h-full p-6 rounded bg-main-primary_light text-text-black">
      <Title>
        <div className="w-full h-12">
          <h3 className="h-6 text-left text-base">表示内容を選択</h3>
        </div>
      </Title>

      <div className="w-full h-[88px] py-6 border-t border-component-border">
        <Select options={options} name="場所" onChange={handleSelectPrefCode}>
          <p className="flex items-center w-12 h-5 mr-6">
            <span className="text-sm">場所</span>
          </p>
        </Select>
      </div>

      <div className="w-full h-[88px] py-6 border-t border-component-border">
        <Select options={yearOptions} name="年度" onChange={handleSelectYear}>
          <p className="flex items-center w-12 h-5 mr-6">
            <span className="text-sm">年度</span>
          </p>
        </Select>
      </div>

      <div className="w-full flex items-start pt-6 border-t border-component-border">
        <p className="flex items-center w-12 h-5 mr-6">
          <span className="text-sm">種類</span>
        </p>
        <div className="flex flex-col gap-3">
          {displayTypeOptions.map((opt) => (
            <Radio
              key={opt.value}
              label={opt.label}
              value={opt.value}
              name="displayType"
              onChange={handleCheckDisplayType}
            />
          ))}
        </div>
      </div>

      <div className="w-full">
        <Button
          // label={isLoading ? "fetching data" : "データをダウンロード"}
          label={"データをダウンロード"}
          type="primary"
          onClick={clickButton}
        />
      </div>
    </div>
  );
};

export default Form;
