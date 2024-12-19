const btnClicked = (e) => {
  console.log(e.target.innerText);
  inp.value += e.target.innerText;
};

const getResult = () => {
  try {
    const result = eval(inp.value);
    inp.value = result;
  } catch {
    inp.value = "ERR";
  }
};

const backSpace = () => {
  inp.value = inp.value.slice(0, inp.value.length - 1);
};

const clearInp=()=>{
    inp.value=""
}
