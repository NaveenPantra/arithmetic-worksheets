import React from "react";
import { OPERATORS_AND_SIZES } from "./global.constants.js";

export const SheetsConfigContext = React.createContext(OPERATORS_AND_SIZES);

const useSheetsConfig = () => {
  const [sheetsConfig, setSheetsConfig] = React.useState(OPERATORS_AND_SIZES);

  const handleUpdateSheetsConfig = React.useCallback(
    (operatorIndex, sizeIndex, updatedSheetsCount) => {
      if (updatedSheetsCount > 10 || updatedSheetsCount < 0) return;
      setSheetsConfig((sheetsConfig) =>
        sheetsConfig.map((sheetConfig, sheetConfigIndex) => {
          if (sheetConfigIndex === operatorIndex) {
            sheetConfig.selectedSheetsCount =
              sheetConfig.selectedSheetsCount.map(
                (sheetCount, sheetCountIndex) => {
                  if (sizeIndex === sheetCountIndex) {
                    return updatedSheetsCount;
                  }
                  return sheetCount;
                },
              );
          }
          return sheetConfig;
        }),
      );
    },
    [],
  );

  return React.useMemo(
    () => ({
      sheetsConfig,
      handleUpdateSheetsConfig,
    }),
    [sheetsConfig, handleUpdateSheetsConfig],
  );
};

// eslint-disable-next-line react/prop-types
const SheetsContextProvider = ({ children }) => {
  const sheetsConfig = useSheetsConfig();

  return (
    <SheetsConfigContext.Provider value={sheetsConfig}>
      {children}
    </SheetsConfigContext.Provider>
  );
};

export default SheetsContextProvider;
