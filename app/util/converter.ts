const pxToNumber = (value: string): number => {
    return Number(value.replace("px", ""))
}

export const calculateInitial = (fullConfig, width) => {
    let initial;
    if (width > pxToNumber(fullConfig.theme.screens["sm"])) {
      initial = "translateX(-100px)";
    } else {
      initial = "translateY(200px)";
    }
    return initial;
  };

  export const calculateInitialSkills = (fullConfig, width) => {
    let initial;
    if (width > pxToNumber(fullConfig.theme.screens["sm"])) {
      initial = "translateX(-100px)";
    } else {
      initial = "translateY(24px)";
    }
    return initial;
  };
  
export const calculateView = (fullConfig, width) => {
    let view;
    if (width > pxToNumber(fullConfig.theme.screens["sm"])) {
      view = "translateX(0px)";
    } else {
      view = "translateY(0px)";
    }
    return view;
  };