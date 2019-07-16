export default function initializePage() {
  const classList = document.getElementById("class-list");
  const backgroundList = document.getElementById("background-list");
  const raceList = document.getElementById("race-list");

  // Populate Class List
  classes.forEach((playerClass) => {
    classList.innerHTML += createListItem(playerClass.name);
  });

  // Populate Backround List
  backgrounds.forEach((background) => {
    backgroundList.innerHTML += createListItem(background.name);
  });

  //Populate Race List
  races.forEach((race) => {
    raceList.innerHTML += createListItem(race.name);
  });

  // Event Listeners
  document.getElementById("classes").addEventListener("change", () => {
    classBonus(document.getElementById("classes").value);
  });
  document.getElementById("races").addEventListener("change", () => {
    raceBonus(document.getElementById("races").value);
  });
  document.getElementById("backgrounds").addEventListener("change", () => {
    backgroundBonus(document.getElementById("backgrounds").value);
  });
  document.getElementById("update-btn").addEventListener("click", () => {
    updateStats();
  });
  document.getElementById("ap-btn").addEventListener("click", () => {
    openAPRoller();
  });
  document.getElementById("level-btn").addEventListener("click", () => {
    levelUp();
  });

  //creating Saving Throw checkboxes and modifiers
  skills.savingThrows.forEach((sThrow) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "st-li");

    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("class", "savingThrow");
    input.setAttribute("id", sThrow.id);

    input.addEventListener("click", () => {
      addPro(sThrow.id, "savingThrows");
    });

    const stOutput = document.createElement("p");
    stOutput.setAttribute("class", "stMod");
    stOutput.setAttribute("id", sThrow.id + "-mod");

    listItem.appendChild(input);
    listItem.appendChild(stOutput);
    document.getElementById("saving-throws").appendChild(listItem);
  });

  //creating Skill checkboxes and modifiers
  skills.skills.forEach((skill) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "skill-li");

    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("class", "skill");
    input.setAttribute("id", skill.id);

    input.addEventListener("click", () => {
      addPro(skill.id, "skills");
    });

    const stOutput = document.createElement("p");
    stOutput.setAttribute("class", "skillMod");
    stOutput.setAttribute("id", skill.id + "-mod");

    listItem.appendChild(input);
    listItem.appendChild(stOutput);
    document.getElementById("skills").appendChild(listItem);
  });

  updateStats();
}
