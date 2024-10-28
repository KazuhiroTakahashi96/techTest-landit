type Obj = {
  prefCode: string | number;
  prefName: string | number;
};

type RenamedObj = {
  value: string | number;
  label: string | number;
};

// array = [{"prefCode": 1,"prefName": "北海道"}, {"prefCode": 2,"prefName": "青森県"}, ...]
// obj = { prefCode: 'value, prefName: 'label }
// 出力値：[{"value": 1,"label": "北海道"}, {"value": 2,"label": "青森県"}, ...]

const changeObjKeyName = (array: Obj[]) => {
  const newArray = array.map((arr) => {
    const renamedObj: RenamedObj = { value: 0, label: "" };
    const values = Object.values(arr);

    renamedObj.value = values[0];
    renamedObj.label = values[1];

    return renamedObj;
  });

  return newArray;
};

export default changeObjKeyName;
