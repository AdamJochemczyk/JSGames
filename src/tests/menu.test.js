import {
  getMenuElements,
  getGames,
  addMenuActions,
  leftTriangle,
  rightTriangle,
  bottomTriangle,
  middleTriangle,
  tictactoe,
  checkers,
  rock,
} from "../scripts/menu";

describe("Tests for scripts in menu", () => {
  document.body.innerHTML = `
    <div class="leftTriangle"></div>
    <div class="middleTriangle"></div>
    <div class="rightTriangle"></div>
    <div class="bottomTriangle"></div>
    <div class="tictactoe"></div>
    <div class="checkers"></div>
    <div class="rock"></div>
    <button class="fa-arrow-circle-right"></button>
    <button class="fa-arrow-circle-left"></button>
    <button class="fa-arrow-circle-up"></button>
    `;

  test("menu elements exists", () => {
    getMenuElements();
    expect(leftTriangle.classList.contains("leftTriangle")).toBe(true);
    expect(middleTriangle.classList.contains("middleTriangle")).toBe(true);
    expect(rightTriangle.classList.contains("rightTriangle")).toBe(true);
    expect(bottomTriangle.classList.contains("bottomTriangle")).toBe(true);
  });

  test("game sections exists", () => {
    getGames();
    expect(tictactoe.classList.contains("tictactoe")).toBe(true);
    expect(checkers.classList.contains("checkers")).toBe(true);
    expect(rock.classList.contains("rock")).toBe(true);
  });

  test("At the beginning, the left, lower and right triangles are hidden", () => {
    addMenuActions();
    expect(leftTriangle.classList.contains("v_show")).toBe(false);
    expect(rightTriangle.classList.contains("v_show")).toBe(false);
    expect(bottomTriangle.classList.contains("v_show")).toBe(false);
  });

  test("after click on menu div, show left, right and top triangle",()=>{
      middleTriangle.click()
      expect(leftTriangle.classList.contains("v_show")).toBe(true);
      expect(rightTriangle.classList.contains("v_show")).toBe(true);
      expect(bottomTriangle.classList.contains("v_show")).toBe(true);
  })

  test("after second click on menu div hide left, right and top triangle", ()=>{
      middleTriangle.click()
      expect(leftTriangle.classList.contains("v_show")).toBe(false);
      expect(rightTriangle.classList.contains("v_show")).toBe(false);
      expect(bottomTriangle.classList.contains("v_show")).toBe(false);
  })
});
