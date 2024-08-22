const outputIDHandle1 = document.getElementById('outputID1');

const outputIDHandle2 = document.getElementById('outputID2');

async function text() {

  try {
    await App.setVariable("someText", "Xanadu");
    outputIDHandle2.innerHTML = await App.getVariable("someText");
    } catch(e) {
    outputIDHandle2.innerHTML = "ERROR in setting app variable:";
  }

}
  
text();

const outputIDHandle = document.getElementById('outputID1');



async function init() {
  try {
    const variableName = await App.getVariable("As_Of_Date");
    outputIDHandle1.innerHTML = variableName;
  } catch (e) {
    console.log("Error in evaluating app variable:", e);
    outputIDHandle1.innerHTML = "Error in evaluating app variable:";
  }
}

init();
