function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

export function openAPRoller() {
  console.log("Opening AP roller...");
  const modal = document.getElementById("ap-modal");
  document.getElementsByClassName("close")[0].addEventListener("click", () => {
    closeModal("ap-modal");
  });

  modal.style.display = "block";

  let results = character.rollAP();

  const statLists = [
    document.getElementById("strengthList"),
    document.getElementById("dexterityList"),
    document.getElementById("constitutionList"),
    document.getElementById("intelligenceList"),
    document.getElementById("wisdomList"),
    document.getElementById("charismaList"),
  ];

  statLists.forEach((list) => {
    list.addEventListener("change", () => {
      rePopulateAPs(list, results);
    });

    results.forEach((number) => {
      const item = document.createElement("option");
      item.setAttribute("value", number);
      item.text = number;
      list.add(item);
    });
  });

  document.getElementById("ap-submit").onclick = () => {
    modal.style.display = "none";
    document.getElementById("str").value = document.getElementById(
      "strengthList"
    ).value;
    document.getElementById("dex").value = document.getElementById(
      "dexterityList"
    ).value;
    document.getElementById("con").value = document.getElementById(
      "constitutionList"
    ).value;
    document.getElementById("int").value = document.getElementById(
      "intelligenceList"
    ).value;
    document.getElementById("wis").value = document.getElementById(
      "wisdomList"
    ).value;
    document.getElementById("cha").value = document.getElementById(
      "charismaList"
    ).value;

    character.updateStats();
  };
}

function rePopulateAPs(selectedList, scoreList) {
  const otherLists = [...document.getElementsByClassName("ap-list")].filter(
    (element) => element !== selectedList && !element.value
  );
  const selectedIndex = scoreList.indexOf(parseInt(selectedList.value));
  scoreList.splice(selectedIndex, 1);

  for (let i in otherLists) {
    let currentList = otherLists[i];
    currentList.innerHTML = "<option value=''>Choose!</option>";
    scoreList.forEach((score) => {
      const item = document.createElement("option");
      item.setAttribute("value", score);
      item.text = score;
      currentList.add(item);
    });
  }
}
