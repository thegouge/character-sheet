import {character} from "./main.js";

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

function rollAP() {
  const results = [];
  for (let i = 0; i < 6; i++) {
    const num = [
      Math.round(Math.random() * 6) + 1,
      Math.round(Math.random() * 6) + 1,
      Math.round(Math.random() * 6) + 1,
      Math.round(Math.random() * 6) + 1,
    ];
    num.splice(num.indexOf(Math.min(...num)), 1);
    results.push(num.reduce((acc, curr) => acc + curr));
  }

  return results;
}

export function openAPRoller() {
  console.log("Opening AP roller...");
  const modal = document.getElementById("ap-modal");
  document.getElementsByClassName("close")[0].addEventListener("click", () => {
    closeModal("ap-modal");
  });

  modal.style.display = "block";

  let results = rollAP();

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

export function pickSkillProficiencies(numberOfSkills, listOfSkills) {
  const modal = document.getElementById("skill-modal");
  modal.style.display = "block";
  document.getElementsByClassName("close")[1].addEventListener("click", (e) => {
    closeModal("skill-modal");
  });

  const header = document.getElementById("skill-pick-header");
  header.innerHTML = `Choose ${numberOfSkills} Skills`;

  const pageList = document.getElementById("skill-sub-list");

  const updateSubSkills = (id) => {
    const checkbox = document.getElementById(id);
    if (checkbox.checked) {
      --numberOfSkills;
      header.innerHTML = `Choose ${numberOfSkills} Skills`;
    } else {
      ++numberOfSkills;
      header.innerHTML = `Choose ${numberOfSkills} Skills`;
    }
    if (numberOfSkills === 0) {
      document.getElementById("skill-submit").style.display = "block";
    } else {
      document.getElementById("skill-submit").style.display = "none";
    }
  };

  for (let index in listOfSkills) {
    const currentSkill = listOfSkills[index];

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class", "sub-box");
    checkBox.setAttribute("id", "sub-" + currentSkill.id);
    checkBox.addEventListener("click", (e) => {
      updateSubSkills("sub-" + currentSkill.id);
    });

    const li = document.createElement("li");
    li.setAttribute("class", "sub-skill");
    li.innerHTML = currentSkill.name + ": ";
    li.appendChild(checkBox);

    pageList.appendChild(li);
  }

  document.getElementById("skill-submit").addEventListener("click", () => {
    submitSkillModal(pageList.children);
  });
}

function submitSkillModal(list) {
  document.getElementById("skill-modal").style.display = "none";
  for (let skill of list) {
    const box = skill.children[0];
    let id = box.id.substring(4);
    if (box.checked) {
      document.getElementById(id).checked = true;
      character.addSkillPro(id);
    }
  }
  character.updateStats();
}
